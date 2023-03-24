FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . /app

ENV NODE_ENV production

ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]



