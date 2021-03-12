# IoTeX Token Metadata

This repo is a collection of the metadata of all tokens (XRC20, XRC721, etc.) deployed to IoTeX blockchain. Developers can use this repo to list all tokens in their projects.

Metadata of a token consists of the following

- Token Name (required)
- logo (required)
- type ('xrc20', or 'xrc721', required)
- symbol (required)
- decimals (optional, xrc20's default is 18)

IoTeX Explorer (https://iotexscan.io/) and ioPay (http://iopay.iotex.io/) will include the metadata in their apps. All IoTeX ecosystem apps are welcome to support the metadata together.

## Add a new token

You can follow the steps to add your token in this repo,

1. fork the repo
2. add token's logo to `images/`
3. add metadata to `token-metadata.json`
4. commit to your forked repo
5. create a PR to this repo
6. waiting for PR review
7. merge PR

## Publish lib

```
$ npm login
// update package.json version
$ npm publish .
```

## Guidelines for tokens

- The icon should be small, square, but high resolution, ideally a vector/svg.
- Do not add your entry to the end of the JSON map, messing with the trailing comma. Your pull request should only be an addition of lines, and any line removals should be deliberate deprecations of those logos.
- PR should include link to official project website referencing the suggested address. Project website should include explanation of project. Project should have clear signs of activity, either traffic on the network, activity on GitHub, or community buzz.
- No Profanity in token name, description, etc.
