# Choose the Image which has Node installed already
FROM node:16-buster as builder

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

COPY . .
# build app for production with minification
RUN npm run build
ENV PORT=8000
ENV HOST="0"
EXPOSE 8000

CMD [ "npm", "run", "start" ]

