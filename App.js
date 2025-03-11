import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import WebView from 'react-native-webview';
import Constants from 'expo-constants';
import { useRef } from 'react';
import * as Linking from 'expo-linking';

export default function App() {
  const webViewRef = useRef(null);

  const onMessage = async (event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === 'makePhoneCall') {
        try {
          // Using Linking directly handles permission requests automatically
          await Linking.openURL(`tel:${data.phoneNumber}`);
        } catch (error) {
          console.warn('Error making phone call:', error);
        }
      }
    } catch (error) {
      console.warn('Error parsing WebView message:', error);
    }
  };

  const injectedJavaScript = `
  // Create the Android interface that OMS.tsx is looking for
  window.Android = {
    makePhoneCall: function(phoneNumber) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'makePhoneCall',
        phoneNumber: phoneNumber
      }));
    }
  };
  
  // Keep the original function for backward compatibility
  window.makePhoneCall = function(phoneNumber) {
    window.Android.makePhoneCall(phoneNumber);
  };
  
  true;
`;

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />
      <SafeAreaView style={styles.safeArea}>
        <WebView 
          ref={webViewRef}
          source={{ uri: 'https://browneggs.shop' }}
          style={styles.webview}
          cacheMode="LOAD_DEFAULT"
          domStorageEnabled={true}
          javaScriptEnabled={true}
          onMessage={onMessage}
          injectedJavaScript={injectedJavaScript}
          onError={(syntheticEvent) => {
            console.warn('WebView error: ', syntheticEvent.nativeEvent);
          }}
          onHttpError={(syntheticEvent) => {
            console.warn('WebView HTTP error: ', syntheticEvent.nativeEvent);
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  safeArea: {
    flex: 1,
  },
  webview: {
    flex: 1,
  }
});