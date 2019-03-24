FROM node:latest

# Create app directory
WORKDIR /app
ADD . /app

# Install app dependencies
RUN npm install

CMD ["node", "index.js" ]