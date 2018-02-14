json.extract! restaurant, :id, :location, :img_url, :description, :name, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
