let deck = document.querySelector(".container");
let dataCards=["<i class='fas fa-dog'></i>","<i class='fas fa-dove'></i>","<i class='fas fa-fish'></i>","<i class='fas fa-dragon'></i>","<i class='fas fa-horse'></i>","<i class='fas fa-spider'></i>","<i class='fas fa-crow'></i>"];
let nCards=14;
// lista de simbolos da partida
function chooseCards(metadecartas){
    let choseCard =[];
    for(i=0;i<metadecartas;i++){
        let j = Math.floor(Math.random()*(dataCards.length));
        choseCard.push(dataCards[j]);
        dataCards.splice(j,1); 
    }
    return(choseCard);
}
//  console.log(chooseCards(5));

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
    // console.log(deckShuffle);
    for(i=0;i<nCards;i++){
        deck.innerHTML+="<div class='card'><div class='c-backFace'><i class='fas fa-feather'></i></div><div class='c-frontFace'>"+deckShuffle[i]+"</div></div>";
    }
}
cards(nCards);

//adicionar o evento clique nas cartas
let cardEvent = document.querySelectorAll('.card');

cardEvent.forEach((card) =>{
    card.addEventListener(("click"),()=>{
        
        cardsToMatch.push(event.target);
        event.target.classList.add("flip");
        if(cardsToMatch.length==2){
            let matches = match();
            if(matches==true){
                // cardsToMatch[0].removeEventListener("click");
                // cardsToMatch[1].removeEventListener("click");
                cardsToMatch=[];

            }else{
                setTimeout(FlipOut,1000);
            }
        
        }else{

        }
        

        // let click1 = 
    });
});

function FlipOut(){
    cardsToMatch[0].classList.remove("flip")
    cardsToMatch[1].classList.remove("flip")
    cardsToMatch=[];
}

