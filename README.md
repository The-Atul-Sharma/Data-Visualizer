# Data Visualizer

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone http://advancedserver@192.168.5.71:7990/scm/adr/asidatalab.git
$ npm install
$ npm start
```

For production environments...

```sh
$ npm run build
```

Eslint setup...

```sh
$ npm install --save-dev \
  eslint-config-fbjs \
  eslint-plugin-babel \
  eslint-plugin-flowtype \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-relay \
  eslint \
  babel-eslint
```

### Vscode workspace setting

*   "editor.formatOnSave": true,
*   "javascript.format.enable": false,
*   "prettier.eslintIntegration": true
*   "prettier.tabWidth": 4
