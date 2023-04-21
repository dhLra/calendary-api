FROM node

WORKDIR /usr/src/app

COPY package*.json ./
COPY /src/server.ts ./
COPY start.sh ./

CMD [ "/usr/src/app/start.sh" ]

EXPOSE 3000