// READY

//Cuando ponga $ es para referire a un elemente dentro de HTML
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $stop = document.querySelector('#stop')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward ')
const $progress = document.querySelector('#progress')


// ---- EVENTOS A ESCUCHAR 

$play.addEventListener('click', handPlay)
$stop.addEventListener('click', handStop )
$backward.addEventListener('click', handBackward)
$forward.addEventListener('click', handForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)


// ---- FUNCIONES PARA LOS BOTONES DE REPRODUCION

function handPlay () {
    $video.play()
    $play.hidden = true
    $stop.hidden = false
    console.log('Le diste click al boton de Play')
}

function handStop() {
    $video.pause()
    $stop.hidden = true
    $play.hidden = false
    console.log('Le diste click al boton Stop')
}

function handBackward() {
    $video.currentTime = $video.currentTime - 10
    console.log('retroseder 10 segundos', $video.currentTime)
}

function handForward() {
    $video.currentTime = $video.currentTime + 10
    console.log('adelantar 10 segundos', $video.currentTime)
}


// ---  BARRA DE TIEPO --- //

function handleLoaded() {
  $progress.max = $video.duration
  console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
  //console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}