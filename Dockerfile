# develop stage
FROM node:14-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn
RUN yarn build

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY prod_nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]