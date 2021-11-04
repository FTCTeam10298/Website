function each(list, fn) {
    for (var x = 0; x < list.length; x++) {
        fn(list[x])
    }
}

function get(url, onResult) {
    function reqListener() {
        onResult(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
}

var insertionPoints = document.querySelectorAll(".insertion-point")
console.log("Insertion points are ", insertionPoints)
each(insertionPoints, function(insertionPoint) {
    console.log("next insertion point is ", insertionPoint)
    var url = insertionPoint.getAttribute("file")

    get(url, function(thetext) {
        console.log("Going to insert ", thetext, " into ", insertionPoint)
        insertionPoint.innerHTML = thetext;
    })
});




//<script src="templates.js"></script>
//<div class="insertion-point" file="header.html" ></div>