const https = require("https");

const options = {
  hostname: "mustbebuilt.co.uk",
  port: 443,
  path: "/SHU/films-api/basic-api",
  method: "GET",
  headers: {
    "User-Agent": "Node.js Demo Client",
    // Accept: "application/json",
    Accept: "*/*",
  },
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Response:", data);
  });
});

req.on("error", (err) => {
  console.error("Request error:", err);
});

req.end();
