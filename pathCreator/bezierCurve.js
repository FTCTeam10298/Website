var Point3D = /** @class */ (function () {
    function Point3D(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Point3D.prototype.toString = function () {
        return "x: " + this.x + ", y: " + this.y;
    };
    return Point3D;
}());
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
function pointTimes(point, n) {
    var x = point.x * n;
    var y = point.y * n;
    var z = point.z * n;
    return new Point3D(x, y, z);
}
function pointAdd(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    var z = p1.z + p2.z;
    return new Point3D(x, y, z);
}
var BezierCurve = /** @class */ (function () {
    function BezierCurve(controlPoints) {
        this.ctrlPoints = [];
        this.ctrlPoints = controlPoints;
    }
    BezierCurve.prototype.calculatePoint = function (t) {
        var n = this.ctrlPoints.length - 1;
        // var t = t.coerceIn(0.1, 1.0)
        var result = new Point3D(0, 0, 0);
        for (var _i = 0, _a = this.ctrlPoints; _i < _a.length; _i++) {
            var it = _a[_i];
            var i = this.ctrlPoints.indexOf(it);
            var c = factorial(n) / (factorial(i) * (factorial(n - i)));
            result = pointAdd(result, pointTimes(it, (Math.pow((1 - t), (n - i))) * ((Math.pow(t, i)) * c)));
        }
        return result;
    };
    BezierCurve.prototype.getPointOnSegment = function (curveIndex, t) {
        var a = pointTimes(this.calculatePoint(curveIndex), (t - 1));
        var b = pointTimes(this.calculatePoint(curveIndex + 1), t);
        return pointAdd(a, b);
    };
    return BezierCurve;
}());
