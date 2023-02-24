# Fork of [babel/website](https://babeljs.io)

This is the fork for the [babeljs.io](https://babeljs.io) website; feel free to suggest changes to our docs!

- Fork Current: `master` branch is deployed to https://qubitpi.github.io/babel-website/
- Upstream Current: `main` branch is deployed to https://babeljs.io

### Setup

Node: Check that Node is installed with version 10.19.0 and up. You can check this with node -v.

Yarn: Make sure that Yarn 1 is installed with version >= 1.19.0.

```shell title="Shell"
$ git clone git@github.com:babel/website.git
$ cd website
$ yarn && yarn bootstrap
$ yarn build:docusaurus
```

Then a GitHub Pages deployable will be generated under `website/build/babel` directory

### Contributing to the website

To keep documentation in sync across all of Babel's packages, the docs are now directly located in this repository. The READMEs in [`babel/babel`](https://github.com/babel/babel) are [auto generated](https://github.com/babel/babel/blob/main/scripts/generators/readmes.js) and point to this documentation.

You might want to make yourself familiar with [docusaurus](https://docusaurus.io/docs/en/installation) to make significant changes to the website.

#### Looking for support?

For questions and support on contributing please join our [Slack community](https://slack.babeljs.io/), channel `#website` or directly [here](https://babeljs.slack.com/messages/website).
