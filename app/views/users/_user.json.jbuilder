json.extract! user, :id, :name, :location, :dating_preference, :age, :gender, :created_at, :updated_at
json.url user_url(user, format: :json)
