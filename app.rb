require 'bundler'
Bundler.require()


ActiveRecord::Base.establish_connection(
  :adapter  => "postgresql",
  :database => "coolcardapp",
)

require './models/card'


get '/' do
  erb :index
end


# get \api\cards
# All cards
get '/api/cards' do
  content_type :json
  cards = Card.all
  cards.to_json
end

# get \api\cards\:id
# A specific card
get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

# post \api\cards
# Create a new card
post '/api/cards' do
  content_type :json
  card = Card.create(params[:card])
  card.to_json
end

# put \api\cards\:id
# Update an existing card
put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(params[:card])
  card.to_json
end

# patch \api\cards\:id
# Update an existing card
patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(params[:card])
  card.to_json
end

# delete \api\cards\:id
# Delete an existing card
delete '/api/cards/:id' do
  content_type :json
  Card.delete(params[:id].to_i)
  {message: 'Success'}.to_json
end
