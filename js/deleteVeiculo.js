const veiculoList = document.getElementById("veiculoList");

// Função para buscar e exibir a lista de usuários
async function deleteUserById() {
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

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", () => deleteVeiculo(veiculo.id));

      listItem.appendChild(userText);
      listItem.appendChild(deleteButton);
      veiculoList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de veículos:", error);
  }
}

// Chama a função para buscar e exibir os veículos ao carregar a página
deleteUserById();
