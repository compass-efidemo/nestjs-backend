# Step 1: Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Step 4: Install Yarn and dependencies
RUN apk add --no-cache --virtual .build-deps alpine-sdk python3 \
    && yarn install --frozen-lockfile \
    && apk del .build-deps

# Step 5: Copy the rest of the application code
COPY . .

ENV PORT=80

# Step 6: Build the application
RUN yarn build

# Step 7: Expose the port the app runs on
EXPOSE 3000

# Step 8: Command to run the application
CMD ["node", "dist/main"]

