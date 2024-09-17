var products = document.querySelectorAll('.product')
var swip = document.querySelectorAll('.swip')
for (let i = 0; i < products.length; i++) {
    const element = products[i]
    swip[i].addEventListener('click', function() {
        //element.style.background = "green"
        //element.style.transform = "rotateY(180deg)"
        element.classList.add('animate')
        setTimeout(function(){
            element.classList.remove('animate') 
        }, 1000)
    })
}