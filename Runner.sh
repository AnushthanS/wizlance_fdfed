#! /bin/bash

cd frontend

echo "Starting the frontend server"
npm start &

cd ../backend

echo "Starting the backend server"
npm start