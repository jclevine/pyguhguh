from flask import Flask
from views.goal_category import goal_category


app = Flask(__name__)
app.register_blueprint(goal_category)

if __name__ == '__main__':
    app.run()
