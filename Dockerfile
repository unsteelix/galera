FROM node:17-alpine
WORKDIR /app
RUN npm install --global --force yarn
COPY . .
RUN yarn install
RUN yarn build
CMD ["yarn", "preview"]
