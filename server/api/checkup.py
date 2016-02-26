# -*- coding: utf-8 -*-
from flask import Blueprint
from flask_restful import Api, Resource
from models import Checkup

checkup_api = Api(Blueprint('checkup_api', __name__)) # pylint: disable=invalid-name

@checkup_api.resource('/checkup')
class CheckupAPI(Resource):
    @staticmethod
    def get():
        repo_name_param = request.args.get('repo_name')
        checkup = Checkup.query.filter_by(repo_name = repo_name_param)
        return chekcup;
