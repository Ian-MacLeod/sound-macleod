# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  image_url  :string
#  length     :float            not null
#  blob_url   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :user_id, :length, :blob_url, presence: true

  belongs_to :user
end
