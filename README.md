# API Integration with Authentication

## Overview
This project demonstrates the integration of various APIs using `axios` and different authentication methods such as:
- No Authentication
- Basic Authentication
- API Key Authentication
- Bearer Token Authentication

It uses `Express.js` for the backend and `EJS` for rendering responses.

## Features
- Retrieve random secrets without authentication.
- Fetch all secrets using Basic Authentication.
- Filter secrets based on specific parameters using API Key Authentication.
- Retrieve a secret by ID using Bearer Token Authentication.

## Prerequisites
- Node.js installed ([Download here](https://nodejs.org)).
- Basic understanding of JavaScript and REST APIs.
- `npm` (Node Package Manager) for dependencies.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following variables:
   ```env
   API_URL=https://secrets-api.appbrewery.com/
   USERNAME=yourUsername
   PASSWORD=yourPassword
   API_KEY=yourAPIKey
   BEARER_TOKEN=yourBearerToken
   ```
5. Start the server:
   ```bash
   node app.js
   ```
6. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Endpoints
- `/`: Renders the home page.
- `/noAuth`: Fetches a random secret (No Authentication).
- `/basicAuth`: Fetches all secrets with Basic Authentication.
- `/apiKey`: Filters secrets based on parameters with API Key Authentication.
- `/bearerToken`: Fetches a secret by ID using Bearer Token Authentication.

## Technologies Used
- Node.js
- Express.js
- Axios
- EJS

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments
[A. Manoj Sai Kumar](https://github.com/123codingmsk).
