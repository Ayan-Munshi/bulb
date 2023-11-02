let a = document.querySelector('h1') // practicing
a.innerHTML = ' dom manipulating by java script <br> (bulb project)' // change html body's text by using js(dom manipulation)
a.style.backgroundColor =" grey " // practicing

// bulb project js starts from betow

let b = document.querySelector('#bulb') // select what you want change in html by using js
let btn = document.querySelector("button")
//logic to on and off thr bulb
let flag = 0
btn.addEventListener('click',function(){
    if(flag==0){
        b.style.backgroundColor = 'yellow'
        console.log("clicked")
        flag = 1
    }
    else{

        b.style.backgroundColor = "grey"
        console.log('clicked again')
        flag = 0
    }
})

