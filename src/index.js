const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
  // System is a global variable from JS
  // load upon request
  System.import('./image_viewer').then(module => {
    module.default();
  });

};

document.body.appendChild(button);
