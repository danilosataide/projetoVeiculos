const veiculo = document.getElementById("veiculoList");

// Função para buscar e exibir a lista de usuários
async function getAllVeiculo() {
  veiculos = await getVeiculo();
  try {
    veiculos.forEach((veiculo) => {
      const listItem = document.createElement("div");
      listItem.classList.add("veiculoItem");

      const userText = document.createElement("p");
      userText.innerHTML = `
        <span>Marca:</span> ${veiculo.marca} <br> 
        <span>Modelo:</span> ${veiculo.modelo} <br> 
        <span>Ano:</span> ${veiculo.ano} <br> 
        <span>Cor:</span> ${veiculo.cor}`;

      listItem.appendChild(userText);
      veiculoList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de veículos:", error);
  }
}
getAllVeiculo();
