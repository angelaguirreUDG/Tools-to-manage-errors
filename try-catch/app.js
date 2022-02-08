var form = document.getElementById('form');

form.addEventListener('submit', (e)=> {

    e.preventDefault();
    
    var number = document.getElementById('number').value

    try {
        validateNumber(number);
    } catch (error) {
        alert(error.message);
    }
})

function validateNumber(number)
{
    let toInt = parseInt(number);

    if(isNaN(toInt)){
        throw new Error('This is not a number');
    }
    alert(`This is a number! -> ${toInt}`)
} 