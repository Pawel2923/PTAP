# pull official base image
FROM node:alpine

# set working directory
WORKDIR /home/node/app
ENV PATH /home/node/app/node_modules/.bin:$PATH
COPY package*.json ./

RUN npm install && npm cache clean --force

EXPOSE 3000
# CMD ["npm", "run", "host"]