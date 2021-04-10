const N = 9 //numero di spazi nella griglia
const NLINEA = 3 // numero di pokemon uguali per avere un evoluzione
function toRC(i) {
    r = Math.floor(i / sqrt(N));
    c = i % sqrt(N);
    return { r, c }
}
function fromRC(r, c) {
    if (r >= 0 && r < sqrt(N) && c >= 0 && c < sqrt(N)) return r * sqrt(N) + c; else return -1
}


class Gioco {
    constructor() {
        this.celle = [];
        //this.win = false;
        for (var i = 0; i < N; i++) {
            this.celle.push(new Pezzo)
        }
        this.reset()
    }
    pos(r, c) {
        var x = c * o.size + o.ox
        var y = r * o.size + o.oy
        return { x, y }
    }
    draw() {
        for (var i = 0; i < N; i++) {
            var { r, c } = toRC(i)
            var { x, y } = this.pos(r, c)
            this.celle[i].draw(x, y)
        }
       /* if (this.win) {
            var { r, c } = toRC(i)
            var { x, y } = this.pos(r, c)
            if (this.celle[i].n == 1) {
                image(o.sprite, x, y, s, s,
                    o.spritex, 0, o.spritex, o.spritey);
            } else if (this.celle[i].n == -1) {
                image(o.sprite, x, y, s, s,
                    o.spritex*4, 0, o.spritex, o.spritey);
            }
        }*/
    }
    getcella(x, y) {
        var c = Math.floor((x - o.ox) / o.size)
        var r = Math.floor((y - o.oy) / o.size)
        return fromRC(r, c)
    }
    move(i) {
        if (this.xx) {
            return this.celle[i].n = -1
        } else {
            return this.celle[i].n = 1
        }
    }
    /*toWin() {
        var xx = this.xx ? -1 : 1
        var self = this

        function cella0(r0, c0) {
            var i0 = fromRC(r0, c0)
            return self.celle[i0].n

        }
        function checkCella(r, c) {
            var trova = false;

            for (var r0 = r - 1, c0 = c - 1; r0 >= 0 && c0 >= 0; r0--, c0--) {
                var t = cella0(r0, c0)
                if (t == 0) break;
                if (t == xx) trova = true;
                if (t == -xx) {
                    if (trova) break;
                    else return true;
                }
            }
            trova = false;

            for (var r0 = r + 1, c0 = c + 1; r0 < 8 && c0 < 8; r0++, c0++) {
                var t = cella0(r0, c0)
                if (t == 0) break;
                if (t == xx) trova = true;
                if (t == -xx) {
                    if (trova) break;
                    else return true;
                }
            }
            trova = false;

            for (var r0 = r - 1, c0 = c + 1; r0 >= 0 && c0 < 8; r0--, c0++) {
                var t = cella0(r0, c0)
                if (t == 0) break;
                if (t == xx) trova = true;
                if (t == -xx) {
                    if (trova) break;
                    else return true;
                }
            }
            trova = false;
            for (var r0 = r + 1, c0 = c - 1; r0 < 8 && c0 >= 0; r0++, c0--) {
                var t = cella0(r0, c0)
                if (t == 0) break;
                if (t == xx) trova = true;
                if (t == -xx) {
                    if (trova) break;
                    else return true;
                }
            }
            trova = false;

            for (var r0 = r - 1; r0 >= 0; r0--) {
                var t = cella0(r0, c0)
                if (t == 0) break;
                if (t == xx) trova = true;
                if (t == -xx) {
                    if (trova) break;
                    else return true;
                }
            }
            trova = false;

            for (var r0 = r + 1; r0 < 8; r0++) {
                var t = cella0(r0, c0)
                if (t == 0) break;
                if (t == xx) trova = true;
                if (t == -xx) {
                    if (trova) break;
                    else return true;
                }
            }
            trova = false;

            for (var c0 = c + 1; c0 < 8; c0++) {
                var t = cella0(r0, c0)
                if (t == 0) break;
                if (t == xx) trova = true;
                if (t == -xx) {
                    if (trova) break;
                    else return true;
                }
            }
            trova = false;

            for (var c0 = c - 1; c0 >= 0; c0--) {
                var t = cella0(r0, c0)
                if (t == 0) break;
                if (t == xx) trova = true;
                if (t == -xx) {
                    if (trova) break;
                    else return true;
                }
            }
            return false;
        }
        var count = 0;

        for (var i = 0; i < N; i++) {
            if (this.celle[i].n == 0) {
                var { r, c } = toRC(i);
                var tm = checkCella(r, c)
                this.celle[i].candidata = tm
                if (tm) {
                    count++
                    if (count == NLINEA) {
                        this.win = true;
                        return i
                    }
                } else {
                    this.celle[i].candidata = false;
                }
            }
        }
    }*/
    reset() {
        this.xx = true;
        for (var i = 0; i < N; i++) {
            this.celle[i].n = 0;
        }

    }
}