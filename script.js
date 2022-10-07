function calcular(){
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value/100;
  const imc = peso / (altura*altura);
    

const pResImc = document.querySelector('.pResImc');
const tableD = document.querySelector('.tableD');

if(imc < 15){
  pResImc.innerHTML = `De acordo com a tabela, seu IMC é de ${imc.toFixed(2)} considerado baixo para a sua altura. Veja a tabela abaixo.`;
  tableD.innerHTML = `<table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr class="linha1" style="background: #f2da78;>
                    <td>Abaixo de 14,9</td>
                    <td>MAGREZA!</td>
                </tr>
                <tr class="linha2">
                    <td>Entre 18 e 24,9</td>
                    <td>NORMAL!</td>
                </tr>
                <tr class="linha3">
                    <td>Entre 25 e 29,9</td>
                    <td>SOBREPESO!</td>
                </tr>
                <tr class="linha4">
                    <td>Entre 30 e 39,9</td>
                    <td>OBESIDADE!</td>
                </tr>
                <tr class="linha5">
                    <td>Acima de 40</td>
                    <td>OBESIDADE GRAVE!</td>
                </tr>
            </tbody>
        </table>` 
}else if(imc >=18<25){
   pResImc.innerHTML = `De acordo com a tabela, seu IMC é de ${imc.toFixed(2)} considerado normal para a sua altura. Veja a tabela abaixo.`;
  tableD.innerHTML =`<table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr class="linha1">
                    <td>Abaixo de 14,9</td>
                    <td>MAGREZA!</td>
                </tr>
                <tr class="linha2" style="background: #ebfdea;">
                    <td>Entre 18 e 24,9</td>
                    <td>NORMAL!</td>
                </tr>
                <tr class="linha3">
                    <td>Entre 25 e 29,9</td>
                    <td>SOBREPESO!</td>
                </tr>
                <tr class="linha4">
                    <td>Entre 30 e 39,9</td>
                    <td>OBESIDADE!</td>
                </tr>
                <tr class="linha5">
                    <td>Acima de 40</td>
                    <td>OBESIDADE GRAVE!</td>
                </tr>
            </tbody>
        </table>`;
}

}
