//Função para assistir os teclas digitadas e permitir que seja printado na tela apenas as caracteres informados.
document.getElementById("peso").onkeypress = function(e) {
    var chrPeso = String.fromCharCode(e.which);
         if ("1234567890.".indexOf(chrPeso) < 0)
           return false;
            console.log(chrPeso)
       };

document.getElementById("altura").onkeypress = function(e) {
    var chrAlt = String.fromCharCode(e.which);
        if ("1234567890".indexOf(chrAlt) < 0)
           return false;
            console.log(chrAlt)
       };





function calcular() {
  const peso = document.querySelector('#peso').value;
  const altura = document.querySelector('#altura').value / 100;
  const imc = peso / (altura * altura);

  const pResImc = document.querySelector('.pResImc');
  const tableD = document.querySelector('.tableD');


  /** setando os valores do regex e dos campos do formulario*/
  const regexForPeso = /^([0-9]){2,3}$|^([0-9]){2,3}\.([0-9]){1,3}$/g;
  const valueFormPeso = document.querySelector('#peso').value;
  const foundPeso = valueFormPeso.match(regexForPeso);

  const regexForAlt = /^([0-9]){3}$/g;
  const valueFormAlt = document.querySelector('#altura').value;

  const foundAlt = valueFormAlt.match(regexForAlt);



/** validando as informações do formulario*/
  if (foundAlt && foundPeso) {

    if (imc < 14.9) {
      pResImc.innerHTML = `De acordo com a tabela, seu IMC (Índice de Massa Corporal) é de <strong>${imc.toFixed(
        2,
      )}</strong> considerado <mark  style="background: #f2da78;">baixo</mark> para a sua altura. Veja a tabela abaixo.`;
      tableD.innerHTML = ` 
            <table>
              <thead>
                  <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                  </tr>
              </thead>
              <tbody>
                <tr class="linha1" style="background: #f2da78;">
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
            </table>
    `;
    } else if (imc >= 18 && imc < 24.9) {
      pResImc.innerHTML = `De acordo com a tabela, seu IMC (Índice de Massa Corporal) é de <strong>${imc.toFixed(
        2,
      )}</strong> considerado <mark style="background: #8cbf8c;">normal</mark> para a sua altura. Veja a tabela abaixo.`;
      tableD.innerHTML = ` 
            <table>
              <thead>
                  <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                  </tr>
              </thead>
              <tbody>
                <tr class="linha1" >
                    <td>Abaixo de 14,9</td>
                    <td>MAGREZA!</td>
                </tr>
                <tr class="linha2" style="background: #8cbf8c;">
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
            </table>
    `;
    } else if (imc >= 25 && imc < 29.9) {
      pResImc.innerHTML = `De acordo com a tabela, seu IMC (Índice de Massa Corporal) é de <strong>${imc.toFixed(
        2,
      )}</strong> considerado <mark style="background: #e9cf66;">sobrepeso</mark> para a sua altura. Veja a tabela abaixo.`;
      tableD.innerHTML = ` 
            <table>
              <thead>
                  <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                  </tr>
              </thead>
              <tbody>
                <tr class="linha1" >
                    <td>Abaixo de 14,9</td>
                    <td>MAGREZA!</td>
                </tr>
                <tr class="linha2" >
                    <td>Entre 18 e 24,9</td>
                    <td>NORMAL!</td>
                </tr>
                <tr class="linha3" style="background: #e9cf66;">
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
            </table>
    `;
    } else if (imc >= 30 && imc < 39.9) {
      pResImc.innerHTML = `De acordo com a tabela, seu IMC (Índice de Massa Corporal) é de <strong>${imc.toFixed(
        2,
      )}</strong> considerado <mark style="background: #f75e59;">obesidade</mark> para a sua altura. Veja a tabela abaixo.`;
      tableD.innerHTML = ` 
            <table>
              <thead>
                  <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                  </tr>
              </thead>
              <tbody>
                <tr class="linha1" >
                    <td>Abaixo de 14,9</td>
                    <td>MAGREZA!</td>
                </tr>
                <tr class="linha2" >
                    <td>Entre 18 e 24,9</td>
                    <td>NORMAL!</td>
                </tr>
                <tr class="linha3">
                    <td>Entre 25 e 29,9</td>
                    <td>SOBREPESO!</td>
                </tr>
                <tr class="linha4" style="background: #f75e59;">
                    <td>Entre 30 e 39,9</td>
                    <td>OBESIDADE!</td>
                </tr>
                <tr class="linha5">
                    <td>Acima de 40</td>
                    <td>OBESIDADE GRAVE!</td>
                </tr>
              </tbody>
            </table>
    `;
    } else if (imc > 40) {
      pResImc.innerHTML = `De acordo com a tabela, seu IMC (Índice de Massa Corporal) é de <strong>${imc.toFixed(
        2,
      )}</strong> considerado <mark style="background: #bc0e0a;">obesidade grave</mark> mal para a sua altura. Veja a tabela abaixo.`;
      tableD.innerHTML = ` 
            <table>
              <thead>
                  <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                  </tr>
              </thead>
              <tbody>
                <tr class="linha1" >
                    <td>Abaixo de 14,9</td>
                    <td>MAGREZA!</td>
                </tr>
                <tr class="linha2" >
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
                <tr class="linha5" style="background: #bc0e0a;">
                    <td>Acima de 40</td>
                    <td>OBESIDADE GRAVE!</td>
                </tr>
              </tbody>
            </table>
    `;
    }
  } else {
    alert('Preencha todos os campos corretamente');
  }
}
