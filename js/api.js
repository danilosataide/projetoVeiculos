const BASE_URL = "http://localhost:5000";

// Função para realizar uma requisição GET para a API
async function getVeiculo() {
  const response = await fetch(`${BASE_URL}/veiculos`);
  const data = await response.json();
  return data;
}

// Função para realizar uma requisição POST para a API
async function createVeiculo(veiculo) {
  const response = await fetch(`${BASE_URL}/veiculos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(veiculo),
  });
  const data = await response.json();
  alert(`Veiculo ${data.modelo} criado com sucesso!`);
  return data;
}

// Função para realizar uma requisição PUT para a API
async function updateVeiculo(id, veiculo) {
  const response = await fetch(`${BASE_URL}/veiculos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(veiculo),
  });
  const data = await response.json();
  alert(`Veículo ${data.modelo} atualizado com sucesso!`);
  return data;
}

async function deleteVeiculo(id) {
  const response = await fetch(`${BASE_URL}/veiculos/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
