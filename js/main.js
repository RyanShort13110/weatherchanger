document.getElementById('sunny').onclick = sunParty

function sunParty() {
  document.querySelector('body').style.background = "url('sunny.gif')"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundPosition = "center"
  document.body.style.backgroundSize = "100%"
}

document.getElementById('rainy').onclick = rainParty

function rainParty() {
document.querySelector('body').style.background = "url('rain.gif')"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundSize = "100%"
}

document.getElementById('snowy').onclick = snowParty

function snowParty() {
  document.querySelector('body').style.background = "url('snow.gif')"
  document.body.style.backgroundRepeat= "no-repeat"
  document.body.style.backgroundPosition = "center"
  document.body.style.backgroundSize = "100%"
  img.style.display = block
}

document.getElementById('return').onclick = returnBack

function returnBack() {
  document.querySelector('body').style.background = "rgba(0,0,0,0)"
  document.body.style.backgroundRepeat= "no-repeat"
  document.body.style.backgroundPosition = "center"
  document.body.style.backgroundSize = "100%"
}