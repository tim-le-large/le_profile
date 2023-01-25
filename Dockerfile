#Download Node Alpine image
FROM node:16-alpine As build

#Setup the working directory
WORKDIR /usr/src/app

#Copy package.json
COPY package.json package-lock.json ./

#Install dependencies
RUN npm install

#Copy other files and folder to working directory
COPY . .

#Build Angular application in PROD mode
RUN npm run build

#Download NGINX Image
FROM nginx:1.21.6-alpine

# Add custom config
COPY ./nginx/default.conf /etc/nginx/conf.d/

#Copy built angular files to NGINX HTML folder
COPY --from=build /usr/src/app/dist/le_page/ /usr/share/nginx/html
