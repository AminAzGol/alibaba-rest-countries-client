# Choose the Image which has Node installed already
FROM node:16-buster as builder

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# build app for production with minification
RUN npm run build

# Runner
FROM node:16-buster

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD [ "npm", "run", "start" ]






# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .


EXPOSE 8080
CMD [ "http-server", "dist" ]