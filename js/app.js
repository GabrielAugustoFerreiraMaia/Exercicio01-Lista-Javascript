function calcular() {
    var a = document.querySelector(".a").value;
    var b = document.querySelector(".b").value;
    var c = document.querySelector(".c").value;


    var delta = b * b - 4 * a * c;
    console.log(delta);

    if (delta == 0) {
        alert("Possui uma raiz real");
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        alert("X1: "+x1);
        document.querySelector(".x1").innerHTML = x1;
    } else if (delta < 0) {
        alert("Não possui raiz real");
    }else{
        alert("Possui duas raízes reais")
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

        var x2Result = parseFloat(x2);
        var x1Result = parseFloat(x1);

        

        alert("X1: "+x1Result+" \nX2: "+x2);
        console.log(x2);
        console.log(x1);
    }
}