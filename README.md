About the project

This project is an api that parses an uploaded file and returns the following details about the file once uploaded:

-   name
-   type
-   size

The result should look like this: 
```{"name":"myFile.pptx","type":"application/vnd.openxmlformats-officedocument.presentationml.presentation","size":1569517}```

This is a power point presentation file i uploaded to the site API.


Built with

- Node.js
- Express.js
- Multer.js


Getting Started
To get a local copy up and running, follow these simple steps.


Prerequisites

- npm


Installation & Usage

- Clone the repo: git clone https://github.com/SaheedLawanson/File-Metadata-Microservice.git

- Install node: run in cmd
    
    ```npm install node```

- Open cmd in the project root folder and run 
    
    ```node index.js```

- On your preferred browser, visit "localhost:3000"

- Use the API as specified