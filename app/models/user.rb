# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_pic     :string
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, length: { maximum: 20 }
  attr_reader :password
  before_validation :ensure_session_token

  mount_uploader :profile_pic, ImageUploader

  has_many :tracks
  has_many :comments
  has_many :commented_tracks,
           through: :comments,
           source: :track
  has_many :likes
  has_many :liked_tracks,
           through: :likes,
           source: :track
  has_many :playlists

  def self.find_by_credentials(username, password)
    user = self.find_by(username: username)
    user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
