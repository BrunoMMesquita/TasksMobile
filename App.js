
import React from 'react';
import Routes from './src/routes'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#038bce" translucent={true} />
      <Routes />
    </>

  );
}

