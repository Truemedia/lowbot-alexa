# Lowbot alexa
Alexa adapter for lowbot

## This is a work in progress

## Installation

NPM
```bash
    npm i --save lowbot-alexa
```

Yarn
```bash
    yarn add lowbot-alexa
```

## Usage
Node
```js
    const LowBot = require('lowbot');
    const alexa = require('lowbot-alexa');

    let botInstance = new LowBot()
      .useAdapter(alexa);
```
