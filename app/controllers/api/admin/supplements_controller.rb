class Api::Admin::SupplementsController < Api::Admin::AdminController
  before_action :load_supplement, except: [:index, :new, :create]

  def index
    @supplements = Supplement.search(search_params)
                         .result
                         .page(params[:page])
                         .per(params[:per_page])
  end

  def new
    @supplement = Supplement.new
  end

  def edit
  end

  def create
    @supplement = Supplement.create(supplement_params)

    if @supplement.errors.any?
      render json: {success: false, errors: @supplement.errors.messages}.to_json, status: 422
    else
      render template: '/api/admin/supplements/edit'
    end
  end

  def update
    if @supplement.update_attributes(supplement_params)
      render template: '/api/admin/supplements/edit'
    else
      render json: {success: false, errors: @supplement.errors.messages}.to_json, status: 422
    end
  end

  def destroy
    if @supplement.destroy
      head 200
    else
      render json: {success: false, errors: @supplement.errors.messages}.to_json, status: 422
    end
  end

  private

    def supplement_params
      params.require(:supplement).permit(
        :name,
        :amount
      )
    end

    def load_supplement
      @supplement = Supplement.find(params[:id])
    end

end
