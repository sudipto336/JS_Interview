let debouncedSearchFn = debounceFn(printSearchDataInConsole, 1000);

function search() {
  debouncedSearchFn();
}

function debounceFn(callback, duration) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, duration);
  };
}

function printSearchDataInConsole() {
  const inputElem =  document.querySelector('input');
  console.log(`Searched Dat: ${inputElem.value}`);
}
