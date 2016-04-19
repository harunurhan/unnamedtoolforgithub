# repodoctor

**Disclaimer:** Not yet functional

Web app for checking if your repository is meeting the standards of the open source projects and contributor friendly.
If not, it gives you suggestions.
In addition it is platform to advertise your open source projects to contributors by possibly using result of your checkup
and find a cool project to contribute, if you are a contributor.
This project started out as a little hack during the Mozilla Science Lab WOW 2016. Use this webapp to scan your repository and find out how contributor friendly it is.
List of checks

    Existence of README.md
    Existence of LICENSE
    Existence of CONTRIBUTING.md
    Existence of .travis.yml
    Existence of .gitignore
    Existence of test cases
    Code of Conduct
    Length of README.md
    Travis CI build status
    GitHub milestones

The application works with the repository url. The Python scripts runs above checks to rate your project on the basis of collaborative friendliness of the project. We also have an API which we plan to use for creating GitHub badges with Shields.

Please see CONTRIBUTING.md if you are interested in getting involved.

## How does it work?

It runs some scripts on your Github repository which checks several things that a cool contributor friendly project should have,
such as having CONTRIBUTING.md, a CI setup, good test coverage etc.

Then gives you rank/result and suggestions on how to improve this by using other cool projects on GitHub.

Also it shares all these results publicly so that potential contributors could find out about cool projects
to start contributing, in short it does contributor and open source project matching.

## What is built on?

It has 3 main parts [server](), [client]() and [checker]()

### Server

It exposes data through RESTful services and built on [Flask](), written in Python.

[See more details of the Server, endpoints, responses etc.]()

### Client

It is a [React]() app with a UI powered by [Material UI](), uses [Redux]() as its state container. Also Babel](), [Webpack]() etc. are used.

[See more details of the Client, data flow, components etc.]()

### Checker

Combination of Python scripts that use Github API.

[See more details of the Client, check criterias etc.]()

## Contributions

See [CONTRIBUTING](./CONTRIBUTING.md)

## Roadmap

### Short Term

- a
- b

### Long Term

- aaa
- bbb

## Production Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/harunurhan/repodoctor)

## Local installation (Development Environment)


**Requirements**:

- npm (https://docs.npmjs.com/getting-started/installing-node) for managing react(client) app packages/dependencies
- Pip (https://pip.pypa.io/en/latest/installing.html) for managing flask(server) app packages/dependencies
- PostgreSQL (http://www.postgresql.org/download/) for storing relational data

Clone repository:

```
git clone https://github.com/harunurhan/repodoctor.git

cd repodoctor
```

Install npm dependencies:

```
npm install
```

Setup python environment and install dependencies:

```
cd server 

virtualenv venv

source venv/bin/activate     # or any equivalent

pip install -r requirements.txt

cd ..
```

Copy `.env.example` config file to `.env`:

```
cp .env.example .env
```

Start PostgreSQL service if needed :

```
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
```

Create database tables:

```
heroku local initdb
```

Finally, start local server:

```
heroku local web

open http://localhost:3001
```

## License

See [LICENSE (MIT)](./LICENSE)

Many thanks to @alexkuz for the [boilerplate]().
