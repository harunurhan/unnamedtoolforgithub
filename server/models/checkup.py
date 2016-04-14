# -*- coding: utf-8 -*-
from datetime import datetime
<<<<<<< HEAD
from app import db

=======

from app import db
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4

class Checkup(db.Model):
    __tablename__ = 'checkup'

    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.utcnow)
<<<<<<< HEAD
    # TODO: add one unique constraint on the column group of owner and repo
    owner = db.Column(db.String)
    repo = db.Column(db.String)
    criteria = db.relationship('Criterion', backref='criterion',
=======
    repo_name = db.Column(db.String, unique=True) # github-user/repo-name
    criterias = db.relationship('Criteria', backref='criteria',
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
                                lazy='dynamic')
