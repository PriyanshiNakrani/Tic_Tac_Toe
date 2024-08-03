let boxes=document.querySelectorAll(".box");
let msg=document.getElementById("msg");
let resetbtn=document.getElementById("reset");
let curplayer='X';
let board=['','','','','','','','',''];
let gameover=false;

const winpat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function boxclick(e){
    const index=Array.from(boxes).indexOf(e.target);

    if(board[index]==='' && !gameover){
        board[index]=curplayer;
        e.target.textContent=curplayer;

        if(chechwin()){
            msg.textContent=`${curplayer} wins!!`;
            gameover=true;
        }else if(board.every(cell=>cell!=='')){
            msg.textContent="it's a draw";
            gameover=true;
        }else{
            curplayer=curplayer==='X'?'O':'X';
            msg.textContent=`it's ${curplayer} turn`;
        }
    }
}
function chechwin(){
    return winpat.some(pattern=>{
        return pattern.every(index=>board[index]===curplayer);
    })
}
function resetgame(){
    board=['','','','','','','','',''];
    gameover=false;
    curplayer='X';
    msg.textContent=`It's ${curplayer} turn`;
    boxes.forEach(box=>box.textContent='');
}
boxes.forEach(box=>box.addEventListener('click',boxclick));
resetbtn.addEventListener('click',resetgame);
