arr = [312,45,89,78,65,35,85,69,25,250,47,38,96,125,254,190,110,50,300,5,14,29,61,33,98,29];
let interval = 500;
function insertionSort(a){

    for(let i=1; i< a.length; i++){
        setTimeout(function(){
            let value = a[i];
            let hole = i;
            while(hole > 0 && a[hole-1] > value){
                a[hole] = a[hole- 1]
                hole = hole-1
            }
            a[hole] = value
            drawLines(a);
            console.log(a[i])
        },i* 500);
    }
}

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


let sortStart = document.querySelector('.sort-start');
    sortStart.addEventListener('click',function(){
        insertionSort(arr);
    });
