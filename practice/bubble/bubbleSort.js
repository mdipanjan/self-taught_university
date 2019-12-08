arr = [112,45,89,78,65,35,85,69,25,250,47,38,96,125,254,190,110,50,300,5,14,29,61]

function bubbleSort(a){
    var swap = 0;
    for(  let i=0; i < a.length; i++){
        setTimeout( function(){
            //console.log(a[i])
            let current = a[i];
            let next = a[i+1];
            
            if( a[i] > a[i+1]){
                a[i] = next;
                a[i+1] = current;
                swap++
            }
            if(swap > 0){
                bubbleSort(a);
                drawLines(a);
            }
        }, i*500 );
  
    }
    console.log(a)
   
}

// bubbleSort(arr);

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
        bubbleSort(arr);
        // drawLines(arr);
     });