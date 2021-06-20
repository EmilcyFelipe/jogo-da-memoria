let deck = document.querySelector(".container");
//icones disponiveis
let dataCards=["<i class='fas fa-dog'></i>","<i class='fas fa-dove'></i>","<i class='fas fa-fish'></i>","<i class='fas fa-dragon'></i>","<i class='fas fa-horse'></i>","<i class='fas fa-spider'></i>","<i class='fas fa-crow'></i>","<i class='fas fa-hippo'></i>","<i class='fas fa-frog'></i>","<i class='fas fa-cat'></i>"];
let nCards=0;

//Usuário define o tamanho do deck
let buttonsSize = document.querySelectorAll(".b-size");
buttonsSize.forEach((button)=>{
    button.addEventListener(("click"),()=>{
        nCards=parseInt(event.target.id);
        console.log(nCards);
        cards(nCards);
        document.querySelector(".setSize").innerHTML="";
    });
});

// escolha aleatoria de simbolos da partida
function chooseCards(metadecartas){
    let choseCard =[];
    for(i=0;i<metadecartas;i++){
        let j = Math.floor(Math.random()*(dataCards.length));
        choseCard.push(dataCards[j]);
        dataCards.splice(j,1); 
    }
    return(choseCard);
}


//funçao total de cartas no deck
function deckCards(){
    let c = chooseCards(nCards/2);
    let deck =[];
    for(i=0;i<2;i++){
        for(var card of c){
            deck.push(card);
        }
    }
    return(deck);
}

//função embaralha cartas
function shuffle(){
    let deckList = deckCards();
    
    let cardLength = deckList.length;
    let randomIndex = 0;
    while(cardLength!==0){
        randomIndex = Math.floor(Math.random()*cardLength);
        cardLength--;
        [deckList[randomIndex],deckList[cardLength]]=[deckList[cardLength],deckList[randomIndex]];
    }
    return(deckList);
}

// função adiciona cartas ao tabuleiro
function cards(nCards){
    let deckShuffle = shuffle();
    
    for(i=0;i<nCards;i++){
        deck.innerHTML+="<div class='card'><div class='c-backFace'><i class='fas fa-feather'></i></div><div class='c-frontFace'>"+deckShuffle[i]+"</div></div>";
    }
    // //adicionar o evento clique nas cartas
    let cardEvent = document.querySelectorAll('.card');
    cardEvent.forEach((card) =>{
    card.addEventListener(("click"), flipIn);
});
}


let winner =0;
//gira carta por partida
function flipIn(){
    cardsToMatch.push(event.target);
    event.target.removeEventListener(("click"),flipIn);
    event.target.classList.add("flip");
    if(cardsToMatch.length==2){
        let matches = match();
        if(matches==true){
            cardsToMatch=[];
            winner++
            if(winner==nCards/2){
                document.querySelector(".container").innerHTML+="<div class='won'>Congratulations, you won!!</div>"
            }

        }else{
            var cardsToFlip = cardsToMatch;
            cardsToMatch.forEach((card) =>{
                card.addEventListener(("click"), flipIn);
            });
            cardsToMatch=[];
            console.log(cardsToFlip);
            setTimeout(()=>{cardsToFlip[0].classList.remove("flip");
            cardsToFlip[1].classList.remove("flip");
        },1000);
        }
    }
}

