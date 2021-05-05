let deck = document.querySelector(".container");
let dataCards=["<i class='fas fa-dog'></i>","<i class='fas fa-dove'></i>","<i class='fas fa-dove'></i>","<i class='fas fa-dragon'></i>","<i class='fas fa-horse'></i>","<i class='fas fa-spider'></i>","<i class='fas fa-crow'></i>"];

function chooseCards(){
    dataCards
}

function cards(){
    let n=6;
    for(i=0;i<n;i++){
        deck.innerHTML+="<div class='card'><div class='c-backFace'><i class='fas fa-feather'></i></div><div class='c-frontFace'><i class='fas fa-cat'></i></div></div>";

    }
}
cards();


