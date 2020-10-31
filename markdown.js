function get(url, onResult){
    function reqListener () {
        onResult(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
}

get("tryouts.md", function(text){

    var contentHolder = document.getElementById('markdown-content')
    contentHolder.innerHTML = marked(text);
})