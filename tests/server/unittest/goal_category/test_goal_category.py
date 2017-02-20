import unittest as ut

from pyquery import PyQuery as Pq

from server import guhguh


class TestGategory(ut.TestCase):
    app = guhguh.app.test_client()

    def setUp(self):
        guhguh.app.config['TESTING'] = True

    def test_gategories_title_is_gategories(self):
        response = self.app.get('/gategory')
        self.assertEqual(200, response.status_code)
        actual_html = Pq(response.data)
        self.assertEqual('Gategories', actual_html('title').text())


if __name__ == '__main__':
    ut.main()
