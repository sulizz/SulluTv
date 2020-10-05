class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
    

    # CRLLL
    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        if !logged_in? 
            render json: ['please log in'], status: 422
        end
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
        
    end

    def logged_in?
        !!current_user
    end

    def logout
        current_user.reset_session_token! 
        session[:session_token] = nil 
        @current_user = nil;
    end
end
