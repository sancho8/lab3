# Project Title

Project for booking coworking

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node v9.3.0 or above

npm 6.3.0 or above
```

### Installing

Steps to run the project

```
cd {project_folder}
```

```
npm install
```

```
npm run build
```

After this you'll have index.html in /dist folder which has been compiled from /src files

## Running the tests

Running mocha tests

```
npm test
```

Running JSLint (check JS syntax)

```
npm run jslint
```

## Running with Docker

Running mocha tests

```
docker build -t lab4 .
```

```
docker run -p <port>:8080 lab4 
```

After this you can access app on localhost:<port>

## Built With

* Node
* Webpack
* Travis

## Authors

* **Oleksandr Yaroshenko** - *IO-51* 

* **Maria Stashenko** - *IO-51* 

* **Nikita Sulimenko** - *IO-51* 


