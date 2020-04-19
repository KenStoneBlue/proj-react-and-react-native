import React from 'react';

class WithoutFragments extends React.Component {
  render() {
    return (
      <div>
        <h1>Without Fragments</h1>
        <p>
          Adds an extra <code>div</code> element.
        </p>
      </div>
    );
  }
}


class WithFragments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>With Fragments</h1>
        <p>Doesn't have any unused DOM elements.</p>
      </React.Fragment>
    );
  }
}

class JsxFragments extends React.Component {

  render() {
    return(

      <React.Fragment>

        <WithoutFragments />
        <WithFragments />

      </React.Fragment>

    );
  }
}

export default JsxFragments;
