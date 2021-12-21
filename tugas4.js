function tinggi(x = 195, y = 210, z = 220) {
    var l;
    var m;
    var s;

    if (x > y) {
        if (x > z) {
            if (y > z) {
                l = x;
                m = y;
                s = z;
                //console.log(l,m,s);
            } else {
                l = x;
                m = z;
                s = y;
                //console.log(l,m,s);
            }
        } else {
            l = z;
            m = x;
            s = y;
            //console.log(l,m,s);
        }

    } else {
        if (y > z) {
            if (z > x) {
                l = y;
                m = z;
                s = x;
                //console.log(l,m,s);
            } else {
                l = y;
                m = x;
                s = z;
                //console.log(l,m,s);
            }
        } else {
            l = z;
            m = y;
            s = x;
            //console.log(l,m,s);
        }

    }
    return [l, m, s]
}
console.log(tinggi());