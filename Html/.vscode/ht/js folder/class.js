class arth {
    add(a, b) {
        this.a = a;
        this.b = b;
        return (a * b);
    }
}

class min extends arth{


    div(a, b) {
        this.a = a;
        this.b = b;
        return (a /b);

    }

}
var x = new min();
var y =x.div(5,6);
document.writeln(y);
