var prodcutList = []

var form = document.getElementById('product-form');

form.addEventListener('submit', (e)=> {

    e.preventDefault();
    
    var id = document.getElementById('product-id').value

    save(id)
})

function save(id)
{
    let product = {
        id: id,
        price: Math.random() * (500 - 1) + 1,
    };

    prodcutList.push(product)

    localStorage.setItem('products', JSON.stringify(prodcutList));

    alert('The product has been saved in localStorage');
}