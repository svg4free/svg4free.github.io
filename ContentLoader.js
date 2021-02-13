const xhr = new XMLHttpRequest;
url = window.location.hash.split(#)[1];
history.replaceState(null, "", "/" + url);

function loadArticle(){
	if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      document.getElementById("column2").innerHTML = xhr.responseXML.getElementById("mainContent").innerHTML);
    } else {
      // Oh no! There has been an error with the request!
	  alert("Article has not been loaded");
    }
  }
}

xhr.open("GET", window.location.href + url + ".article", true);
xhr.onreadystatechange = loadArticle;
xhr.responseType = "document";
xhr.send();