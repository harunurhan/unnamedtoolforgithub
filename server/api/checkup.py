# -*- coding: utf-8 -*-
from flask import Blueprint
from flask_restful import Api, Resource
<<<<<<< HEAD
from flask import request
from checker import Checker

checkup_api = Api(Blueprint('checkup_api', __name__))  # pylint: disable=invalid-name

=======
from models import Checkup

checkup_api = Api(Blueprint('checkup_api', __name__)) # pylint: disable=invalid-name
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4

@checkup_api.resource('/checkup')
class CheckupAPI(Resource):
    @staticmethod
<<<<<<< HEAD
    def post():
        # TODO: add documentation for the service including json response and post data format.
        data = request.get_json(force=True)
        checker = Checker(data['owner'], data['repo'])
        return checker.check()
=======
    def get():
        repo_name_param = request.args.get('repo_name')
        checkup = Checkup.query.filter_by(repo_name = repo_name_param)
        return chekcup;
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
