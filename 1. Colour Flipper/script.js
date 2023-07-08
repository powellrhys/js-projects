function getBackgroundColor() {

    let color_code = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    document.body.style.backgroundColor = color_code;
    document.getElementById("header").innerHTML = 'Background Colour: ' + color_code
  }
