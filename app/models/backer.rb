class Backer < ActiveRecord::Base
  validates :user_id, :reward_id, presence: true
  has_many :rewards
  has_many :users
  has_one :project

end
