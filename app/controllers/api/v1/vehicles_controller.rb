module Api
    module V1
        class VehiclesController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                vehicles = Vehicle.all

                render json: VehicleSerializer.new(vehicles,options).serialized_json
            end

            def featured
                vehicles = Vehicle.limit(4)

                render json: VehicleSerializer.new(vehicles, options).serialized_json
            end

            def show
                vehicle = Vehicle.find_by(slug: params[:slug])

                render json: VehicleSerializer.new(vehicle,options).serialized_json
            end

            def create
                vehicle = Vehicle.new(vehicle_params)

                if vehicle.save
                    render json: VehicleSerializer.new(vehicle).serialized_json
                else
                    render json: {error: vehicle.errors.messages}, status: 422
                end 
            end

            def update
                vehicle = Vehicle.find_by(slug: params[:slug])

                if vehicle.update(vehicle_params)
                render json: VehicleSerializer.new(vehicle,options).serialized_json
                else
                    render json: {error: vehicle.errors.messages}, status: 422
                end
            end

            def destroy
                vehicle = Vehicle.find_by(slug: params[:slug])

                if vehicle.destroy
                    head :no_content
                else
                    render json: {error: vehicle.errors.messages}, status: 422
                end
            end

            private

            def vehicle_params
                params.require(:vehicle).permit(:make, :model, :vin, :color, :mileage, :image_url)
            end

            def options
                @options ||= { include: %i[comments]}
            end
        end
    end
end
