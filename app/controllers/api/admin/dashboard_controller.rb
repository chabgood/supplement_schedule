class Api::Admin::DashboardController < Api::Admin::AdminController

  def index
    metrics = {
      metrics: {
        musicians: Musician.count,
        users: User.count
      }
    }

    render json: metrics.to_json
  end

end
