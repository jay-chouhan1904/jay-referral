class SessionsController < Devise::SessionsController
    # prepend_before_action :require_no_authentication, :only => [ :create ]

    def create
      @user = User.find_by_email(user_params[:email])
      unless @user.present?
        render json: {error: "Sorry No User Found"} 
        return
      end
  
      if @user.valid_password?(user_params[:password])
        sign_in :user, @user
        render json: {success: true, email: @user.email}
      else
        render json: {error: "Wrong Password!"}
      end
    end
  
    def destroy
      begin
        response = {}
        sign_out(@user)
        response[:success] = true
      rescue
       response[:error] = "Something Went Wrong!"
      end
      render :json=> response
    end
  
  
      private
  
      def invalid_login_attempt
        warden.custom_failure!
        render json: {error: 'invalid login attempt'}, status: :unprocessable_entity
      end
  
      def user_params
         params.require(:user).permit(:email, :password)
      end
  
  end