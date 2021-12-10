document.addEventListener('deviceready', onDeviceReady, false);

function handleInAppBrowserMessage(params, ref) {
  console.log(params);

  const elem = document.getElementById('state-container');
  if (elem) {
    elem.innerHTML = params.data.newState;
    ref.close();
  } else {
    console.error('Cannot find input element!');
  }
}

function handleEnrollClick() {
  const embeddedUrl = 'http://10.0.2.2:3333';
  const ref = cordova.InAppBrowser.open(embeddedUrl, '_blank', 'location=no,fullscreen=no,zoom=no');
  ref.addEventListener('message', (params) => handleInAppBrowserMessage(params, ref));
}

function onDeviceReady() {
  const enrollBtn = document.getElementById('enroll');
  if (enrollBtn) {
    enrollBtn.addEventListener('click', handleEnrollClick);
  }
}
