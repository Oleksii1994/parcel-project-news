const getDevice = [
  { width: 640, useClass: 'mobile' },
  { width: 1024, useClass: 'tablet' },
];

window.addEventListener('resize', onWidthUpdate);

function onWidthUpdate() {
  const screens = getDevice;
  const widthDevices = window.innerWidth; 
  const foundScreen = screens.find(option => widthDevices <= option.width);
  const defaultScreenClass = 'default';
  let result;

  if (foundScreen) {
    result = foundScreen.useClass;
  } else {
    result = defaultScreenClass;
  }

document.body.classList.forEach(className => {
  if (className.startsWith('screen-')) {
    document.body.classList.remove(className);
  }
});

document.body.classList.add(`screen-${result}`);

}