window.onload = function() {
  document.onkeydown = addKeyToArray;
  // Fetch the 5 hottest posts on /r/awww
  loadBG();
}

// Loads the background from reddit
function loadBG() {
  reddit.top('EarthPorn').t('day').limit(5).fetch(function(res) {
    // res contains JSON parsed response from Reddit
    console.log(res);
  });
}

var keys = [];
var pass = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]; // ;)
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
