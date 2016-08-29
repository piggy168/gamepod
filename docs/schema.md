#Schema

## Table Users
data type  | column          |note
-----------|-----------------|---------------
  string   |name            |null: false indexed
  string   |password_digest |null: false
  string   |photo_url
  text     |bio

## Table Projects
 data type |  column     | note
-----------|-------------|-------------------
  string   |title       |null: false
  text     |description |null: false
  string   |photo_url   |null: false
  integer  |creater_id  |null: false indexed
  date     |end_date    |null: false
  integer  |goal        |null: false
  integer  |funded      |null: false
  string   |category    |null: false
  datetime |created_at  |null: false
  datetime |updated_at  |null: false


## Table Rewards
 data type |  column     | note
-----------|-------------|-------------------
  string   |title       |null: false
  string   |description |null: false
  integer  |amount      |null: false
  integer  |project_id  |null: false indexed
  integer  |limit

## Table Backers
 data type |  column    |  note
-----------|------------|--------------------
  integer  |user_id    |null: false indexed
  integer  |reward_id  |null: false indexed
  datetime |created_at |null: false
  datetime |updated_at |null: false
