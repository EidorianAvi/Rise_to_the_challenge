class UsersController < ApplicationController

    def index
        @Users = User.all
        render json: @Users
    end
    def show
        @user = User.find params[:id]
        render json: @user, include: [:tasks]
    end
    def create
        @user = User.create(
          name: params[:name]
        )
        render json: @user, status: :created

    end
    def update
          @user = User.find params[:id]
          @user.update(
            name: params[:name]
        )
        render json: @user, status: :ok
    end
    def destroy
         @user = User.find params[:id]
         @user.destroy
         render status: :no_content
    end

end
