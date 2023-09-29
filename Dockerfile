FROM node:18.18.0-alpine3.18

COPY ./app /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]