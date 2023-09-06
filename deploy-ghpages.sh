#!/bin/bash

# shell script for building angular and deploying it to github pages

# logically, PROJECT_NAME should be the endpoint of GITHUB_ORIGIN, unless you renamed it at some time after creating the github repo
PROJECT_NAME="20230905-notelist"
GITHUB_ORIGIN="https://github.com/shugyoza/20230905-notelist"

# install angular cli gh-pages
# npm i angular-cli-ghpages --save-dev

# build the app with prod config

# --prod removed at v.14
# ng build --prod --base-href $GITHUB_ORIGIN

# this cmd works on Angular v.14 and later
ng build --configuration "production" --base-href $GITHUB_ORIGIN

# deploy to gh-pages
npx angular-cli-ghpages --dir=dist/$PROJECT_NAME