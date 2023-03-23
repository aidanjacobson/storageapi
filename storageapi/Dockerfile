FROM node:16

WORKDIR /data

COPY package.json /
COPY index.js /
EXPOSE 9999
RUN npm install
CMD ["node", "server.js"]