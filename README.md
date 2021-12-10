# Non-iframe embedding in Cordova with inter-window communication

Cordova `inAppBrowser` + `cordova_iab.postMessage` API.


# Setup

```
cd cordova-app
npm install

# cordova platform add ios
cordova platform add android
cordova prepare
cordova requirements

cd ../page-to-embed
npm install

cd ..
npm i -g nodemon
```


# Running

Open android emulator, then run:
```
./run.sh
```

Note: this will both run the Cordova app and serve the page to embed, with hot reloading for both.


# TODOs

- Test out iOS and add the necessary iOS-specific `inAppBrowser` options
  - Extend `run.sh` to accept a command-line arg for `android` or `ios`
