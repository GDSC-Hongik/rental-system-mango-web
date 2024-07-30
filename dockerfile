FROM node:22-alpine3.19

WORKDIR /front/app/

COPY package.json package-lock.json /front/app/

RUN npm install

COPY . /front/app/

EXPOSE 3000

CMD [ "npm", "run", "dev" ]