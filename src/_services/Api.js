import React from "react";
import config from "config";

function Api(methodUrl, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  return fetch(`${config.apiUrl}/${methodUrl}`, requestOptions).then(
    response => {
      return response;
    }
  );
}

export default Api;
