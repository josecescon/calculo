function soma(){
    let numero1 = parseInt (document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let soma = numero1 + numero2;
    document.getElementById('resultado').textContent ='Resultado: ' + soma;

}
function subtrair(){
    let numero1 = parseInt (document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let subtrair = numero1 - numero2;
    document.getElementById('resultado2').textContent ='Resultado: ' + subtrair;

}
function multiplicar(){
    let numero1 = parseInt (document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let multiplicar = numero1 * numero2;
      document.getElementById('resultado3').textContent ='Resultado: ' + multiplicar;
}
function dividir(){
    let numero1 = parseFloat (document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    if(numero2 == 0){
        alert('no result');
        return;
    }

    let dividir = numero1 / numero2;
      document.getElementById('resultado4').textContent ='Resultado: ' + dividir;
}
