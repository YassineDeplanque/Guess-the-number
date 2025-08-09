let number = Math.floor(Math.random() * 100)
console.log(number)

function submit(){
    let proposition = document.getElementById('input').value
    console.log(proposition)
    if(proposition == number){
        console.log('win')
    } else if(proposition >= number){
        console.log('too high')
    } else{
        console.log('too low')
    }
}