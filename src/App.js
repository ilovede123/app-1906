import React from 'react';
import './app.css';
@decor
class App extends React.Component {
  render() {
    return (
      <div className="App" >
        123
    </div>
    );
  }
}

function decor(target) {
  console.log(target)
}

export default App;
