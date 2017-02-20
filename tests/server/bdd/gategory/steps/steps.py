from behave import *
from pyquery import PyQuery as Pq
from expecter import expect


@given("I currently do not have any categoalies")
def step_impl(context):
    pass


@when("I load up the Categoalies page")
def step_impl(context):
    context.response = context.client.get('/categoaly')


@then("I should see the Categoalies title")
def step_impl(context):
    expect(Pq(context.response.data)('title').text()) == 'Categoalies'
