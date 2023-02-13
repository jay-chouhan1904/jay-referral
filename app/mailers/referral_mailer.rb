class ReferralMailer < ApplicationMailer
    default from: 'no_reply@example.com'

    def referral(user)
        @invited_user = user
        p @invited_user
        mail(to: @invited_user[:email], subject: 'Welcome to My Awesome Site')
    end

end
