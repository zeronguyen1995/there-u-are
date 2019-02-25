import * as React from 'react';
import './App.css';
import BigMap from './component/bigmap/BigMap'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BigMap greeting = {{ a: "asd", b: 123}}/>
      </div>
    );
  }
}

export default App;
