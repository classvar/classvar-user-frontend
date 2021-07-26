import React from 'react';
import Button from '@components/atoms/Button';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const onClick = () => {
    console.log('Button Clicked!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={onClick}>Button</Button>
        <Button onClick={onClick} secondary>
          Secondary
        </Button>
        <Button onClick={onClick} danger>
          Danger
        </Button>
        <Button onClick={onClick} disabled>
          Disabled
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
