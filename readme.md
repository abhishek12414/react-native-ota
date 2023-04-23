# Expo app demo - over the air update

This is a demo app to know about how we can push js change without updating the app from their app store.

### To start the development server

```sh
npm start
```

### To build apk

```sh
npm run build:<server-name>

npm run build:dev
```

### To publish new update

```sh
eas update --branch <branch-name> --message "Updating the app"

eas update --branch development --message "Updating the app"
```
