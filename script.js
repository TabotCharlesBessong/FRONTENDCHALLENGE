// Grab a couple of things we need
const section = document.querySelector('section')
const livesPLayerCount = document.querySelector("span")
let playerLives = 6;

livesPLayerCount.textContent = playerLives

// generate the data 

// [{ imgSrc: './images/beatles.jpeg '}]
const getDate = ()=> [
  { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" 
  },
  { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" 
  },
  { imgSrc: "./images/fleetwood.jpeg", id: 4, name: 
  "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 6, name: "lepzeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 7, name: 
  "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 82" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 12, name: 
  "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 15, name: 
  "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
  ]

const randomise = ()=>{
  const cardData = getDate()
  cardData.sort(()=> Math.random() - 0.5)
  return cardData
  // console.log(cardData);

}

// randomise();

// Card generatpr

const cardGenerator = ()=>{
  const cardData = randomise()
  console.log(cardData)
  // gDatacardData.for 
  // const cards = document.querySelectorAll(".card")
  cardData.forEach(item => {
    // console.log(item);
    const card = document.createElement('div')
    const face = document.createElement('img')
    const back = document.createElement('div')
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    // attach info to cards
    face.src = item.imgSrc;
    // cards[index].setAttribute('name',item.name)
    card.setAttribute('name',item.name)

    // Attach card to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click",(e)=>{
      card.classList.toggle("toggleCard")
      checkCards(e)
    })
    
  })
}

// check card
const checkCards = (e)=>{
  const clickedCard = e.target;
  console.log(clickedCard);
  const flippedCards  = document.querySelectorAll('.flipped')
  clickedCard.classList.add('flipped')
  // logic
  if(flippedCards.length === 2){
    if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
      console.log('match');
      flippedCards.forEach((card) =>{
        card.classList.remove('flipped')
        // card.classList.remove('toggleCard')
        card.style.pointerEvents = "none"
      })
      // playerLives++;
      // livesPLayerCount.textContent = playerLives
    }else{
      console.log('wrong');
      flippedCards.forEach(card =>{
        card.classList.remove('flipped')
        setTimeout(()=> card.classList.remove('toggleCard'),750)
      })
      playerLives--;
      livesPLayerCount.textContent = playerLives

      if(playerLives === 0){
        restart();
      }
    }
  }

}
// restart 
const restart =()=>{
  let cardData = randomise();
  let faces = document.querySelectorAll('.face')
  let cards = document.querySelectorAll('.card')
  cardData.forEach((item,index)=>{
    cards[index].classList.remove("toggleCard")
    // cards[index + 1].classList.remove('toggleCard')
    // randomise 
    setTimeout(()=>{
      cards[index].style.pointerEvents = "all",
      faces[index].src = item.imgSrc;
      cards[index].setAttribute('name',item.name)
    },1200)
  })
  playerLives = 6;
  livesPLayerCount.textContent = playerLives
}

cardGenerator()