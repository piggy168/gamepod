class Project < ActiveRecord::Base
  validates :title, :description, :photo_url, :creater_id, :end_date, :goal, :funded, :category, presence: true

  belongs_to :owner,
  foreign_key: :creater_id,
  class_name: "User"

  has_many :rewards
  has_many :backers
end
