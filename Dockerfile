FROM node:22-alpine AS build

COPY . .
RUN npm ci

RUN npm run build

FROM httpd

COPY --from=build /dist /usr/local/apache2/htdocs/