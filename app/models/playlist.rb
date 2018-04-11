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
  validates :title, :user_id, presence: true

  has_many :playlist_memberships
  has_many :tracks,
           through: :playlist_memberships,
           source: :track
end
