// import { configure } from '@storybook/react';

// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);

import { configure } from '@storybook/react'

const req = require.context('../src/stories', true)
// const req = require.context('../src/stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
