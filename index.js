
//SignUp sheet functionality
const formEl = document.getElementById('signup-form');

if (formEl) {
  formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const birthday = document.getElementById('birthday').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    

    localStorage.setItem('firstName', JSON.stringify(firstName));
    localStorage.setItem('dob', JSON.stringify(birthday));
    localStorage.setItem('gender', JSON.stringify(gender));
    

    setTimeout(() => {
        window.location.href = 'faceScan.html';
    }, 1000);

  });
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
    const firstName = JSON.parse(localStorage.getItem('firstName'))
    const genderEl = JSON.parse(localStorage.getItem('gender'))
    const age = JSON.parse(localStorage.getItem('dob'))

    let gender = ''
    if(genderEl == 'female'){
        gender = 'img/character-img/woman.png'
    }else if(genderEl == 'male'){
        gender = 'img/character-img/man.png'
    }

    let html = ''
    

    html += `
    <div>
        <div class='character-container'>
            <h1>Welcome ${firstName}</h1>
        </div>
        <img class="character-img" src="${gender}" alt="${genderEl} character">
    </div>
`
    welcomeEl.innerHTML = html
    console.log(html)

}