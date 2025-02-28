from    flask           import  Flask, request
from    flask_cors      import  CORS
from    fastlane        import  Fastlane



class App():
    def __init__(self):
        self.app = Flask(__name__)
        self.fastlane = Fastlane()

        CORS(self.app)

        self.app.add_url_rule('/', 'index', self.index, methods = ['GET'])
        self.app.add_url_rule('/get_training', 'get_training', self.firebase_auth_required(self.get_training))


    def firebase_auth_required(self, func):
        
        def wrapper(*args, **kwargs):
            auth_header = request.headers.get("Authorization")

            if not auth_header or not auth_header.startswith("Bearer "):
                return {"error": "Missing or invalid token"}, 401

            id_token = auth_header.split("Bearer ")[1]
            uid = self.fastlane.verify_token(id_token)

            if uid:
                return func(uid, *args, **kwargs)
            
            return {"error": "Invalid token"}, 401

        wrapper.__name__ = func.__name__ 
        return wrapper

    def index(self):
        return 'Hello World!'
    
    def get_training(self, uid):
        return {'status' : uid}
        


fastlane_api = App()
fastlane_app = fastlane_api.app

if __name__ == "__main__":
    fastlane_app.run(debug=True, port=5197)
