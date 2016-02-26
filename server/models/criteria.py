# -*- coding: utf-8 -*-
from datetime import datetime

from app import db

class Criteria(db.Model):
    __tablename__ = 'criteria'

    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.utcnow)
    checkup_id = db.Column(db.Integer, db.ForeignKey('checkup.id'))
