// We also need "Component" so that we can
// extend it and make a new JSX tag.
import React, { Component } from 'react';
import { render } from 'react-dom';
import { MyComponent } from 'index';

// Now when we render "<MyComponent>" tags, the encapsulated
// HTML structure is actually rendered. These are the
// building blocks of our UI.
render(<MyComponent />, document.getElementById('root'));
