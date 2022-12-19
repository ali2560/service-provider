const axios = require("axios");

exports.getCode = async (req, res, next) => {
  // console.log(req.query)
  var location = "";
  let configGetCodeAuth = {
    method: "get",
    url: `${req.query.url}`,
    params: {
      client_id: "d185846d-9a78-41fe-882f-c77d7b6f66ed",
      redirect_uri: "http://localhost:3001/redirect",
      response_type: "code",
      scope: "openid mc_authn",
      version: "mc_di_v3.0",
      login_hint: `${req.query.login_hint}`,
      state: "123",
      nonce: "123",
      correlation_id: "123",
      acr_values: "3 2",
    },
    headers: {},
    maxRedirects: 0,
  };

  try {
    let response = await axios(configGetCodeAuth);
    console.log(response.headers);
  } catch (err) {
    // console.log(err.response.headers.location);
    location = err.response?.headers?.location;
  } finally {
    if (typeof location !== "undefined") {
      res.json(location);
    }
    else{
      res.send('error')
    }
  }
};

exports.getToken = async (req, res, next) => {
  // console.log("req.query:", req.query);
  let configGetTokenAuth = {
    method: "post",
    url: `http://login.mc.co/api/v1/oidc/mc/customer/token`,
    params: {
      code: `${req.query.code}`,
      grant_type: "authorization_code",
      correlation_id: "42da5b19-457a-4d30-a5c4-038c62dccbb0",
    },
    headers: {
      Authorization:
        "Basic ZDE4NTg0NmQtOWE3OC00MWZlLTg4MmYtYzc3ZDdiNmY2NmVkOjM1YTk1MDQ2ODkwZDMwNzY4OTUwOGI0N2JjNGY3OGU3NjE2NWQxMGZhYjY5ODJmOWE3MGY5N2Y2ZmYwYTIyNDg=",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  try {
    let response = await axios(configGetTokenAuth);
    // console.log(response.data);
    res.json(response.data);
  } catch (err) {
    console.log(err.response);
  } finally {
  }
};
