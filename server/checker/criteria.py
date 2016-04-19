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
            return 'A README.md is the first thing a user sees. If you do not have this, you should die already'

        def guide_link(self):
            return 'https://gist.github.com/jxson/1784669'

        def check(self, github):
            return 'README.md' in github.get_contents()


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



