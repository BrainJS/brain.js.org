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
          'Brain.js provided multiple neural network implementations as different neural nets can be trained to do different things well.',
        link: '//github.com/BrainJS/brain.js#neural-network-types',
      },
      {
        title: 'Easy To Integrate',
        description:
          'Easily export and import trained models to JSON format and as a function. Host pre-trained models on your website easily. ',
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
        link: '//jsfiddle.net/mubaidr/efLq26xd/2/embedded/js,result/',
      },
      {
        title: 'Simple Letter Detection',
        description: 'Detect letters from text.',
        link: '//jsfiddle.net/mubaidr/79Lkqsb5/2/embedded/js,result/',
      },
      {
        title: 'Childrens Book',
        description:
          "Writing a children's book using a recurrent neural network.",
        link: '//jsfiddle.net/mubaidr/zdLh6bsn/3/embedded/js,result/',
      },
      {
        title: 'Color Contrast',
        description: 'Get suitable text color for given background color.',
        link: '//jsfiddle.net/mubaidr/9vcqrb0p/1/embedded/js,result/',
      },
      {
        title: 'Guess Number',
        description: 'Guess next number in series.',
        link: '//jsfiddle.net/mubaidr/8yeo2jmd/1/embedded/js,result/',
      },
    ],
  },
  mutations: {},
  actions: {},
})
