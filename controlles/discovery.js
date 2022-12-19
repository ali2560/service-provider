const axios = require("axios");
const token = Buffer.from(
  `f429e2ac-3b65-440c-b89c-c8adb6bcf287:f42ca0cb-db9f-4cbc-b4be-efea0eaa508e`,
  "utf8"
).toString("base64");

exports.getOperatorName = async (req, res, next) => {
  let location = "";

  const configGetNameOperator = {
    method: "get",
    url: "http://46.32.12.178:5000/api-exchange/api/v1/discovery?Redirect_URL=http://localhost:3001/redirect",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    },
    maxRedirects: 0,
  };
  try {
    let response = await axios(configGetNameOperator);
    // console.log(response);
  } catch (err) {
    if(err?.response?.status === 302 ){
      location = err.response?.headers?.location;
    }
    else{
      location = err?.response?.status;
    }
    // console.log("OperatorName:", err.response.status);
  } finally {
    if (typeof location !== "undefined") {
      res.json(location);
    }
    else{
      res.json(location)
    }
  }
};


exports.getOperatorInfo = async (req, res, next) => {
  const configGetInfoOperator = {
    method: "get",
    url: "http://46.32.12.178:5000/api-exchange/api/v1/discovery?Redirect_URL=http://localhost:3001/redirect",
    params: {
      "Selected-MCC": `${req.query.mcc}`,
      "Selected-MNC": `${req.query.mnc}`,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    },
  };
  try {
    let response = await axios(configGetInfoOperator);
    // console.log(response.data);
    res.json(response.data)
  } catch (err) {
    // console.log("OperatorInfo:",err.response.headers.location);
    location = err.response?.headers?.location;
  } finally {
  }
};
