function night(){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    $('body').css('color', 'white');
    let temp = document.querySelectorAll('a');
    for(let i = 0; i<temp.length; i++){
        temp[i].style.color = 'white';
    }
}

function day(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    let temp = document.querySelectorAll('a');
    for(let i = 0; i<temp.length; i++){
        temp[i].style.color = 'black';
    }
}

export function dayNight(mode){
    if(mode === 'night'){
        night();
    }else{
        day();
    }
}