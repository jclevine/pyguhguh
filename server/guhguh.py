from flask import Flask

from views.gategory import gategory

app = Flask(__name__)
app.register_blueprint(gategory)

if __name__ == '__main__':  # pragma: no cover
    app.run()
