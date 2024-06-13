
# Project Name

This project is a web application that allows users to upload and manage PDF files. Follow the instructions below to set up and run the application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (v4.x or later)

## Getting Started

### 1. Clone the Project Folder

>> First, clone the repository to your local machine using the following command:
'clone https://github.com/your-username/your-repo-name.git'

### 2. Set Up the Client

>> Navigate to the client directory and install the required dependencies:
cd your-repo-name/client
npm install

>> After the installation is complete, start the client application:
npm start

***********************The client application should now be running on http://localhost:3000.**********************

### 3. Set Up the Server

>> Navigate to the server directory and add your MongoDB URL to the .env file. Create a .env file if it does not already exist and add the following line:
MONGODB_URL=your-mongodb-url

>> Next, install the required dependencies:
cd ../server
npm install

>> After the installation is complete, start the server application:
npm start

*****************************The server application should now be running on http://localhost:5000.************************

>> Running the Application
With both the client and server running, you can now access the application in your web browser by navigating to http://localhost:3000.

>> Troubleshooting
If you encounter any issues, please check the following:

* Ensure that MongoDB is running and accessible.
* Verify that the MongoDB URL in the .env file is correct.
* Check the terminal output for any error messages and follow the provided instructions to resolve them.



