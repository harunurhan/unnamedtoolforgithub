# -*- coding: utf-8 -*-
from datetime import datetime
from app import db


class Checkup(db.Model):
    __tablename__ = 'checkup'

    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.utcnow)
    # TODO: add one unique constraint on the column group of owner and repo
    owner = db.Column(db.String)
    repo = db.Column(db.String)
    criteria = db.relationship('Criterion', backref='criterion',
                                lazy='dynamic')
