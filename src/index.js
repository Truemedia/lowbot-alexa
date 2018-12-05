/**
  * Alexa adapter
  * @namespace adapter
  * @prop {object} info
  * @prop {object} client
  * @prop {object} input
  * @prop {object} output
  * @prop {object} vars
  */
module.exports = {
  /**
    * Descriptive information about adapter
    * @namespace info
    * @prop {String} name - Name of adapter used as context for bot
    */
  info: {
    name: 'alexa'
  },
  /**
    * Client configuration
    * @namespace client
    * @prop {Alexa} instance - API class instance
    * @prop {Object} methods - Login method used to invoke authentication
    */
  client: {},
  /**
    * Input configuration
    * @namespace input
    */
  input: {
    /**
      * Computer vision algorithms
      */
    cva: {support: false}
    /**
      * Natural language understanding
      */
    nlu: {support: true, native: true}
    /**
      * Speech recognition layer
      */
    srl: {support: true, native: true},
  },
  /**
    * Output configuration
    * @namespace output
    * @param {String} format - File format for outputting content
    * @param {String} target - Type of client that handles response
    */
  output: {
    format: { // Simultaneous output
      display: 'apl', // Alexa presentation language
      speech: 'ssml' // Speech synthesis markup language
    },
    target: 'device' // Hardware only
  },
  /**
    * Variable configuration
    * @namespace vars
    * @param {String} token - Token used to authenticate
    */
  vars: {}
};
