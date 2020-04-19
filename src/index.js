import React from 'react';
import { render } from 'react-dom';

import Chance from 'chance';

import MappingCollectionsToElements from './RenderingJSX/mapping-collections-to-elements.js';
import BuiltInHtmlTags from './RenderingJSX/built-in-html-tags.js';
import HtmlTagConventions from './RenderingJSX/html-tag-conventions.js';
import DescribingUiStructures from './RenderingJSX/describing-ui-structures.js';
import EncapsulatingHtml from './RenderingJSX/encapsulating-html.js';
import NestingElements from './RenderingJSX/nesting-elements.js';
import NamespacedComponents from './RenderingJSX/namespaced-components.js';
import DynamicProps from './RenderingJSX/dynamic-props.js';
import JsxFragments from './RenderingJSX/jsx-fragments.js';

var chance = new Chance();









render(
  <section>
    <p>Hello, <strong>{chance.first()}</strong> from {chance.country({ full: true })} listening on {chance.radio()}</p>

    <h1>Rendering JSX</h1>
    <BuiltInHtmlTags  />
    <HtmlTagConventions  />
    <DescribingUiStructures />
    <EncapsulatingHtml />
    <NestingElements />
    <NamespacedComponents />
    <DynamicProps />
    <MappingCollectionsToElements  />
    <JsxFragments />

  </section>,
  document.getElementById('root')
);
