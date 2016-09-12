docker-node-mongo-starter
=========================
- A simple boilerplate to get started with docker, docker-compose, nodejs and mongo
- Exposes node on port 3000, mongo on port 27017
- Restarts the app inside the container in case of file change or a new npm module is installed

## Getting started
- Startup: `docker-compose up`
- Connect to mongo `mongo starter-db`
- Post an object to mongo : `curl -X POST localhost:3000/api/v1/dog`
- Get all objects from mongo : `curl localhost:3000/api/v1/dogs`
- Connect to container running nodejs : `docker exec -it dockernodemongostarter_web_1 bash`
- Connect to container running mongo : `docker exec -it dockernodemongostarter_db_1 bash`
