#!/usr/bin/env sh

# abort on errors
set -e

rm -rf dist/

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Zarkus13/got-characters.git main:gh-pages

cd -