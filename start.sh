#!/bin/bash

npm install

npx prisma db pull

npx prisma generate

npm start