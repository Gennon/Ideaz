Ideaz
====

This is a an application to help in defining requirements for your projects. 

---

###Getting Started###

####Python Environment####

First you need to have python3 and virtualenvwrapper installed. 

You can get Python3 from python.org if not installed already. PIP should be included with the latest python version.

####Linux - Ubuntu####

On Ubuntu you could use the following command to get pip for python 3. 

```
    > sudo apt-get install python3-pip
    > sudo pip install virtualenv
    > sudo pip install virtualenvwrapper
```

####OS X and Windows####

```
    > pip install virtualenv
    > pip install virtualenvwrapper
```

###Node.js###

You also need to install Node 5.x and you can dowload it from https://nodejs.org/en/download/. 

####Linux - Ubuntu####

Ubuntu 14.04 comes with an older version of node.js. So we need to add the 5.x version manually.

```
    > sudo apt-get remove --purge nodejs npm
    > curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
    > sudo apt-get install nodejs
```

This will also install npm.

###Install Project Dependencies###


Then make sure that virtualenvwrapper works. You might have to enable it in your .bash_profile/.bashrc etc. 
You should be able to have access to commands like workon, mkvirtualenv etc. If not then google it.


```
    > cd A_FOLDER_WHERE_YOU_HAVE_PROJECTS
	> git clone git@github.com:Gennon/Ideaz.git
	> cd Ideaz
    > mkvirtualenv ideaz
    (ideaz) > pip install -r requirements.txt
	(ideaz) > npm install
	(ideaz) > gulp
```

So what is going on here? Well, pip will install the python requirements (Flask etc).
npm will install the node.js packages that we need, they are all defined in package.json. 
gulp is installed by npm, and we have gulpfile.js that mainly defines how our react jsx files will transform into main.js.
gulp also starts a watcher that will look for any changes in the jsx files and then rebuild main.js.


If you have the ideaz virtual environment already, but not active, then you can just use the following command to enable it.

```
    > workon ideaz
    (ideaz) > gulp
```

###Testing###

We are using python and Selenium for integration testing. 

```
    (ideaz) > py.test tests --driver Firefox --cov-report term-missing --cov=app
```

For JS testing we are using mocha and chai.

```
    (ideaz) > npm test
```
