const url = 'https://restcountries.com/v2/all'
var country = document.querySelector('#tabCountries')
var FavoritoCountry = document.querySelector('#tabFavorites')
var populations = document.querySelector('#totalPopulationList')
var populationF = document.querySelector('#totalPopulationFavorites')
var cont = document.querySelector('#countCountries')
var contF = document.querySelector('#favoritoscount')
var favoritos = []
var CountryArray = []
var pesquisar = document.querySelector('#pesquisar')
fetch(url)
  .then(promise => promise.json())
  .then(resul => {
    resul.forEach(a => {
      CountryArray.push(a)
    })
    tela()
  })
function tela() {
  var p
  var somar = 0
  var count = 0
  console.log(CountryArray)
  CountryArray.forEach((element, i) => {
    if (element != '') {
      somar += parseInt(element.population)
      count++
      p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
        element.numericCode
      }</td><td>${element.name}</td><td>${
        element.region
      }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
    }
    cont.innerHTML = count
    country.innerHTML = p
    populations.innerHTML = somar.toLocaleString()
  })
}
function mostrarTelaf() {
  var paisf
  var somar = 0
  var contar = 0
  favoritos.forEach((element, i) => {
    if (element != '') {
      somar += parseInt(element.population)
      contar++
      paisf += `
      <tr><td><img src="${element.flag}" width="50px"></td> <td>${
        element.numericCode
      }</td><td>${element.name}</td>
      <td>${
        element.region
      }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favoritos('${i}')"> -</button></td> </tr>
      `
    }
  })
  contF.innerHTML = contar
  FavoritoCountry.innerHTML = paisf
  populationF.innerHTML = somar.toLocaleString()
}
function tela_favorito(pais) {
  favoritos[pais] = CountryArray[pais]
  CountryArray[pais] = ''
  mostrarTelaf()
  tela()
}
function tela_favoritos(pais) {
  CountryArray[pais] = favoritos[pais]
  favoritos[pais] = ''
  mostrarTelaf()
  tela()
}
var valor_pesquisa
pesquisar.addEventListener('input', () => {
  valor_pesquisa = pesquisar.value
  aparecer(valor_pesquisa)
})
function aparecer(aparece) {
  var p
  var somar = 0
  var count = 0
  CountryArray.forEach((element, i) => {
    if (element != '') {
      if (element.name.startsWith(aparece)) {
        somar += parseInt(element.population)
        count++
        p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
          element.numericCode
        }</td><td>${element.name}</td><td>${
          element.region
        }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
      }
    }
    cont.innerHTML = count
    country.innerHTML = p
    populations.innerHTML = somar.toLocaleString()
  })
}
function regiao(continente) {
  var p
  var somar = 0
  var count = 0
  CountryArray.forEach((element, i) => {
    if (element != '') {
      if (element.region == continente) {
        somar += parseInt(element.population)
        count++
        p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
          element.numericCode
        }</td><td>${element.name}</td><td>${
          element.region
        }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
      }
    }
    cont.innerHTML = count
    country.innerHTML = p
    populations.innerHTML = somar.toLocaleString()
  })
}
document.querySelector('#as').addEventListener('click', () => {
  regiao('Americas')
})
document.querySelector('#eu').addEventListener('click', () => {
  regiao('Europe')
})
document.querySelector('#oc').addEventListener('click', () => {
  regiao('Oceania')
})
document.querySelector('#af').addEventListener('click', () => {
  regiao('Africa')
})
document.querySelector('#po').addEventListener('click', () => {
  regiao('Polar')
})
document.querySelector('#asi').addEventListener('click', () => {
  regiao('Asia')
})
function regiaoF(continenteF) {
  var p = ''
  var somar = 0
  var count = 0
  favoritos.forEach((element, i) => {
    if (element != '') {
      if (element.region == continenteF) {
        somar += parseInt(element.population)
        count++
        p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
          element.numericCode
        }</td><td>${element.name}</td><td>${
          element.region
        }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
      }
    }
    contF.innerHTML = count
    favoritos.innerHTML = p
    populationF.innerHTML = somar.toLocaleString()
  })
}
