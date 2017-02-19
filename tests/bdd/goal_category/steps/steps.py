from behave import *
from pyquery import PyQuery as Pq
from expecter import expect


@given("I currently do not have any gategories")
def step_impl(context):
    pass


@when("I load up the Gategories page")
def step_impl(context):
    context.response = context.client.get('/goal-category')


@then("I should see the Gategories title")
def step_impl(context):
    expect(Pq(context.response.data)('title').text()) == 'Goal Categories'
