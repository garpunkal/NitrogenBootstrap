const moduleElements = document.querySelectorAll("[data-module]");

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i];
  const name = el.getAttribute("data-module");
  let options = {};
  const dataOptions = el.getAttribute("data-options");
  if (dataOptions) {
    options = JSON.parse(dataOptions);
  }

  import(`./${name}`).then(Module => {
    new Module.default(el, options);
  });
}

/*
  Use:
  ======
  html
  ----
  <button data-module="HideMe">hide!</button>
  
  --
  js
  --
  // modules/hideMe.js
  export default class HideMe {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/
