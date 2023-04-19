FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . /app

ENV NODE_ENV production

ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]



