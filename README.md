# browneggs.shop.webview
Webview_Android deployment Scripts for browneggs.shop

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)
- Android Studio (for Android development)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/browneggs.shop.webview.git
cd browneggs.shop.webview
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Initialize Expo
```bash
npx expo start
```

### 4. Configure EAS Build
1. Login to your Expo account:
```bash
eas login
```

2. Configure your project:
```bash
eas build:configure
```

### 5. Create Android Build

#### Development Build
```bash
eas build --platform android --profile development
```

#### Preview Build
```bash
eas build --platform android --profile preview
```

#### Production Build
```bash
eas build --platform android --profile production
```

## Project Structure
```
browneggs.shop.webview/
├── App.js             # Main application component
├── assets/           # Static assets
├── app.json          # Expo configuration
├── eas.json         # EAS Build configuration
└── package.json     # Project dependencies
```

## Available Scripts

- `npm start` or `yarn start`: Start the Expo development server
- `npm run android` or `yarn android`: Start the Android development build
- `npm run ios` or `yarn ios`: Start the iOS development build
- `npm run web` or `yarn web`: Start the web development build

## Building for Production

1. Update the version in `app.json`
2. Run the production build:
```bash
eas build --platform android
```
3. The build will be available in your Expo dashboard

## Troubleshooting

If you encounter any issues:

1. Clear the npm cache:
```bash
npm cache clean --force
```

2. Reset Expo cache:
```bash
expo start -c
```

3. Verify Android SDK installation:
```bash
sdkmanager --list
```

## License
This project is licensed under the 0BSD License.