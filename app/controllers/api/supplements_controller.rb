class Api::SupplementsController < Api::ApiController

  def index
    @supplements = Supplement.all
  end

  def show
    @supplement = Supplement.find(params[:id])
  end

end
