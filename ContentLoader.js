  
//This script only runs on the layout page
//Check to see if there is a hash in the url. eg. https://svg4free.github.io/Layout#hash

url = window.location.hash.split("#")[1];

function loadArticle(){
	if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
	// The request has been completed successfully
	//Add the contenet to column 2 of Layout.html
	document.getElementById("column2").appendChild(xhr.responseXML.getElementById("mainContent"));
    } else {
      // Oh no! There has been an error with the request!
	  alert("Article has not been loaded");
    }
  }
}

function loadResources(){
	//var ss = document.createElement("link");
	//ss.rel = "stylesheet";
	//ss.href = window.location.origin + "/" + url + ".css";
	//document.head.appendChild(ss);
	
	var links = xhr.responseXML.getElementsByTagName("link");
	for (i = 0; i < links.length; i++){
		document.head.appendChild(links[i]);
	}
	
	var scripts = xhr.responseXML.getElementsByTagName("script");
	for (i = 0; i < scripts.length; i++){
		document.head.appendChild(scripts[i]);
	}
}

//if there is a hash in the url:
//change the url
//load AJAX page content
//load Stylesheet

if(url){
	var xhr = new XMLHttpRequest;
	history.replaceState(null, "", "/" + url);
	xhr.open("GET", window.location.origin + "/" + url + "/content.html", true);
	xhr.onreadystatechange = loadArticle;
	xhr.responseType = "document";
	xhr.send();
	loadResources();
}