# == Schema Information
#
# Table name: playlist_memberships
#
#  id          :integer          not null, primary key
#  track_id    :integer          not null
#  playlist_id :integer          not null
#  ord         :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistMembership < ApplicationRecord
  validates :track, :playlist, :ord, presence: true
  validates :playlist_id, uniqueness: { scope: :ord }

  belongs_to :playlist
  belongs_to :track
end
