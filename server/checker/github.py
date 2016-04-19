#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from urllib.request import urlopen
import requests

class RepoScanner:
    def __init__(self, owner, repo):
        self.owner = owner
        self.repo = repo
        self.contents = None

    def get_contents(self):
        # FIXME: find a better way to handle getting contents
        # Return if already cached
        if self.contents is not None:
            return self.contents

        uri = 'https://api.github.com/repos/%s/%s/contents' % (self.owner, self.repo)
        res = requests.get(uri)
        if res.status_code is 200:
            root_dir_contents = [each['name'] for each in res.json()]
        else:
            raise Exception(res.status_code)
        if '.github' not in root_dir_contents:
            return root_dir_contents
        uri += '/.github' # To fetch files in the .github folder.
        res = requests.get(uri)
        # Return both root directory contents and .github contents
        if res.status_code is 200:
            # Cache the contents into a class variable
            self.contents = [each['name'] for each in res.json()] + root_dir_contents
            return self.contents
        else:
            raise Exception(res.status_code)

    def get_readme_len(self):
        readme = urlopen(
            'https://raw.githubusercontent.com/%s/%s/master/README.md' % (self.owner, self.repo)
        ).read().strip().decode('utf-8')
        # TODO: handle possible error while reading README.md
        return readme.count('\n')

    def get_travis_status(self):
        uri =  'https://api.travis-ci.org/repositories/%s/%s.json' % (self.owner, self.repo)
        res = requests.get(uri)
        return res.json()['last_build_status'] is 0

    def has_milestone(self):
        uri = 'https://api.github.com/repos/%s/%s/milestones' % (self.owner, self.repo)
        res = requests.get(uri)
        return res.json() is not []
