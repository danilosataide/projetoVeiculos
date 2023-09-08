const form = document.querySelector(".formCreate");
const submitButton = form.querySelector(".btn");

function create() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede o envio do formulário

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

    try {
      const veiculo = await createVeiculo(newVeiculo);
      console.log("Novo veículo adicionado!", veiculo);
    } catch (error) {
      console.error("Erro ao adicionar veículo:", error);
    }
  });
}

create();
