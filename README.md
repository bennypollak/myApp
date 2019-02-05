# myapp
ionic start myApp tabs
cd myApp/
git push ionic
git push --set-upstream ionic master
git remote add origin git@github.com:bennypollak/myApp.git
git push -u origin master
ionic g page newpage
ionic cordova plugin add cordova-wheel-selector-plugin
npm install --save @ionic-native/wheel-selector
ionic cordova build ios --prod


https://stackoverflow.com/questions/40034887/how-do-i-navigate-push-to-a-page-in-ionic-2

https://ionicacademy.com/wheel-picker-ionic/


https://www.joshmorony.com/an-introduction-to-lists-in-ionic-2/


ionic cordova platform add android

ionic cordova build android