#!/bin/bash

set -e

# PRODUCTION DEPLOY
git reset --hard
git checkout master
git pull origin master

npm install -g yarn
yarn global add serve

yarn install
yarn build

pm2 delete KOFELLO-CLIENT || true
pm2 start "npx serve -s build -l 3000" --name KOFELLO-CLIENT

pm2 save
