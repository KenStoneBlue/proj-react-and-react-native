import React from 'react';

const enabled = true;
const text = 'Y Button';
const placeholder = 'two inputs big value...';
const size = 46;

class DynamicProps extends React.Component {

  render() {
    return(

      <section>

        <button disabled={!enabled}>{text}</button>
        <input placeholder={placeholder} size={size} />

      </section>

    );
  }
}

export default DynamicProps;
