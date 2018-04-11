# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  track_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :user, :track, presence: true
  validates :user_id, uniqueness: { scope: :track_id }

  belongs_to :user
  belongs_to :track
end
