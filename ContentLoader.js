//This script only runs on the layout page
//Check to see if there is a hash in the url. eg. https://svg4free.github.io/Layout#hash

url = window.location.hash.split("#")[1];

function loadArticle(){
	
if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
		// The request has been completed successfully
		//Add the contenet to column 2 of Layout.html
		
		//create variables for title, link and script tags in loaded content
		var articleTitle = xhr.responseXML.getElementsByTagName("title");
		var links = xhr.responseXML.getElementsByTagName("link");
		var scripts = xhr.responseXML.getElementsByTagName("script");
		
		//if there is at least one title tag
		if(articleTitle.length){
			document.getElementsByTagName("title")[0].textContent = articleTitle[0].textContent;
		}
		
		//if there is at least one link tag
		if (links.length){
			for (i = 0; i < links.length; i++){
				//this is needed to convert relative paths to absolute paths
				links[i].href = links[i].href;
				//add the link tags to Layout.html
				document.head.appendChild(links[i]);
			}
		}
		
		//if there is at least one script tag
		if (scripts.length){
			for (i = 0; i < scripts.length; i++){
				//for every script tag create a new script element
				var _script = document.createElement("script");
				//set its source to equal to the included src attribute
				_script.setAttribute("src", scripts[i].src);
				//append and run the scripts
				document.body.appendChild(_script);
			}
		}
		//load the article content
		document.getElementById("column2").appendChild(xhr.responseXML.getElementById("mainContent"));
		
    } else {
		// Oh no! There has been an error with the request!
		alert("Article has not been loaded");
    }
  }
}

if(url){
	var xhr = new XMLHttpRequest;
	//history.replaceState(null, "", "/" + url);
	xhr.open("GET", window.location.origin + "/" + url + "/content.html", true);
	xhr.onreadystatechange = loadArticle;
	xhr.responseType = "document";
	xhr.send();
}
