function calcular(){
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value/100;
  const imc = peso / (altura*altura);
    alert(`Seu IMC é ${imc.toFixed(2)}`)
}

console.log(imc.toFixed(2))