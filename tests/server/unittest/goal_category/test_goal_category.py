import unittest as ut

from pyquery import PyQuery as Pq

from server import guhguh


class TestCategoaly(ut.TestCase):
    app = guhguh.app.test_client()

    def setUp(self):
        guhguh.app.config['TESTING'] = True

    def test_categoalies_title_is_categoalies(self):
        response = self.app.get('/categoaly')
        self.assertEqual(200, response.status_code)
        actual_html = Pq(response.data)
        self.assertEqual('Categoalies', actual_html('title').text())


if __name__ == '__main__':
    ut.main()
