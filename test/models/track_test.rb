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

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
