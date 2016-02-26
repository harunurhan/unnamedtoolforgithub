# -*- coding: utf-8 -*-
from datetime import datetime

from app import db

class Checkup(db.Model):
    __tablename__ = 'checkup'

    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.utcnow)
    repo_name = db.Column(db.String, unique=True) # github-user/repo-name
    criterias = db.relationship('Criteria', backref='criteria',
                                lazy='dynamic')
