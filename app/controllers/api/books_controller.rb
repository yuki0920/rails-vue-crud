module Api
  class BooksController < ApplicationController
    def index
      @books = Book.all
      render formats: :json
    end

    def show
      @book = Book.find(params[:id])
      render json: @book
    end
  end
end
