<!DOCTYPE html>
<html>
<head>
    <title>API Integration with Authentication</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        header {
            background-color: #0078d7;
            color: white;
            padding: 10px 20px;
            text-align: center;
            border-radius: 5px;
        }
        code {
            background: #eee;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 0.95em;
        }
        pre {
            background: #f0f0f0;
            padding: 10px;
            border-left: 3px solid #0078d7;
            overflow-x: auto;
        }
        a {
            color: #0078d7;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        section {
            margin-bottom: 20px;
        }
        .important {
            font-weight: bold;
            color: #d9534f;
        }
    </style>
</head>
<body>
    <header>
        <h1>API Integration with Authentication</h1>
    </header>

    <section>
        <h2>Overview</h2>
        <p>This project demonstrates the integration of various APIs using <code>axios</code> and different authentication methods such as:</p>
        <ul>
            <li>No Authentication</li>
            <li>Basic Authentication</li>
            <li>API Key Authentication</li>
            <li>Bearer Token Authentication</li>
        </ul>
        <p>It uses <code>Express.js</code> for the backend and <code>EJS</code> for rendering responses.</p>
    </section>

    <section>
        <h2>Features</h2>
        <ul>
            <li>Retrieve random secrets without authentication.</li>
            <li>Fetch all secrets using Basic Authentication.</li>
            <li>Filter secrets based on specific parameters using API Key Authentication.</li>
            <li>Retrieve a secret by ID using Bearer Token Authentication.</li>
        </ul>
    </section>

    <section>
        <h2>Prerequisites</h2>
        <ul>
            <li>Node.js installed (<a href="https://nodejs.org">Download here</a>).</li>
            <li>Basic understanding of JavaScript and REST APIs.</li>
            <li><code>npm</code> (Node Package Manager) for dependencies.</li>
        </ul>
    </section>

    <section>
        <h2>Setup Instructions</h2>
        <pre>
1. Clone the repository:
   <code>git clone https://github.com/your-username/your-repo-name.git</code>

2. Navigate to the project directory:
   <code>cd your-repo-name</code>

3. Install dependencies:
   <code>npm install</code>

4. Create a <code>.env</code> file in the root directory and add the following variables:
   <code>
   API_URL=https://secrets-api.appbrewery.com/
   USERNAME=yourUsername
   PASSWORD=yourPassword
   API_KEY=yourAPIKey
   BEARER_TOKEN=yourBearerToken
   </code>

5. Start the server:
   <code>node app.js</code>

6. Open your browser and visit:
   <code>http://localhost:3000</code>
        </pre>
    </section>

    <section>
        <h2>Endpoints</h2>
        <table border="1" cellpadding="10" cellspacing="0">
            <thead>
                <tr>
                    <th>Endpoint</th>
                    <th>Description</th>
                    <th>Authentication</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>/</code></td>
                    <td>Renders the home page.</td>
                    <td>None</td>
                </tr>
                <tr>
                    <td><code>/noAuth</code></td>
                    <td>Fetches a random secret.</td>
                    <td>None</td>
                </tr>
                <tr>
                    <td><code>/basicAuth</code></td>
                    <td>Fetches all secrets with Basic Authentication.</td>
                    <td>Username & Password</td>
                </tr>
                <tr>
                    <td><code>/apiKey</code></td>
                    <td>Filters secrets based on parameters with API Key.</td>
                    <td>API Key</td>
                </tr>
                <tr>
                    <td><code>/bearerToken</code></td>
                    <td>Fetches a secret by ID using Bearer Token.</td>
                    <td>Bearer Token</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section>
        <h2>Technologies Used</h2>
        <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Axios</li>
            <li>EJS</li>
        </ul>
    </section>

    <section>
        <h2>License</h2>
        <p>This project is licensed under the MIT License. Feel free to use and modify it as needed.</p>
    </section>

    <footer>
        <p>Created by <a href="https://github.com/123codingmsk">A. Manoj Sai Kumar</a>. Contributions are welcome!</p>
    </footer>
</body>
</html>

