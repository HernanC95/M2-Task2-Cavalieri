
let fechaActual = data.currentDate
let eventos = data.events

function validarFechaUpcoming(fechaEvento,currentDate){
    let resultado=false
    if (fechaEvento>currentDate){
        resultado=true
    }
    return resultado
}

function filtrarUpcoming(eventos) {
  let container = document.getElementById('container')
  for (let i = 0; i < eventos.length; i++) {
    if (validarFechaUpcoming(eventos[i].date,fechaActual)){
      let article = document.createElement('article')
        article.innerHTML +=
      `    <div class="card h-100" style="width: 18rem">
            <img
              src="${eventos[i].image}"
              class="card-img-top p-2 h-50 rounded-4"
              alt="${eventos[i].name}"
            />
            <div
              class="card-body d-flex flex-column align-items-center justify-content-between"
            >
              <h5 class="card-title">${eventos[i].name}</h5>
              <p class="card-text text-center">${eventos[i].description}</p>
              <div
                class="d-flex w-100 justify-content-between align-items-center"
              >
                <p class="m-0">Precio: ${eventos[i].price}</p>
                <a href="#" class="btn btn-secondary">Details</a>
              </div>
            </div>
          </div>`
        container.appendChild(article)
      }
  }
}
filtrarUpcoming(eventos)

