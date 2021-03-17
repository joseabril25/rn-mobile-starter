# React Native

Setup and configurations and code structure to help you get started on the app.

## Development Tools
* Cocoapads Version: 1.10.0
* Node version: 12.0+

### Main Tools & Packages
* React Native v0.63
* Redux v4.0
* React Hook Form v6.9
* React Navigation v5
* PropTypes

## Environment Setup
You can read the full instruction here: [RN environment setup](https://reactnative.dev/docs/environment-setup)

### macOS
#### Node & Watchman
Install Node version 12.0+ using [NVM](https://github.com/nvm-sh/nvm)

Install Watchman
```
brew install watchman
```

#### Xcode & CocoaPods (iOS development)
> Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.
The easiest way to install Xcode is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). 

**Install Cocoapads using Homebrew**
```
brew install cocoapods
```

#### JDK Java Development Kit (Android development)
We recommend installing JDK using Homebrew.

```
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```

#### Android Studio

[Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

* Android SDK
* Android SDK Platform
* Android Virtual Device
* If you are not already using Hyper-V: Performance (Intel ® HAXM) [(See here for AMD or Hyper-V)](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)
* Android 10 (Q) or Android SDK Platform 29


Configure the `ANDROID_HOME` environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using zsh then `~/.zprofile` or `~/.zshrc`) config file:
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Windows
Kindly look into RN documentation for [windows setup](https://reactnative.dev/docs/environment-setup).

## Installation

Do the usual routine for node projects install npm packages
```
npm install
```

For ios Development
```
cd ios && pod install && cd ..
```
If you encounter issue on ios simulator, delete the ios/Podfile.lock and run this on terminal.
```
cd ios && rm -rf Pods && pod cache clean --all && pod install && cd ..
```

## Running on Simulator
### Android & iOS

Run this first to start the development
```
npm run start
```


### Android

If you are using your android phone for development, turn on the USB Debugging on your phone and plug the usb cable to your computer. Then check in adb devices if it's there by running this command on the terminal:
```
adb devices
```

Then if you find it, run this command to build to your phone/simulator
```
npm run android
```

### iOS

iPhone 11 is the default simulator in XCode
```
npm run ios
```
To run a different device
```
npx react-native run-ios --simulator="iPhone 8"
```
To list all available simulator in XCode
```
xcrun simctl list devices
```


## Folder Structure

    ├── android                     # Android files
    ├── ios                         # IOS files
    ├── src                         # Source files
    │   ├── api                     # API request files
    │   ├── assets                  # Fonts and images
    │   ├── components              # Component files
    │   ├── constants               # Constant values/data
    │   ├── hooks                   # Custom hooks
    │   ├── navigators              # App navigations
    │   ├── providers               # Custom providers
    │   ├── screens                 # Screens
    │   ├── store                   # State management with Redux and Saga
    │   ├── themes                  # Fonts and colors configuration
    │   ├── utils                   # Custom utility functions
    ├── App.js
    └── README.md

### Alias (Module Resolver)

```
'~': 'src/*'
```

Usage:

```
import SampleComponent from '~/components/SampleComponent';
```

### Use PropTypes

Always includes propTypes on your custom components. [reactjs.org/docs/typechecking-with-proptypes.html](https://reactjs.org/docs/typechecking-with-proptypes.html)

### Additional Notes

```
Run the API first on your local machine. This is just a test so just run it on your emulators.
```
```
Change the URL in the utils/api.js file, for the app to work locally. Make sure to use your IPV4 IP not localhost or 127.0.0.1
```
