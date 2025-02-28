import firebase_admin
from firebase_admin import credentials, auth

import pyrebase

from dotenv import load_dotenv
import os


class Fastlane:

    def __init__(self):

        load_dotenv()
        self.secret             = os.getenv('APP_SECRET_KEY')
        firebase_credentials    = credentials.Certificate(os.getenv('FIREBASE_CRED_PATH'))
        firebase_admin.initialize_app(firebase_credentials)
        

    def verify_token( self, token : str):
        try:
            decoded_token = auth.verify_id_token( token )
            uid = decoded_token["uid"]
            return uid
        except:
            return None
