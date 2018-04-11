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

require 'test_helper'

class PlaylistMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
