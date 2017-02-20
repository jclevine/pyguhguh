from flask import Flask

from views.categoaly import categoalies

# TODO: jlevine - Maybe use Flask-Webpack? https://github.com/nickjj/flask-webpack
# TODO: jlevine - Change Gategories into Catergoalies

app = Flask(__name__, static_url_path='')
app.register_blueprint(categoalies)

if __name__ == '__main__':  # pragma: no cover
    app.run()
