class Pezzo{
constructor(n) {
    this.n = n
    this.candidata = false
}
draw(x, y, s = 0) {
    if (!s) {
        s = o.size
    }
    rect(x, y, o.size, o.size)

    if (this.n == 1) {
        //disegna x
        image(o.sprite, x, y, s, s,
            0, 0, o.spritex, o.spritey);
    } else if (this.n == -1) {
        //disegna o
        image(o.sprite, x, y, s, s,
            o.spritex*3, 0, o.spritex, o.spritey);
    }
}
}