# node-docker-compose
A production oriented dockerized node.js/express.js app. Explained in more details on [my blog](http://damdev.me/docker/2016/01/05/docker-compose-node.html)

## Architecture ##
This app uses the following stack:
- node.js and express.js
- MongoDB database
- nginx frontend server
- redis
- Kue worker

## Prerequisites ##
This required *docker*, *docker-machine* and *docker-compose* installed on your local machine. More informations on [Docker's website](https://docs.docker.com/installation/mac/)

## Running locally ##
```
# creates a local host for docker containers, only do once
docker-machine create -d virtualbox local

# create your config secrets
cp .env.docker.sample .env.docker

# load the docker env
eval "$(docker-machine env local)"

# build web image
docker-compose build

docker-compose up -d

# run commands to load some test data
docker-compose run --rm app node bin/load-data
```

## How can I make sure it works ? ##
1. first you need to know your `local` docker machine ip, using `docker-machine ls`.
2. Visit http://LOCAL_IP
3. Check *app* or *worker* logs `docker-compose logs app` or `docker-compose logs worker`

## Tutum ##

The big news is [tutum](https://www.tutum.co/) has been [acquired by Docker](http://blog.docker.com/2015/10/docker-acquires-tutum/). Tutum is a could service to manage and deploy Docker applications. It uses a **stack** descriptor, which is compatible with docker-compose yaml format. So you can use my example project to deploy and mange your app with Tutum.

## Considerations ##

*docker compose* is not deemed production ready. There are some limitations, mainly related to scalability. But I think it is fine for small applications. It is obviously much better to understand how docker compose works.
more info on [docker's website](https://docs.docker.com/compose/production/).

This template doesn't include tests or a build script. This is on purpose, to keep focus what's important here (docker).

Because of the way user gets created at startup on the mongo container, There will be a few exceptions on the app upon first start.

## Credits ##

The template is based on [node generator](https://github.com/expressjs/generator) and [node-express-mongoose-demo](https://github.com/madhums/node-express-mongoose-demo)
