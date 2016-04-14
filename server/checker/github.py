#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from urllib.request import urlopen
import requests
readme_must_haves = ['about', 'license', 'developers']
#TODO: add more readme sections

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
        result = []
        if len(readme) > 0:
            #readme exists
            #any topics which should be addressed in a 
            #readme will be checked by word movers distance
            for each in readme:
                for must_have in readme_must_haves:
                    if(word_movers(each, must_have) < 2:
                        #must_have is present in users readme
                        result.append("Great! You have a" + must_have)
                    else:
                        result.append("It would be great if you add a " + must_have)
                            
        # TODO: handle possible error while reading README.md
        result.append(readme.count('\n'))
        #return readme.count('\n')
        return result

    def get_travis_status(self):
        uri =  'https://api.travis-ci.org/repositories/%s/%s.json' % (self.owner, self.repo)
        res = requests.get(uri)
        return res.json()['last_build_status'] is 0

    def has_milestone(self):
        uri = 'https://api.github.com/repos/%s/%s/milestones' % (self.owner, self.repo)
        res = requests.get(uri)
        return res.json() is not []

    #!/usr/bin/env tested on python2.7 
    def word_movers(word1, word2):
        #word 1 = the word present in users readme
        #word 2 = a must have in the readme
        len1 = len(word1) + 1 
        len2 = len(word2) + 1
        distance = [[0]*len2 for each in range(len1)]
        for d1 in xrange(1,len1):
            distance[d1][0] = d1
        for d2 in xrange(1,len2):
            distance[0][d2] = y 
        for d1 in xrange(1,len1):
            for d2 in xrange(1,len2):
                #TODO: check if case independent
                if word1[d1-1] == word2[d2-1]:
                    #check each character
                    distance[d1][d2] = distance[d1-1][d2-1]
                else:
                    distance[d1][d2] = min(distance[d1-1][d2], distance[d1][d2-1], distance[d1-1][d2-1])  
                    distance[d1][d2] += 1
        return distance[-1][-1]                   

