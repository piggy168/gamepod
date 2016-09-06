class Backer < ActiveRecord::Base
  validates :user_id, :reward_id, presence: true
  belongs_to :reward,
  primary_key: :id,
  foreign_key: :reward_id,
  class_name: :Reward

  belongs_to :user
  has_one :project,
  through: :reward


end
