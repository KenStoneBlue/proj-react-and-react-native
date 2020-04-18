import React from 'react';
import { render } from 'react-dom';

import Chance from 'chance';

import MappingCollectionsToElements from './RenderingJSX/mapping-collections-to-elements.js';
import BuiltInHtmlTags from './RenderingJSX/built-in-html-tags.js';

var chance = new Chance();
const enabled = true;
const text = 'Y Button';
const placeholder = 'two inputs big value...';
const size = 90;








render(
  <section>
    <p>Hello, <strong>{chance.first()}</strong> from {chance.country({ full: true })} listening on {chance.radio()}</p>
    <MappingCollectionsToElements  />
    <BuiltInHtmlTags  />
    <button disabled={!enabled}>{text}</button>
    <input placeholder={placeholder} size={size} />
  </section>,
  document.getElementById('root')
);
