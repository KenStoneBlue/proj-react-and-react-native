import React from 'react';

const array = ['First', 'Second', 'Third'];
const object = {
  first: 1,
  second: 2,
  third: 3
};


class MappingCollectionsToElements extends React.Component {

  render() {
    console.log(array.map(i => <li key={i}>{i}</li>));
    return(

      <section>
        <h1>Mapping Array</h1>
        {/* Maps "array" to an array of "<li>"s.
             Note the "key" property on "<li>".
             This is necessary for performance reasons,
             and React will warn us if it's missing. */}
        <ul>{array.map(i => <li key={i}>{i}</li>)}</ul>
  
  
        <h1>Mapping Object</h1>
        {/* Maps "object" to an array of "<li>"s.
             Note that we have to use "Object.keys()"
             before calling "map()" and that we have
             to lookup the value using the key "i". */}
        <ul>
          {Object.keys(object).map(i => (
            <li key={i}>
              <strong>{i}: </strong> {object[i]}
            </li>
          ))}
        </ul>
  
      </section>

    );
  }
}

export default MappingCollectionsToElements;
