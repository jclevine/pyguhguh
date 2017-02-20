from flask import Blueprint, render_template

gategory = Blueprint(name='gategory', import_name=__name__, template_folder='templates')


@gategory.route('/gategory')
def gategory_list():
    return render_template('gategory/list.html')
