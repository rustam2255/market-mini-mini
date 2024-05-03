'use strict'
window.addEventListener('DOMContentLoaded', function (){


    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');


    function createCart(){
        let cart =  document.createElement('div'),
            field = document.createElement('div'),
            heading  = document.createElement('h2'),
            close = document.createElement('button');
            

        cart.classList.add('cart')
        field.classList.add('cart-field')
        close.classList.add('close')
        

        heading.textContent = 'Sizning xaridingiz'
        close.textContent = 'Yopish'
    

        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(close)
        
    }
    createCart()

    let cart = document.querySelector('.cart'),
        close = document.querySelector('.close'),
        field = document.querySelector('.cart-field')
        
 
    openBtn.addEventListener('click', () =>{
        cart.style.display = 'block'
    })


    close.addEventListener('click',  () => {
        cart.style.display = 'none'
     })

     buttons.forEach(function (item, i){
        item.addEventListener('click',  () =>    {
            let  cloneItem = products[i].cloneNode(true),
                btn = cloneItem.querySelector('button');

            btn.remove()

            field.appendChild(cloneItem)
            products[i].remove()
        })
     })
    
})