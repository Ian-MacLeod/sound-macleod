# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  length     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  data       :string           not null
#  image      :string
#

class Track < ApplicationRecord
  validates :title, :user, presence: true
  validates :title, length: { maximum: 35 }

  mount_uploader :data, AudioUploader
  validates_integrity_of :data

  mount_uploader :image, ImageUploader

  scope :ordered,
        -> { includes(:playlist_memberships, :user).order('playlist_memberships.ord') }

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :commenters,
           through: :comments,
           source: :user
  has_many :likes
  has_many :likers,
           through: :likes,
           source: :user
  has_many :playlist_memberships,
           dependent: :destroy,
           inverse_of: :track
  has_many :playlists,
           through: :playlist_memberships,
           source: :playlist
end
