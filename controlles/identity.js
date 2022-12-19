const axios = require("axios");

const token = Buffer.from(
  `d185846d-9a78-41fe-882f-c77d7b6f66ed:35a95046890d307689508b47bc4f78e76165d10fab6982f9a70f97f6ff0a2248`,
  "utf8"
).toString("base64");

exports.getCodeNId = async (req, res, next) => {
    // console.log(req.query)
    var location = "";
    let configGetCodeAuth = {
      method: "get",
      url: `http://login.mc.co/api/v1/oidc/mc/customer/authorize`,
      params: {
        client_id: "d185846d-9a78-41fe-882f-c77d7b6f66ed",
        redirect_uri: "http://localhost:3001/popup",
        response_type: "code",
        scope: "openid mc_nationalid",
        version: "mc_di_v3.0",
        login_hint: `${req.query.login_hint}`,
        state: "123",
        nonce: "123",
        correlation_id: "123",
        acr_values: "3 2",
        client_name: 'test service provider',
        context: 'get info from user',
        binding_message: 'binding message'
      },
      headers: {},
      maxRedirects: 0,
    };
    try {
        let response = await axios(configGetCodeAuth);
        console.log(response.headers);
      } catch (err) {
        // console.log("err",err.response.headers.location);
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

exports.getTokenNId = async (req, res, next) => {
  // console.log(req.query)
  let configGetTokenAuth = {
    method: "post",
    url: `http://login.mc.co/api/v1/oidc/mc/token/`,
    params: {
      code: `${req.query.code}`,
      grant_type: "authorization_code",
      correlation_id: "42da5b19-457a-4d30-a5c4-038c62dccbb0",
    },
    headers: {
      Authorization: `Basic ${token}`,
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

exports.getInfoNId = async (req, res, next) => {
  // console.log("getInfoNId req query: ",req.query)
  let configGetInfoNId = {
    method: "get",
    url: `http://login.mc.co/api/v1/oidc/mc/premiuminfo`,
    headers: {
      Authorization:
        `Bearer ${req.query.accessToken}`,
    },
  };
  try {
    let response = await axios(configGetInfoNId);
    // console.log(response.data);
    res.json(response.data);
  } catch (err) {
    console.log(err.response.status);
  } finally {
  }
};

exports.getCodePhone = async (req, res, next) => {
  // console.log(req.query)
  var location = "";
  let configGetCodeAuth = {
    method: "get",
    url: `http://login.mc.co/api/v1/oidc/mc/customer/authorize`,
    params: {
      client_id: "d185846d-9a78-41fe-882f-c77d7b6f66ed",
      redirect_uri: "http://localhost:3001/phonenumber",
      response_type: "code",
      scope: "openid mc_phonenumber",
      version: "mc_di_v3.0",
      login_hint: `${req.query.login_hint}`,
      state: "123",
      nonce: "123",
      correlation_id: "123",
      acr_values: "3 2",
      client_name: 'test service provider',
      context: 'get info from user',
      binding_message: 'binding message'
    },
    headers: {},
    maxRedirects: 0,
  };
  try {
      let response = await axios(configGetCodeAuth);
      console.log(response.headers);
    } catch (err) {
      // console.log("err",err.response.headers.location);
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

exports.getTokenPhone = async (req, res, next) => {
// console.log(req.query)
let configGetTokenAuth = {
  method: "post",
  url: `http://login.mc.co/api/v1/oidc/mc/token/`,
  params: {
    code: `${req.query.code}`,
    grant_type: "authorization_code",
    correlation_id: "42da5b19-457a-4d30-a5c4-038c62dccbb0",
  },
  headers: {
    Authorization: `Basic ${token}`,
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

exports.getInfoPhone = async (req, res, next) => {
// console.log("getInfoNId req query: ",req.query)
let configGetInfoNId = {
  method: "get",
  url: `http://login.mc.co/api/v1/oidc/mc/premiuminfo`,
  headers: {
    Authorization:
      `Bearer ${req.query.accessToken}`,
  },
};
try {
  let response = await axios(configGetInfoNId);
  // console.log(response.data);
  res.json(response.data);
} catch (err) {
  console.log(err.response.status);
} finally {
}
};
