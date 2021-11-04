function get(url, onResult) {
    function reqListener() {
        onResult(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
}

function insertFrom(location) {
    console.log("hey hey hey")
    get(location, function(text) {
        var contentHolder = document.getElementById('markdown-content')
        contentHolder.innerHTML = marked.parse(text);
    })
}