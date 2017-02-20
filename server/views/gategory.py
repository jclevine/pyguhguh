from flask import Blueprint, render_template, send_from_directory

# TODO: jlevine - Go through named params and get rid of very obvious defaults.
gategory = Blueprint(name='gategory', import_name=__name__, template_folder='templates')


# TODO: jlevine - Should be using nginx or another web server for static files.
@gategory.route('/js/<path:path>')
def send_js(path):
    response = send_from_directory('static/js', path)
    response.headers['Content-Encoding'] = 'gzip'
    return response


@gategory.route('/gategory')
def gategory_list():
    return render_template('gategory/list.html')
