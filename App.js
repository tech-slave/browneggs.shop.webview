import React from 'react';
import { View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#000000' }}>
    <StatusBar translucent backgroundColor="transparent" />
    <WebView 
      source={{ uri: 'https://browneggs.shop' }}
      style={{ flex: 1 }}
    />
  </View>
);

export default App;