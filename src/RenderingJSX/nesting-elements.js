import React from 'react';

class MyButton extends React.Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}


class MySection extends React.Component {
  render() {
    return (
      <section>
        <h2>MySection</h2>
        {this.props.children}
      </section>
    );
  }
}

class NestingElements extends React.Component {

  render() {
    return(

      <section>

        <MySection>
          <MyButton>Nested Button Text</MyButton>
        </MySection>

      </section>

    );
  }
}

export default NestingElements;
