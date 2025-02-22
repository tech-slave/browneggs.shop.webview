import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import WebView from 'react-native-webview';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />
      <SafeAreaView style={styles.safeArea}>
      <WebView 
        source={{ uri: 'https://browneggs.shop' }}
        style={styles.webview}
        cacheMode="LOAD_DEFAULT"  // Default caching behavior
        domStorageEnabled={true}  // Enable local storage for auth
        javaScriptEnabled={true}  // Ensure JavaScript works
        onLoadProgress={({ nativeEvent }) => {
          if (nativeEvent.progress === 1) {
            // Optional: Reload only when new version is available
            webViewRef.current?.reload();
          }
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