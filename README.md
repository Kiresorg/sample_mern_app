# Sample MERN App

This sample MERN (MySQL/Express/React/Node) application is a simple API. When fleshed out, it would allow CRUD operations that a typical retailer might need - CRUD on Customers, Addresses, Products and Orders.

As the app stands, only the Read operation for Addresses is built - but that functionality is fully built, so the app represents a working API.

# Installing the application

## API

### Dependencies
As with any Node application, you will need to run ```npm install``` from the terminal to install dependencies

### Starting the App
Run ```npm start``` from the terminal to start the app. You should see this message in the terminal: ```server is running at port 3000```

### Testing the API
You can use the included file ```test.http``` to make API calls to get all Addresses, or an individual addresses.
> NOTE: You will need to get the database up and running before the API will function

## Database
The application uses the ```Sequelize``` ORM tool to migrate the needed MySQL database schema, including all tables and relationships. In addition, there are "seeder" files in the application that can populate the Address table with fake data.

### Creating the Database
You will need a working MySQL Server. You can install this on the same server that hosts the application if you like; you can also put it on another server.

You may use the ```root``` account on the MySQL server for the application, or you may create a separate database account just for the application.

You will need to create a database called ```csrdb```

### Setting database connection info
Update the info in ```src/sequelize/config/config.json``` to align with your database server and user account

### Building the database tables
Use the sequelize-cli tool to migrate the database tables. You will need to research how to do this migration.

### Seeding the Address table
Use the sequelize-cli tool to seed the Address table with fake address data. You will need to research how to do this seeding.

## Testing the application
Once you have configured the database, built the tables and seeded the Address table, you should be able to test the running API app using the ```test.http``` file.

You should also test it using a browser. This will involve opening up the machine where you are hosting to allow external HTTP connections.
