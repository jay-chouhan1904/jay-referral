class HomeController < ApplicationController
  protect_from_forgery with: :null_session

  def index
  end

  def send_referral
    ReferralMailer.referral({email: params[:email]}).deliver_now

    render json: {sent: 'ok'}
  end
end
