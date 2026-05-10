
//SignUp sheet functionality
const formEl = document.getElementById('signup-form')


if (formEl) {
    formEl.addEventListener('submit', function(e) {
        e.preventDefault()
        window.location.href = 'faceScan.html'
    })
}

const camera = document.getElementById("camera")
const confirmEl = document.getElementById('confirm-btn')


//faceScan functionality
if (camera) {
    startCamera()
}
if (confirmEl){
    confirmEl.addEventListener('click', confirmation)
}

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })

        camera.srcObject = stream
        camera.play()
    } catch (error) {
        console.log("Camera access failed:", error)
    }
}

function confirmation(){
    window.location.href = 'character.html'
}


//character
const welcomeEl = document.getElementById('welcome-character')

if(welcomeEl){
    rendercharacter()
}



function rendercharacter(){
    html = ''
    
}