FROM node:18

WORKDIR /user/src/app

COPY package*.json .babelrc.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node","build/index.js"]
