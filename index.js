import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = 'setusername';
const yourPassword = 'setpassword';
const yourAPIKey = 'setapikey';
const yourBearerToken = 'setbearertoken';

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "random");
    // console.log('response:',result);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
  //Use axios to hit up the /random endpoint
  //The data I get back should be sent to the ejs file as "content"
});

app.get("/basicAuth", async (req, res) => {
  ///all endpoint
  try {
    const response = await axios.get(API_URL+'all?page=2',{
      auth:{
        username: yourUsername,
        password: yourPassword
      }
    });
    res.render('index.ejs',{content: JSON.stringify(response.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
  //This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  //filter endpoint
  try {
    const response = await axios.get(API_URL+'filter',{
      params:{
        score:5,
        apiKey: yourAPIKey
      }
    });
    res.render('index.ejs',{
      content: JSON.stringify(response.data)
    })
  } catch (error) {
    
  }
  //Filter for all secrets with an embarassment score of 5 or greater
});

app.get("/bearerToken", async (req, res) => {
  //secrets/{id} endpoint
  try {
    const response = await axios.get(API_URL+'secrets/2',{
        headers:{
          Authorization: `Bearer ${yourBearerToken}`
        }
      }
    );
    res.render('index.ejs',{
      content: JSON.stringify(response.data)
    })
  } catch (error) {
    res.status(404).send(error.message);
  }
  //This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
