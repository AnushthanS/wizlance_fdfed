#! /bin/bash

cd frontend

echo "Installing frontend dependencies"
npm i --save-dev

echo "Installing backend dependencies"
cd ../backend
npm i