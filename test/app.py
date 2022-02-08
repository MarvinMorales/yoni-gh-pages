import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin
import mysql.connector
from datetime import datetime, timedelta
import jwt
import json

app = Flask(__name__)
CORS(app)

def Encode_jwt(__payload:str) -> str:
  token_bytes = jwt.encode(__payload, key='__|api_Hass_Marv|__', algorithm='HS512')
  return token_bytes

def Validate_token(__token:str) -> str:
  try:
    jwt.decode(__token, key='__|api_Hass_Marv|__', algorithms=['HS256', 'HS512'])
    return {"response": "Valid"}
  except jwt.exceptions.DecodeError as err:
    return {"response": "__TOKEN NOT VALID__", "err": str(err)}
  except jwt.ExpiredSignatureError as err:
    return {"response": "__TOKEN EXPIRED__", "err": str(err)}
  except jwt.InvalidTokenError as err:
    return {"response": "__TOKEN NOT VALID__", "err": str(err)}

#___ Connection to DataBase ___#
def connectDataBase() -> mysql.connector:
    conn = mysql.connector.connect(
        host="mysql.pythonanywhere-services.com",
        database="db",
        user="user",
        passwd="pass!")
    return conn

@app.route("/", methods=["GET"])
@cross_origin()
def index_route() -> render_template:
    return render_template("index.html", title="Welcome!"), 200

#___ Initial Route to the server ___#
@app.route("/get/token", methods=["GET"])
@cross_origin()
def token_generator() -> dict:
    token = Encode_jwt({"user": f"__USER__{datetime.now()}", 'exp': datetime.now() + timedelta(days=1)})
    return {"success": True, "client_IP_address":request.remote_addr, "token": token}

#___ Route to get comments from server ___#
@app.route("/get_comments/<token>", methods=["GET"])
@cross_origin()
def get_comments(token:str) -> dict:
    validation = Validate_token(token)
    if validation['response'] == "Valid":
        if conn := connectDataBase():
            cursor = conn.cursor()
            cursor.execute("Select * from `commentstable`")
            result = cursor.fetchall()
            cursor.close()
            conn.close()
            return {"success": True, "data": [list(x) for x in result]}, 200
    else: return {"success": False, "reason": validation['err']}, 401

@app.route("/get_clients/<string:token>", methods=["GET"])
@cross_origin()
def get_clients(token:str) -> dict:
    validation = Validate_token(token)
    if validation['response'] == "Valid":
        if conn := connectDataBase():
            cursor = conn.cursor()
            cursor.execute("Select * from `clientstable`")
            result = cursor.fetchall()
            cursor.close()
            conn.close()
            return {"success": True, "data": [list(x) for x in result]}, 200
    else: return {"success": False, "reason": validation['err']}, 401

#___ Route to set clients info to DB ___#
@app.route("/save/client_info", methods=["POST"])
@cross_origin()
def save_clients_info() -> dict:
    if request.method == "POST":
        requestt = json.loads(request.data)
        validation = Validate_token(requestt['token'])
        if validation['response'] == "Valid":
            # import the necessary components first
            login = "mohammedmalaki92@gmail.com" # paste your login generated by Mailtrap
            password = "****" # paste your password generated by Mailtrap
            sender_email = "bot@sellmyhousequickfast.com"
            message = MIMEMultipart("alternative")
            message["From"] = sender_email

            message['Subject'] = ""
            message.replace_header('Subject', "Yoni, You have a New deal!!")

            html = f"""
            <label>Name: <p>{requestt['name']}</p></label>
            <label>Name: <p>{requestt['email']}</p></label>
            <label>Name: <p>{requestt['phone']}</p></label>
            <label>Name: <p>{requestt['address']}</p></label>
            """
            # send your email
            with smtplib.SMTP("smtp.gmail.com", 587) as server:
                server.ehlo()
                server.starttls()
                server.login(login, password)
                # convert both parts to @MIMEText objects and add them to the MIMEMultipart message
                HTMLPart = MIMEText(html, "html") 
                message.attach(HTMLPart) #Remove or refresh the payload of the attachment
                server.sendmail(sender_email, "marv_mustaf@hotmail.com", message.as_string())
                message.set_payload(None)
                server.close()

            if conn := connectDataBase():
                cursor = conn.cursor()
                cursor.execute(f"""Insert into `clientstable`
                (`name`, `email`, `phone`, `address`) values
                ('{requestt['name']}', '{requestt['email']}', '{requestt['phone']}', '{requestt['address']}')""")
                conn.commit()
                cursor.close()
                conn.close()
                return {"success": True, "data": "Data saved in DB"}, 200
        else: return {"success": False, "reason": "__Forbidden__", "validaion": validation['err']}, 401


#___ Route to set comments to DB ___#
@app.route("/save/client_comments", methods=["POST"])
@cross_origin()
def save_clients_comments() -> dict:
    if request.method == "POST":
        requestt = json.loads(request.data)
        validation = Validate_token(requestt['token'])
        if validation['response'] == "Valid":
            if conn := connectDataBase():
                cursor = conn.cursor()
                cursor.execute(f"""Insert into `commentstable`
                (`name`, `lastname`, `comment`) values
                ('{requestt['name']}', '{requestt['lastname']}', '{requestt['comment']}')""")
                conn.commit()
                cursor.close()
                conn.close()
                return {"success": True, "data": "Comment saved in DB"}, 200
        else: return {"success": False, "reason": "__Forbidden__", "validaion": validation['err']}, 401


if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=12000)