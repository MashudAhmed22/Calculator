let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = "Error";
        string = "";
      }
    }
    else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector('input').value = string;
      document.querySelector('input').value = "0";
    }
    else if (e.target.innerHTML == "CE") {
      if (string.length > 0) {
        string = string.slice(0, -1);
      }
      if (string.length === 0) {
        string = '0';
      }
      document.querySelector('input').value = string;
    }

    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})