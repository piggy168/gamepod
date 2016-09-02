class Reward < ActiveRecord::Base
  validates :title, :description, :amount, :project_id, presence: true

  belongs_to :project
  has_many :backers

end
