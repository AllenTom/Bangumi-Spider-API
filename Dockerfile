FROM node:latest
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN yarn add -g ts-node .
RUN yarn add -g typescript .
RUN yarn install
ENTRYPOINT ["yarn","start"]
