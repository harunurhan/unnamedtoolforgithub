from abc import ABCMeta, abstractmethod


class CriterionBase(object):
    __metaclass__ = ABCMeta

    @property
    @abstractmethod
    def description(self):
        """
        :return: string
            the user readable description of the criterion
        """
        pass

    @property
    @abstractmethod
    def severity(self):
        """
        severity represents how much the criterion is vital (greater means more important)

        :return: integer
            level of severity
        """
        pass

    @property
    @abstractmethod
    def suggestion(self):
        """
        suggestion that will be showed if criterion is not met

        :return: string
            the user readable suggestion of the criterion
        """
        pass

    @property
    @abstractmethod
    def guide_link(self):
        """
        guide_link is link of the guide which is helpful in order to met with the criterion

        :return: string
            the link to the guide
        """
        pass

    @abstractmethod
    def check(self, github):
        """
        implementation of the how criterion is checked
        :param github: RepoScanner
            github client that is initialized for a specific repository
        :return: boolean
            True, if criterion is met
        """
        pass


# FIXME: make suggestions better
class HaveReadmeCriterion(CriterionBase):
        def description(self):
            return 'Have a README.md'

        def severity(self):
            return 2

        def suggestion(self):
            return 'A README.md is the first thing a user sees.'
            #suggestion: REMOVE THIS ' If you do not have this, you should die already'

        def guide_link(self):
            return 'https://gist.github.com/jxson/1784669'

        def check(self, github):
            return 'README.md' in github.get_contents()

        def readme_length(self):
            return self.get_readme_len(self)  


class HaveContributingCriterion(CriterionBase):
        def description(self):
            return 'Have a CONTRIBUTING.md'

        def severity(self):
            return 2

        def suggestion(self):
            return 'A CONTRIBUTING.md is a must, if you expect other people to contribute'

        def guide_link(self):
            return 'https://github.com/atom/atom/blob/master/CONTRIBUTING.md'

        def check(self, github):
            return 'CONTRIBUTING.md' in github.get_contents()


class HaveLicenseCriteria(CriterionBase):
        def description(self):
            return 'Have a License file'

        def severity(self):
            return 2

        def suggestion(self):
            return 'A License file lets other people know how they are allowed to use your code. Check https://help.github.com/articles/open-source-licensing/for more details.'
            #more information here: https://creativecommons.org/licenses/by/4.0/legalcode

        def guide_link(self):
            return 'https://github.com/atom/atom/blob/master/License'

        def check(self, github):
            return 'License.md' in github.get_contents()


class HaveTravisCriteria(CriterionBase):
        def description(self):
            return 'Travis CI integration which checks the build of your project.'

        def severity(self):
            return 2

        def suggestion(self):
            return 'Travis CI is a Continuous integration platform for open source projects, letting your users check build the status'
            
        def guide_link(self):
            return 'https://github.com/atom/atom/blob/master/License'

        def check(self, github):
            return 'Travis.md' in github.get_contents()

        def build(self, github):
            #will return build status
            return self.get_travis_status(self)



class HaveGitIgnoreCriteria(CriterionBase):
        def description(self):
            return 'Maintains which part of repo to upload for public view'

        def severity(self):
            return 2

        def suggestion(self):
            return 'Absence of a .gitignore file may pose a security risk.'
            
        def guide_link(self):
            return 'https://www.gitignore.io'

        def check(self, github):
            #TODO : check git presence of git ignore files
            return 1

class HaveCocCriteria(CriterionBase):
        def description(self):
            return 'Code of Conduct'

        def severity(self):
            return 2

        def suggestion(self):
            return 'Code of conduct helps inculcate diversity and inclusion.'

        def guide_link(self):
            return 'http://contributor-covenant.org/'

        def check(self, github):
            #TODO: This should be parsed?
            return 1          


class HaveTimeline(CriterionBase):
        def description(self):
            return 'Descrption of what work has been done and what is pending'

        def severity(self):
            return 2

        def suggestion(self):
            return 'Timelines accelerate development'
            
        def guide_link(self):
            #TODO
            return 'get link for this'

        def check(self, github):
	    #TODO: parse the directory structure to get timeline?
            return 1 



