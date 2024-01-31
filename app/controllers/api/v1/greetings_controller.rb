class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all.sample
    render json: @greeting, only: :message
  end
end
