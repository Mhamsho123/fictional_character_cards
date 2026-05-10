const formEl = document.getElementById('signup-form')

if (formEl) {
    formEl.addEventListener('submit', function(e) {
        e.preventDefault()
        window.location.href = 'faceScan.html'
    })
}

const camera = document.getElementById("camera")

if (camera) {
    startCamera()
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