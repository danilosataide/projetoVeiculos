const veiculoList = document.getElementById("veiculoList");
const updateFormContainer = document.getElementById("updateFormContainer");

// Função para buscar e exibir a lista de usuários
async function UpdateVeiculoById() {
  try {
    veiculos = await getVeiculo();

    veiculos.forEach((veiculo) => {
      const listItem = document.createElement("div");
      listItem.classList.add("veiculoItem");

      const userText = document.createElement("p");
      userText.innerHTML = `
        <span>Marca:</span> ${veiculo.marca} <br> 
        <span>Modelo:</span> ${veiculo.modelo} <br> 
        <span>Ano:</span> ${veiculo.ano} <br> 
        <span>Cor:</span> ${veiculo.cor} 
      `;


      const SendButton = document.createElement("button");
      SendButton.textContent = "Atualizar";
      SendButton.classList.add("updateButton");
      SendButton.addEventListener("click", () => {
        const modal = document.getElementById("demo-modal"); // Access the first element with the "modal" class
        modal.style.visibility = "visible"; // Set the "visibility" style property to "visible"
        modal.style.opacity = "1"; // Set the "opacity" style property to "1"
        openUpdateForm(veiculo.id, veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.cor);
      });

      listItem.appendChild(userText);
      listItem.appendChild(SendButton);
      veiculoList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de veículos!", error);
  }
}

async function openUpdateForm(veiculoId, marca, modelo, ano, cor) {
  const updateFormHTML = `
    <form id="updateForm" class="formUpdate">
      <h2>Atualizar Veículo</h2>
      <label for="marca">Marca</label>
      <input type="text" placeholder="Digite a marca do veículo" id="marca" value="${marca}" required>
      <label for="modelo">Modelo</label>
      <input type="text" placeholder="Digite o modelo do veículo" id="modelo" value="${modelo}" required>
      <label for="ano">Modelo</label>
      <input type="text" placeholder="Digite o ano do veículo" id="ano" value="${ano}" required>
      <label for="cor">Modelo</label>
      <input type="text" placeholder="Digite a cor do veículo" id="cor" value="${cor}" required>
      <button type="submit" class="btn">Atualizar</button>
    </form>
  `;

  updateFormContainer.innerHTML = updateFormHTML;

  const updateForm = document.getElementById("updateForm");

  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;

    const newVeiculo = {
      marca,
      modelo,
      ano,
      cor
    };

    await updateVeiculo(veiculoId, newVeiculo);
  });
}

// Chama a função para buscar e exibir os usuários ao carregar a página
UpdateVeiculoById();
