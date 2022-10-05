
let fechaActual = data.currentDate
let eventos = data.events
console.log(eventos);

function validarCategoriaFF(category){
    let resultado=false
    if (category == 'Food Fair'){
        resultado=true
    }
    return resultado
}

function filtrarCategoriaFF(eventos) {
  let container = document.getElementById('container')
  for (let i = 0; i < eventos.length; i++) {
    if (validarCategoriaFF(eventos[i].category)){
      let article = document.createElement('article')
        article.innerHTML +=
      `    <div class="card h-100" style="width: 18rem">
            <img
              src="${eventos[i].image}"
              class="card-img-top p-2 h-75 rounded-4"
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
filtrarCategoriaFF(eventos)


function validarCategoriaM(category){
    let resultado=false
    if (category == 'Museum'){
        resultado=true
    }
    return resultado
}

function filtrarCategoriaM(eventos) {
  let container = document.getElementById('container')
  for (let i = 0; i < eventos.length; i++) {
    if (validarCategoriaM(eventos[i].category)){
      let article = document.createElement('article')
        article.innerHTML +=
      `    <div class="card h-100" style="width: 18rem">
            <img
              src="${eventos[i].image}"
              class="card-img-top p-2 h-75 rounded-4"
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
filtrarCategoriaM(eventos)


function validarCategoriaCP(category){
    let resultado=false
    if (category == 'Costume Party'){
        resultado=true
    }
    return resultado
}

function filtrarCategoriaCP(eventos) 
{
  let container = document.getElementById('container')
  for (let i = 0; i < eventos.length; i++) {
    if (validarCategoriaCP(eventos[i].category)){
      let article = document.createElement('article')
        article.innerHTML +=
      `    <div class="card h-100" style="width: 18rem">
            <img
              src="${eventos[i].image}"
              class="card-img-top p-2 h-75 rounded-4"
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
filtrarCategoriaCP(eventos)


function validarCategoriaMC(category){
    let resultado=false
    if (category == 'Music Concert'){
        resultado=true
    }
    return resultado
}

function filtrarCategoriaMC(eventos) {
  let container = document.getElementById('container')
  for (let i = 0; i < eventos.length; i++) {
    if (validarCategoriaMC(eventos[i].category)){
      let article = document.createElement('article')
        article.innerHTML +=
      `    <div class="card h-100" style="width: 18rem">
            <img
              src="${eventos[i].image}"
              class="card-img-top p-2 h-75 rounded-4"
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
filtrarCategoriaMC(eventos)


function validarCategoriaR(category){
    let resultado=false
    if (category == 'Race'){
        resultado=true
    }
    return resultado
}

function filtrarCategoriaR(eventos) {
  let container = document.getElementById('container')
  for (let i = 0; i < eventos.length; i++) {
    if (validarCategoriaR(eventos[i].category)){
      let article = document.createElement('article')
        article.innerHTML +=
      `    <div class="card h-100" style="width: 18rem">
            <img
              src="${eventos[i].image}"
              class="card-img-top p-2 h-75 rounded-4"
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
filtrarCategoriaR(eventos)


function validarCategoriaBE(category){
    let resultado=false
    if (category == 'Book Exchange'){
        resultado=true
    }
    return resultado
}

function filtrarCategoriaBE(eventos) {
  {
    let container = document.getElementById('container')
    for (let i = 0; i < eventos.length; i++) {
      if (validarCategoriaBE(eventos[i].category)){
        let article = document.createElement('article')
          article.innerHTML +=
        `    <div class="card h-100" style="width: 18rem">
              <img
                src="${eventos[i].image}"
                class="card-img-top p-2 h-75 rounded-4"
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
}
filtrarCategoriaBE(eventos)


function validarCategoriaC(category){
    let resultado=false
    if (category == 'Cinema'){
        resultado=true
    }
    return resultado
}

function filtrarCategoriaC(eventos) {
  let container = document.getElementById('container')
  for (let i = 0; i < eventos.length; i++) {
    if (validarCategoriaC(eventos[i].category)){
      let article = document.createElement('article')
        article.innerHTML +=
      `    <div class="card h-100" style="width: 18rem">
            <img
              src="${eventos[i].image}"
              class="card-img-top p-2 h-75 rounded-4"
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
filtrarCategoriaC(eventos)
