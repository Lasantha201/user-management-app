#Use the base image from the dockerhub

FROM node:20-alpine

#Set the working directory
WORKDIR /app

#copy the package.json & package-lock.json files

COPY package*.json ./

#Install the dependencies

RUN npm install

#Copy the rest other application

COPY . .

#Expose the port app will be run

EXPOSE 3000


#Start the application

CMD [ "npm", "start" ]
