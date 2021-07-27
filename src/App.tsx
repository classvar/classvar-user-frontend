import React from 'react';
import Textarea from '@components/atoms/Textarea';
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
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
        <Input placeholder="input" />
        <Input password placeholder="password" onPressEnter={onClick} />
        <Input disabled />
        <Textarea disabled />
      </header>
    </div>
  );
};

export default App;
