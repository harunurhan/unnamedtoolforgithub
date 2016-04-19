from .github import RepoScanner
from .criteria import *

class Checker:
    # criteria which are checked
    # TODO: search for an injection method which will read classes in criteria.py and inject here to be checked!
    criteria = [HaveReadmeCriteria(), HaveContributingCriteria(), HaveLicenseCriteria(), HaveTravisCriteria(), HaveGitIgnoreCriteria(), HaveCocCriteria()]

    def __init__(self, owner, repo):
        self.github = RepoScanner(owner, repo)

    def check(self):
        warnings = []
        for criterion in Checker.criteria:
            if not criterion.check(self.github):
                warnings.append({'description': criterion.description(),
                               'severity': criterion.severity(),
                               'suggestion': criterion.suggestion(),
                               'guide_link': criterion.guide_link()})
        # TODO: add other stuff addition to warnings
        return {'warnings': warnings}


