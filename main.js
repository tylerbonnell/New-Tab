window.onload = function() {
  document.onkeydown = addKeyToArray;
}

var keys = [];
var pass = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
function addKeyToArray(e) {
  if (e.keyCode == 38 && keys.length != 1) {  // start the sequence over
    keys = [38];
  } else {
    keys.push(e.keyCode);
    if (checkCode()) {
      // konami code!
    }
  }
}

function checkCode() {
  if (keys.length == pass.length) {
    for (var i = 0; i < pass.length; i++) {
      if (keys[i] != pass[i]) {
        return false;
      }
    }
    return true;
  }
}
