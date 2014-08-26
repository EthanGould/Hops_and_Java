class BreweriesController < ApplicationController
  before_action :set_brewery, only: [:show]

  # GET /breweries
  # GET /breweries.json
  def index
    @breweries = Brewery.all
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def new
    @brewery = Brewery.new
  end

  def create
    @brewery = Brewery.new(brewery_params)

    respond_to do |format|
      if @brewery.save
        format.html { redirect_to @brewery, notice: 'Brewery was successfully created.' }
        format.json { render :show, status: :created, location: @brewery }
      else
        format.html { render :new }
        format.json { render json: @brewery.errors, status: :unprocessable_entity }
      end
    end
  end

  # # PATCH/PUT /breweries/1
  # # PATCH/PUT /breweries/1.json
  # def update
  #   respond_to do |format|
  #     if @brewery.update(brewery_params)
  #       format.html { redirect_to @brewery, notice: 'Brewery was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @brewery }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @brewery.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /breweries/1
  # # DELETE /breweries/1.json
  # def destroy
  #   @brewery.destroy
  #   respond_to do |format|
  #     format.html { redirect_to breweries_url, notice: 'Brewery was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def brewery_params
      params[:brewery]
    end
end
