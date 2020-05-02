// Server to run the job search api and dependencies
const createServer = require("http").createServer;
const url = require("url");
const axios = require("axios");
const chalk = require("chalk");
const config = require("./config");

// .env enviroment setting
require('dotenv').config();
console.log (process.env);

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

 // Axios requests & error settings
const decodeParams = searchParams => Array
  .from(searchParams.keys())
  .reduce((acc, key) => ({ ...acc, [key]: searchParams.get(key)}), {});

const server = createServer((req, res) => {
  const requestURL = url.parse(req.url);
  const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
  const { search, location, country = "gb" } = decodedParams;
 
  

  const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${
    config.BASE_PARAMS
  }&app_id=${config.APP_ID}&app_key=${
    config.API_KEY
  }&what=${search}&where=${location}`;
  if (req.method === "GET") {
    console.log(chalk.blue(`Proxy GET request to : ${targetURL}`));
    axios
      .get(targetURL)
      .then((response) => {
        res.writeHead(200, headers);
        res.end(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(chalk.red(error));
        res.writeHead(500, headers);
        res.end(JSON.stringify(error));
      });
  }
});
// Server listening
server.listen(3000, () => {
  console.log(chalk.green("Server listening"));
});

