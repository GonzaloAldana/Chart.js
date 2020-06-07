var datos = [];
var anios = [];
grafica1();


async function grafica1() {
  await getData();
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: anios,
      datasets: [
        {
          data: datos[0],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        },
        {
          data: datos[1],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        },
        {
          data: datos[2],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        },
        {
          data: datos[3],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        },
        {
          data: datos[4],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    }
  });
}

async function getData() {
  const personasArchivo = await fetch('personas.csv');
  const personasDatos = await personasArchivo.text();


  const todoElDocumento = personasDatos.split('\n').slice(1);
  anios = personasDatos.split('\n')[0].split(',').slice(1).map(x => +x);
  console.log(anios);
  todoElDocumento.forEach(row => {
    const columns = row.split(',').slice(1);
    datos.push(columns);
    console.log(datos);
  });

}