# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  image      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, :user, presence: true

  belongs_to :user
  has_many :playlist_memberships,
           dependent: :destroy,
           inverse_of: :playlist
  has_many :tracks,
           through: :playlist_memberships,
           source: :track
end
