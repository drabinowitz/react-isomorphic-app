module.exports = function (contentString, dataString, key) {
  var script = '';
  var args;
  if (dataString && key) {
    script = '<script>window["' + key + '"] = ' + dataString + ';window.isInitialLoad = true;</script>';
  }
  return (
    "<!DOCTYPE html>" +
    "<html lang='en'>" +
      "<head>" +
        "<title>Isomorphic App</title>" +
        "<link rel='stylesheet' href='./css/base.css'>" +
      "</head>" +
      "<body>" +
        "<h1>Hello Todo</h1>" +
        "<div id='content'>" +
          contentString +
        "</div>" +
        "<script src='./bundle.js' async></script>" +
        script +
      "</body>" +
    "</html>"
  );
};
