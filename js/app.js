const common = (x,btn) => {
    let numb = document.getElementById("ol").children.length;
    if(numb == 5){
        swal ( "Oops" ,  "You cannot add more than 5 items!" ,  "error" )
        return;
    }
    let ol = document.getElementById('ol');
    let li = document.createElement('li');
    li.innerText = x.innerText;
    ol.appendChild(li);
    btn.setAttribute("disabled","true");
    console.log(x.innerText);
}
const addPlayer1 = () => {
    let x = document.getElementById('name-1');
    const btn = document.getElementById('btn1');
    
    common(x,btn);
}
const addPlayer2 = () => {
    let x = document.getElementById('name-2');
    const btn = document.getElementById('btn2');
    common(x,btn);
}
const addPlayer3 = () => {
    let x = document.getElementById('name-3');
    const btn = document.getElementById('btn3');
    common(x,btn);
}
const addPlayer4 = () => {
    let x = document.getElementById('name-4');
    const btn = document.getElementById('btn4');
    common(x,btn);
}
const addPlayer5 = () => {
    let x = document.getElementById('name-5');
    const btn = document.getElementById('btn5');
    common(x,btn);
}
const addPlayer6 = () => {
    let x = document.getElementById('name-6');
    const btn = document.getElementById('btn6');
    common(x,btn);
}

document.getElementById('calculate').addEventListener('click', ()=> {
    let numb = document.getElementById("ol").children.length;
    let perPlayer = document.getElementById('per-player').value;
    document.getElementById('player-expenses').innerText = perPlayer*numb;
})

document.getElementById('calculate-total').addEventListener('click', ()=> {
    const manager = document.getElementById('manager').value;
    const coach = document.getElementById('coach').value;
    const  playerExpenses = document.getElementById("player-expenses").innerText;
    const total = parseFloat(manager) + parseFloat(coach) + parseFloat(playerExpenses);
    document.getElementById('total-cost').innerText = total;
})