from server import guhguh


def before_all(context):
    guhguh.app.config['TESTING'] = True
    context.client = guhguh.app.test_client()
