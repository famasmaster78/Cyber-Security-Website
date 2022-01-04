# Hvilket image skal denne docker baseres på
FROM node:16

# Hvor arbejder denne docker i
WORKDIR /app

# ENV
ENV PATH /app/node_modules/.bin:$PATH

# Kopier package.json til Docker maskinen
COPY package*.json ./

# Kør kommando
RUN yarn

# Kopier source filer
COPY . .

# Build
RUN yarn build

# install server
RUN yarn global add serve

# Serve
CMD ["yarn", "serve"]