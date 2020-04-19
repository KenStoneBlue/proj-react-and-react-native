import React from 'react';

import MyComponent from './components/my-component.js';

class NamespacedComponents extends React.Component {

  render() {
    return(

      <section>

        <MyComponent>
          <MyComponent.First />
          <MyComponent.Second />
        </MyComponent>

      </section>

    );
  }
}

export default NamespacedComponents;
