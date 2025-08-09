let number = Math.floor(Math.random() * 100)
let text = document.getElementById('text')

function submit(){
let proposition = document.getElementById('input').value

    if(proposition == number){
        text.innerText = 'GG you found it !'
    } else if(proposition >= number){
        text.innerText = 'Too high...'
    } else{
        text.innerText = 'Too low...'
    }
}

function generate() {
    number = Math.floor(Math.random() * 100)
console.log(number)

}

console.log(number)