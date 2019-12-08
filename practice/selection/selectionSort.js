// arrBckup = [112,45,89,78,65,35,85,69,25,250,47,38,96,125,254,190,110,50,300,5,14,29,61,33,98,29];
arr = [312,45,89,78,65,35,85,69,25,250,47,38,96,125,254,190,110,50,300,5,14,29,61,33,98,29];
let box = document.querySelector('.box');
let interval = 500;


function selectionSort(a){
    for(let i=0; i < a.length; i++){
        setTimeout( function timer(){
            let min = i;
        
            for(let l= i+1; l < a.length; l++){
                if(arr[l] < arr[min]){
                    min = l;
                }
            }
            if(min !== i){
                let temp = a[i];
                a[i] = a[min];
                a[min] = temp;
            }
            
            drawLines(arr);

        }, i*interval );

    }
    
}


let sortStart = document.querySelector('.sort-start');
    sortStart.addEventListener('click',function(){
        selectionSort(arr);
        drawLines(arr);

    });

let sortReset = document.querySelector('.sort-reset');
    sortReset.addEventListener('click',function(){
        // box.innerHTML = ''
        window.location.reload()
    });



function drawLines(elem){
    
    let box = document.querySelector('.box');
    let data = '';
    for(var i=0; i < elem.length; i++){
        data+= `<div class="bars"></div>`
    }
    box.innerHTML = data;
    let bars = document.querySelectorAll('.bars');
    bars.forEach(function(i,v){
        i.style.height = elem[v]+'px';
        //i.classList.add('b')
    });
    
}
document.onload =  drawLines(arr);

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
    output.innerHTML = slider.value;

slider.oninput = function() {
    
    slider.setAttribute('value', this.value);
    interval = slider.getAttribute('value');
    output.innerHTML = this.value;
    interval =  parseInt(interval*1000);
    console.log(interval)
}