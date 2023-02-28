FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/front-end-angular-test /usr/share/nginx/html