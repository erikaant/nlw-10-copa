// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))




function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="/flags/icon-${player1}.svg" alt="${player1}">
      <strong>${hour}</strong>
      <img src="/flags/icon-${player2}.svg" alt="${player2}">
    </li>
  `
}

let delay = -0.3;

function createCard(date, day, games) {
  delay = delay + 0.3;

  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}
      <span>${day}</span>
    </h2>

    <ul>
      ${games}
    </ul>

  </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard("24/11", "Domingo", 
    createGame("qatar", "13:00", "ecuador")
  ) +
  createCard("21/11", "Segunda",
    createGame("england", "10:00", "iran") + 
    createGame("senegal", "13:00", "netherlands") +
    createGame("united-states", "16:00", "wales")
  ) +
  createCard("22/11", "Terça",
    createGame("england", "10:00", "iran") + 
    createGame("senegal", "13:00", "netherlands") +
    createGame("united-states", "16:00", "wales")
)
