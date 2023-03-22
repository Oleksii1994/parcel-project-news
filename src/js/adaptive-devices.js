const getDevice = [
  { width: 768, useClass: 'mobile' },
  { width: 1280, useClass: 'tablet' },
];


window.addEventListener('resize', onWidthUpdate);
window.addEventListener('DOMContentLoaded', onWidthUpdate);
function onWidthUpdate() {
  const screens = getDevice;
  const widthDevices = window.innerWidth; 
  const foundScreen = screens.find(option => widthDevices <= option.width);
  const defaultScreenClass = 'desktop';
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