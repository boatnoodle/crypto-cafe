import fs from "fs";
import axios from "axios";

let ipfsArray = [];

for (let index = 0; index < 5; index++) {
  ipfsArray.push({
    path: `cafe-metadata/${index + 1}.json`,
    content: {
      image: `https://ipfs.moralis.io:2053/ipfs/QmR3CYUvu6vYr4wyfvnwZ424LPCbCYuowYgsM5qScJUeYU/cafe/${
        index + 1
      }.jpeg`,
      name: `Cafe tier ${index}`,
      description: `This is a cafe tier ${index}`,
      attributes: [
        {
          trait_type: "Capacity",
          value: (index + 1) * 5,
        },
        {
          trait_type: "Employee Limit",
          value: index + 1,
        },
      ],
    },
  });
}

axios
  .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-Key":
        "UwzSuJkZMNzLXa0RMf78Zd2F6AevzM3mrK5MWFupZ1NijbA1PvOGJuzlNq3oUU9c",
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
