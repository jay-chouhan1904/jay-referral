class CurrentUserController < ApplicationController

    def verify_current_user
        if current_user
            render json: { status:true }
            return
        end

        render json: { status: false}
    end
end
