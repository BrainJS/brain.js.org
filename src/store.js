import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: [
      {
        title: 'GPU accelerated',
      },
      {
        title: 'Simple & Easy ',
      },
      {
        title: 'Asynchronous API',
      },
      {
        title: 'Export & Import Trained Models',
      },
      {
        title: 'Cross Validation',
      },
      {
        title: 'Stream Training',
      },
      {
        title: 'Modular',
      },
    ],
    highlights: [
      {
        title: 'Simple To Use',
        description:
          'Brain.js is super simple to use. You do not need to know Neural Networks in details to work with this. ',
        link: '//github.com/BrainJS/brain.js#examples',
      },
      {
        title: 'Fast',
        description:
          'Brain.js performs computations using GPU and gracefully fallback to pure JavaScript when GPU is not available.',
        link: '//github.com/gpujs/gpu.js',
      },
      {
        title: 'Useful',
        description:
          'Brain.js provides multiple neural network implementations as different neural nets can be trained to do different things well.',
        link: '//github.com/BrainJS/brain.js#neural-network-types',
      },
      {
        title: 'Easy To Integrate',
        description:
          'Easily export and import trained models using JSON format or as a function. Host pre-trained models on your website easily. ',
        link: '//github.com/BrainJS/brain.js#json',
      },
    ],
    networks: [
      {
        title: 'brain.NeuralNetwork',
        description: 'Feedforward Neural Network with backpropagation',
        link: 'https://en.wikipedia.org/wiki/Feedforward_neural_network',
      },
      {
        title: 'brain.recurrent.RNNTimeStep',
        description: 'Time Step Recurrent Neural Network or "RNN"',
        link: 'https://en.wikipedia.org/wiki/Recurrent_neural_network',
      },
      {
        title: 'brain.recurrent.LSTMTimeStep',
        description:
          'Time Step Long Short Term Memory Neural Network or "LSTM"',
        link: 'https://en.wikipedia.org/wiki/Long_short-term_memory',
      },
      {
        title: 'brain.recurrent.GRUTimeStep',
        description: 'Time Step Gated Recurrent Unit or "GRU"',
        link: 'https://en.wikipedia.org/wiki/Gated_recurrent_unit',
      },
      {
        title: 'brain.recurrent.RNN',
        description: 'Recurrent Neural Network or "RNN"',
        link: 'https://en.wikipedia.org/wiki/Recurrent_neural_network',
      },
      {
        title: 'brain.recurrent.LSTM',
        description: 'Long Short Term Memory Neural Network or "LSTM"',
        link: 'https://en.wikipedia.org/wiki/Long_short-term_memory',
      },
      {
        title: 'brain.recurrent.GRU',
        description: 'Gated Recurrent Unit or "GRU"',
        link: 'https://en.wikipedia.org/wiki/Gated_recurrent_unit',
      },
    ],
    tutorials: [
      {
        title: 'How to create a neural net in the browser with Brain.js',
        description: '',
        author: 'Per Harald Borgen',
        link: 'https://scrimba.com/c/c36zkcb',
      },
      {
        title: 'BRAIN.JS: NEURAL NETWORKS IN JAVASCRIPT',
        description: '',
        author: 'http://badassjs.com',
        link:
          'http://badassjs.com/post/729676907/brainjs-neural-networks-in-javascript',
      },
      {
        title: 'Neural Networks in JavaScript with Brain.js',
        description: '',
        author: 'Scott Robinson',
        link:
          'https://stackabuse.com/neural-networks-in-javascript-with-brain-js/',
      },
      {
        title: 'You can build a neural network in JavaScript',
        description: '',
        author: 'Daniel Simmons',
        link:
          'https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3',
      },
    ],
    examples: [
      {
        title: 'XOR function',
        description:
          "Here's an example showcasing how to approximate the XOR function.",
        link: '//jsfiddle.net/mubaidr/94nkLfeo/embedded/js,result/',
      },
      {
        title: 'Simple Letter Detection',
        description: 'Detect letters from text.',
        link: '//jsfiddle.net/mubaidr/efLq26xd/embedded/js,result/',
      },
      {
        title: 'Childrens Book',
        description:
          "Writing a children's book using a recurrent neural network.",
        link: '//jsfiddle.net/mubaidr/79Lkqsb5/embedded/js,result/',
      },
      {
        title: 'Color Contrast',
        description: 'Get suitable text color for given background color.',
        link: '//jsfiddle.net/mubaidr/8yeo2jmd/embedded/js,result/',
      },
      {
        title: 'Using node streams',
        description: 'Train neural network using streams',
        link: '//github.com/BrainJS/brain.js/blob/master/examples/javascript/stream-example.js',
      },
      {
        title: 'Using node streams',
        description: 'Train neural network using streams',
        link: '//github.com/BrainJS/brain.js/blob/master/examples/javascript/stream-example.js',
      },
      {
        title: 'Forecasting',
        description: 'Predict next number, and forecast numbers',
        link: '//github.com/BrainJS/brain.js/blob/master/examples/javascript/predict-numbers.js',
      },
      {
        title: 'Maths',
        description: 'Learning math using a recurrent neural network',
        link: '//github.com/BrainJS/brain.js/blob/master/examples/javascript/learn-math.js',
      },
      {
        title: 'Cross Validate',
        description: 'Using cross validation with a feed forward net ',
        link: '//github.com/BrainJS/brain.js/blob/master/examples/javascript/cross-validate.js',
      },
      {
        title: 'GPU powered AI',
        description: 'using the gpu in a browser',
        link: 'https://github.com/BrainJS/brain.js/blob/master/examples/javascript/gpu.html',
      },
      {
        title: 'Cryotherapy Success Rate Prediction',
        description: 'Predicting the Performance of Cryotherapy for Wart Treatment Using Machine Learning Algorithm.',
        link: '//github.com/iSumitBanik/Cryotherapy-Success-Rate',
      },
      {
        title: 'Rock Paper Scissors',
        description: 'This game can read the players\' patterns to determine the steps the AI will take in order to win.',
        link: '//github.com/arifikhsan/batu-gunting-kertas-nuxt',
      },
    ],
  },
  mutations: {},
  actions: {},
})
