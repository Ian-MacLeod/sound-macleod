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
  validates :title, :user_id, :length, presence: true

  mount_uploader :data, AudioUploader
  validates_integrity_of :data

  mount_uploader :image, ImageUploader

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :commenters,
           through: :comments,
           source: :user
  has_many :likes
  has_many :likers,
           through: :likes,
           source: :user
  has_many :playlist_memberships
  has_many :playlists,
           through: :playlist_memberships,
           source: :playlist
end
