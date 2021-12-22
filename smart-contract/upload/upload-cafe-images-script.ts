import fs from "fs";
import axios from "axios";

let ipfsArray = [];

for (let index = 0; index < 5; index++) {
  const data = fs.readFileSync(
    `${__dirname}/nft-images/cafe/${index + 1}.jpeg`
  );
  ipfsArray.push({
    path: `cafe/${index + 1}.jpeg`,
    content: data?.toString("base64"),
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
