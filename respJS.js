function Q1(){
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    console.log('X = ' + x);
    console.log('Y = ' + y);
    console.log('Quociente = ' + Math.floor  (x/y));
    console.log('Resto = ' + (x%y));
}