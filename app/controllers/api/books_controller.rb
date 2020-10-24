module Api
  class BooksController < ApplicationController
    protect_from_forgery exept: %i[create]

    def index
      @books = Book.all
      render formats: :json
    end

    def show
      @book = Book.find(params[:id])
      render json: @book
    end

    def create
      @book = Book.new(book_params)
      if @book.save
        head :no_content
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

    def update
      @book = Book.find(params[:id])
      if @book.update(book_params)
        head :no_content
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @book = Book.find(params[:id])
      if @book.destroy
        head :no_content
      else
        render json: @book.erros, status: :unprocessable_entity
      end
    end

    private

    def book_params
      params.fetch(:book, {}).permit(:title, :author, :publisher, :genre)
    end
  end
end
