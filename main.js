window.onload = function() {
  document.onkeydown = addKeyToArray;
  // Fetch the 5 hottest posts on /r/awww
  loadBG();
}

// Loads the background from reddit
function loadBG(count) {
  count = count || 5;
  reddit.top('EarthPorn').t('day').limit(5).fetch(function(res) {
    // res contains JSON parsed response from Reddit
    var img = null;
    var posts = res.data.children;
    for (var i = 0; i < posts.length && img == null; i++) {
      var url = posts[i].data.url;
      if (url.match(/.*.[jpg|png]$/)) {
        img = posts[i];
      } else if (url.match(/.*imgur.com\/\w+/)) {
        img = posts[i];
      }
    }
    if (img == null) {
      loadBG(count + 5);
    } else {
      setBG(img);
    }
  });
}

function setBG(img) {
  console.log(img.data.url);
  document.body.style.backgroundImage = "url('" + img.data.url + "')";
}

var keys = [];
var pass = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]; // ;)
function addKeyToArray(e) {
  if (e.keyCode == 38 && keys.length != 1) {  // start the sequence over
    keys = [38];
  } else {
    keys.push(e.keyCode);
    if (checkCode()) {
      new Audio('audio.mp3').play();
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
