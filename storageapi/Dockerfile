FROM node:16

WORKDIR /data

COPY package.json /data/
COPY index.js /data/
EXPOSE 9999
RUN npm install
CMD ["node", "server.js"]