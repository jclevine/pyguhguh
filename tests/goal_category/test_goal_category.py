import unittest as ut
import guhguh
from pyquery import PyQuery as pq


class TestGoalCategory(ut.TestCase):

    def setUp(self):
        self.app = guhguh.app.test_client()
        guhguh.app.config['TESTING'] = True

    def test_something(self):
        response = self.app.get('/goal-category')
        self.assertEqual(200, response.status_code)
        actual_html = pq(response.data)
        self.assertEqual('Goal Categories', actual_html('title').text())


if __name__ == '__main__':
    ut.main()
