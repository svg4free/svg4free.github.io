var xhr = new XMLHttpRequest;
url = window.location.hash.split("#")[1];
if(url){
	history.replaceState(null, "", "/" + url);
}

function loadArticle(){
	if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      document.getElementById("column2").appendChild(xhr.responseXML.getElementById("mainContent"));
	    document.getElementsByTagName("head")[0].appendChild(xhr.responseXML.getElementsByTagName("link")[0]);
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
