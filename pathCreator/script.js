const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

canvas.style.width = canvas.style.height

function line(p1, p2) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

function mousePosToCanvasPos(event) {
    var rect = canvas.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    const x = scaleRange(0, window.width, rect.left, window.width, event.clientX);
    const y = scaleRange(0, window.height, rect.top, window.height, event.clientY);
    return new Point3D(x, y);
}

function scaleRange(OldMin, OldMax, NewMin, NewMax, OldValue) {
    OldRange = (OldMax - OldMin)
    NewRange = (NewMax - NewMin)
    return (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
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


// CODE START

var bezier = new BezierCurve([
    new Point3D(0.0, 0.0, 0.0),
    new Point3D(50, 115, 0),
    new Point3D(100, 50, 0)
]);

displayBezier(bezier, 100)
    // 
function onClick(event) {
    const adjustedPos = mousePosToCanvasPos(event);


    const newCtrlPoints = bezier.ctrlPoints.concat([new Point3D(adjustedPos.x, adjustedPos.y, 0)])
    for (const i of newCtrlPoints) {
        console.log(i.toString())
    }

    bezier = new BezierCurve(newCtrlPoints);
    displayBezier(bezier, 1000)
};

canvas.addEventListener("click", onClick);