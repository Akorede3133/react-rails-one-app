class Api::V1::GreetingsController < ApplicationController do
  def show
    def show
      @greeting = Greeting.all.sample
      render json: @greeting, only: :message
    end
  end
end