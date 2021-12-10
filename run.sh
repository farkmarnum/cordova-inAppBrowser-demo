{
  cd page-to-embed
  npx nodemon
} & {
  cd cordova-app
  npx nodemon -x "cordova emulate android" -e "js html css"
}
