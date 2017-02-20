from flask import Flask

from views.gategory import gategory

# TODO: jlevine - Maybe use Flask-Webpack? https://github.com/nickjj/flask-webpack

app = Flask(__name__, static_url_path='')
app.register_blueprint(gategory)

if __name__ == '__main__':  # pragma: no cover
    app.run()
