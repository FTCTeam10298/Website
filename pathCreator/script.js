const canvas = document.getElementById("canvas");
// const interpButton = document.getElementById("interpolate")
// const ctrlButton = document.getElementById("control")
const ctx = canvas.getContext("2d");


canvas.style.width = canvas.style.height

function line(p1, p2) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

function circle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
}

function displayBezier(bezier, definition) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var prevPoint = new Point3D(0.0, 0.0, 0.0);
    for (var i = 0; i <= definition; i++) {
        var currentPoint = bezier.calculatePoint(i / definition);
        line(prevPoint, currentPoint);
        prevPoint = currentPoint
    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;

    return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY
    }
}

// CODE START

var bezier = new BezierCurve([
    new Point3D(0.0, 0.0, 0.0),
    new Point3D(50, 115, 0),
    new Point3D(100, 50, 0)
]);

displayBezier(bezier, 100)


canvas.addEventListener("click", (event) => {
    // if 
    const clickPosition = getMousePos(canvas, event);

    const newCtrlPoints = bezier.ctrlPoints.concat([new Point3D(clickPosition.x, clickPosition.y, 0)])
    bezier = new BezierCurve(newCtrlPoints);

    displayBezier(bezier, 1000)
    ctx.fillStyle = 'red';
    for (const i of newCtrlPoints) {
        circle(i.x, i.y, 1);
    }
});

interpButton.addEventListener("click", (event) => {

});
ctrlButton.addEventListener("click", (event) => {

});