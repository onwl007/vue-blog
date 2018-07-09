FROM node:latest
LABEL author="onwl007 <onwl007@126.com>"
COPY . /www/app/vue-blog/
WORKDIR /www/app/vue-blog
EXPOSE 3000
ENV HOST 0.0.0.0
ENV PORT 3000
ENV NODE_ENV production
RUN npm install
RUN npm run build
CMD ["npm","start"]


