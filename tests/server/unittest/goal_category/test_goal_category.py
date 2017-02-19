import unittest as ut

from pyquery import PyQuery as Pq

from server import guhguh


class TestGoalCategory(ut.TestCase):
    app = guhguh.app.test_client()

    def setUp(self):
        guhguh.app.config['TESTING'] = True

    def test_goal_categories_title_is_goal_categories(self):
        response = self.app.get('/goal-category')
        self.assertEqual(200, response.status_code)
        actual_html = Pq(response.data)
        self.assertEqual('Goal Categories', actual_html('title').text())


if __name__ == '__main__':
    ut.main()
