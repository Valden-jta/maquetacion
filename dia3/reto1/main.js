let consultas = [];
let imprimir = "";

const informacion = () => {
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let phone = document.getElementById("phone").value;
  let departureDate = document.getElementById("departureDate").value;
  let passengers = document.getElementById("passengers").value;
  let departure = document.getElementById("departure").value;
  let checkboxList = document.getElementsByClassName("form__checkbox");
  let checkedValues = [];
  for (let checkbox of checkboxList) {
    if (checkbox.checked) {
      checkedValues.push(checkbox.value);
    }
  }
  let consulta = {
    name: name,
    email: mail,
    phone: phone,
    "departure date": departureDate,
    passengers: passengers,
    departure: departure,
    destination: checkedValues,
  };

  consultas.push(consulta);

  console.log(consultas);
};

document.getElementById("moreInfo").addEventListener("click", informacion);

const filtrar = (consultas) => {
  imprimir = document.getElementById("result");
  imprimir.classList.add(
    "container",
    "container__results",
    "container--flex-background"
  );
  consultas.forEach((consulta) => {
    if (
      consulta.destination.includes("canarias") ||
      consulta.destination.includes("mallorca") ||
      consulta.destination.includes("galicia")
    ) {
      imprimir.innerHTML += `<ul class="list">
        <li class="list__item"><span class="text--highlight">Nombre:</span> ${
          consulta.name
        }</li>
        <li class="list__item"><span class="text--highlight">Email:</span> ${
          consulta.mail
        }</li>
        <li class="list__item"><span class="text--highlight">Teléfono:</span> ${
          consulta.phone
        }</li>
        <li class="list__item"><span class="text--highlight">Salida:</span> ${
          consulta.departureDate
        }</li>
        <li class="list__item"><span class="text--highlight">Pasajeros:</span> ${
          consulta.passengers
        }</li>
        <li class="list__item"><span class="text--highlight">Partida:</span> ${
          consulta.departure
        }</li>
        <li class="list__item"><span class="text--highlight">Destino:</span> ${consulta.destination.join(
          ", "
        )}</li>
      </ul>`;
    }
  });
};
