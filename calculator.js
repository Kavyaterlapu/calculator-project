const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function allClear() {
  display.value = '';
}

function clearlast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
