class TasksController < ApplicationController
    def index
        @tasks = Task.all
        render json: @tasks
    end
    def show
        @task = Task.find params[:id]
        render json: @task
    end
    def create
        @task = Task.create(
            description: params[:description],
            length: params[:length],
            urgency: params[:urgency],
            user_id: params[:user_id]
        )
        render json: @task, status: :created

    end
    def update
          @task = Task.find params[:id]
          @task.update(
            description: params[:description],
            length: params[:length],
            urgency: params[:urgency],
            user_id: params[:user_id]
        )
        render json: @task, status: :ok
    end
    def destroy
         @task = Task.find params[:id]
         @task.destroy
         render status: :no_content
    end
end
