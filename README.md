# IoTeX Token Metadata

This repo is a collection of the metadata of tokens (XRC20, XRC721, etc...) deployed to IoTeX blockchain. Developers can use this repo to list these tokens in their projects.

Metadata of a token consists of the following JSON object:
```json
{
  "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw": {
    "name": "Vitality",
    "description": "Vitality (VITA) is a decentralized token for the IoTeX community.",
    "logo": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw.png",
    "type": "xrc20",
    "symbol": "VITA",
    "decimals": 18
  }
```

where:
| Field       | Required | Values           | default | Notes                                                    |
|-------------|:--------:|------------------|:-------:|----------------------------------------------------------|
| name        |     ✓    | string           |         | Token Name                                               |
| description |     ✓    | string           |         | Token Description                                        |
| logo        |     ✓    | file name        |         | logo image file name with extension                      |
| type        |     ✓    | `xrc20` `xrc721` |         | Type of token                                            |
| symbol      |     ✓    | string           |         | The symbol of the token                                  |
| decimals    |          | integer          |    18   | The number of decimals 

IoTeX Explorer (https://iotexscan.io/) and ioPay wallets (http://iopay.iotex.io/) will include this metadata in their apps. Any IoTeX ecosystem app can include this package in their code (see the **Usage** section below).

## New token submission process

Please notice that maintaining this list **is not our highest priority**. We do not guarantee the inclusion of your project metadata on any urgent timeline, because maintaining this list is a demanding and security-delicate task. We may also decide not to include the submission at all, e.g. if there are no proofs for a legit project behind the token, if we suspect the risk of pump&dump activity, airdrop-based phishing, or any cryptocurrency counterfeit scam. Plese see the **Guidelines for tokens** section below.

You can follow the steps below to submit your token metadata for review:

0. verify your token smart contract here: https://iotexscout.io/verifyContract.
1. fork this repo
2. add your token logo to the `images/` folder
3. add your metadata to `token-metadata.json`
4. commit to your forked repo
5. create a PR to this repo with links to token project website
7. wait for your PR to get reviewed
8. once approved, you can merge your PR

## Guidelines for tokens
We will only take into consideration projects that show clear signs of activity: either traffic on the network, activity on GitHub, or community buzz.

- The icon should be small, square, but high resolution, ideally a vector/svg. For png/jpg, 64x64 is recommended.
- Do not add your entry to the end of the JSON map, messing with the trailing comma. 
- Your pull request should only be an addition of lines: data removals should be made as a deliberate deprecation of the affected logo.
- Make sure your PR includes a link to official project website referencing the token contract address you are submitting. Also, the website should include a detailed explanation of project.
- No Profanity in token name, description, etc.

## Usage
Install this package from npm with `npm install iotex-token-metadata -s` and use it in your code like in the example below:

```javascript
metadatasMap = require("iotex-token-metadata");

let address = "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw";
console.log("Metadata for token address: ", address);

let metadata = getXrc20TokenMetadata(address);

console.log("Token Name:", metadata.name);
console.log("Token Description:", metadata.description);
console.log("Token logo:", metadata.logo);
console.log("Token type:", metadata.type);
console.log("Token symbol:", metadata.symbol)
if (metadata.type=="xrc20") {
  console.log("Token Decimals:", metadata.decimals);
}

function getXrc20TokenMetadata(address) {
  const metadata = metadatasMap[address];
  return metadata;
}
```


## Publish lib
Intended for the repository maintainer only (not required for token submission):
```
$ npm login
// update package.json version
$ npm publish .
```
