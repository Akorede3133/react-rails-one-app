# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Clear existing data
Greeting.destroy_all

# Create five different greetings
greetings = [
  "Hello, welcome to our website!",
  "Greetings from the team!",
  "Good day! How can we assist you today?",
  "Welcome aboard! Enjoy your stay.",
  "Hi there! Thanks for visiting."
]

greetings.each do |message|
  Greeting.create(message: message)
end

puts "Seed data has been successfully created!"
