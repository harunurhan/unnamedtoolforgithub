# -*- coding: utf-8 -*-
from flask import Blueprint
from flask_restful import Api, Resource
from flask import request
from checker import Checker

checkup_api = Api(Blueprint('checkup_api', __name__))  # pylint: disable=invalid-name


@checkup_api.resource('/checkup')
class CheckupAPI(Resource):
    @staticmethod
    def post():
        # TODO: add documentation for the service including json response and post data format.
        data = request.get_json(force=True)
        checker = Checker(data['owner'], data['repo'])
        return checker.check()
