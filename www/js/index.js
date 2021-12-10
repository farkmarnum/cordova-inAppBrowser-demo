document.addEventListener('deviceready', onDeviceReady, false);

function handleInAppBrowserMessage(params) {
  const elem = document.getElementById('state-container');
  if (elem) {
    elem.innerHTML = params.data.newState;
  }
}

function handleEnrollClick() {
  console.log(1);
  const embeddedUrl = 'http://localhost:3333';

  const ref = cordova.InAppBrowser.open(embeddedUrl, '_blank', 'location=no');
  console.log(2);
  ref.addEventListener('message', handleInAppBrowserMessage);
  console.log(3);
}

function onDeviceReady() {
  const enrollBtn = document.getElementById('enroll');
  if (enrollBtn) {
    enrollBtn.addEventListener('click', handleEnrollClick);
  }
}
