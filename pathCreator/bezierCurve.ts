

class Point3D {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    toString(): String {
        return "x: " + this.x + ", y: " + this.y;
    }
}

function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

function pointTimes(point: Point3D, n) {
    var x = point.x * n
    var y = point.y * n
    var z = point.z * n
    return new Point3D(x, y, z);
}

function pointAdd(p1: Point3D, p2: Point3D) {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    var z = p1.z + p2.z
    return new Point3D(x, y, z);
}


class BezierCurve {
    ctrlPoints: Array<Point3D> = [];
    constructor(controlPoints: Array<Point3D>) {
        this.ctrlPoints = controlPoints
    }

    calculatePoint(t: number): Point3D {
        const n = this.ctrlPoints.length - 1
            // var t = t.coerceIn(0.1, 1.0)

        var result = new Point3D(0, 0, 0);

        for (const it of this.ctrlPoints) {
            const i: number = this.ctrlPoints.indexOf(it);

            const c: number = factorial(n) / (factorial(i) * (factorial(n - i)));

            result = pointAdd(result, pointTimes(it, ((1 - t) ** (n - i)) * ((t ** i) * c)))
        }

        return result
    }

    getPointOnSegment(curveIndex, t): Point3D {
        const a = pointTimes(this.calculatePoint(curveIndex), (t - 1))
        const b = pointTimes(this.calculatePoint(curveIndex + 1), t)
        return pointAdd(a, b)
    }
}