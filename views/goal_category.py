from flask import Blueprint, render_template

goal_category = Blueprint(name='goal_category', import_name=__name__, template_folder='templates')


@goal_category.route('/goal-category')
def goal_category_list():
    return render_template('goal_category/list.html')
