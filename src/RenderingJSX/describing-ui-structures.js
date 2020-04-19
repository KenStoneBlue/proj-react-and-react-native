import React from 'react';

class DescribingUiStructures extends React.Component {

  render() {
    return(

      <section>
        <header>
          <h1>A Header</h1>
        </header>
        <nav>
          <a href="item">Nav Item</a>
        </nav>
        <main>
          <p>The main content...</p>
        </main>
        <footer>
          <small>&copy; 2018</small>
        </footer>

      </section>

    );
  }
}

export default DescribingUiStructures;
