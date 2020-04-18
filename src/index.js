import React from 'react';
import { render } from 'react-dom';

import MappingCollectionsToElements from './RenderingJSX/mapping-collections-to-elements.js';

const enabled = true;
const text = 'Y Button';
const placeholder = 'two inputs big value...';
const size = 90;








render(
  <section>
    <MappingCollectionsToElements  />
    <button disabled={!enabled}>{text}</button>
    <input placeholder={placeholder} size={size} />
  </section>,
  document.getElementById('root')
);
