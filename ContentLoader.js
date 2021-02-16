const xhr = new XMLHttpRequest;
url = window.location.hash.split("#")[1];
history.replaceState(null, "", "/" + url);

function loadArticle(){
	if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      document.getElementById("column2").appendChild(xhr.responseXML.getElementById("mainContent"));
    } else {
      // Oh no! There has been an error with the request!
	  alert("Article has not been loaded");
    }
  }
}

xhr.open("GET", window.location.origin + "/" + url + ".htm", true);
xhr.onreadystatechange = loadArticle;
xhr.responseType = "document";
xhr.send();
