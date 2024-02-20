const cards = [
  { symbol: "Corazones", numero: "A", value: 52 },
  { symbol: "Diamantes", numero: "A", value: 51 },
  { symbol: "Tréboles", numero: "A", value: 50 },
  { symbol: "Espadas", numero: "A", value: 49 },

  { symbol: "Corazones", numero: "K", value: 48 },
  { symbol: "Diamantes", numero: "K", value: 47 },
  { symbol: "Tréboles", numero: "K", value: 46 },
  { symbol: "Espadas", numero: "K", value: 45 },

  { symbol: "Corazones", numero: "Q", value: 44 },
  { symbol: "Diamantes", numero: "Q", value: 43 },
  { symbol: "Tréboles", numero: "Q", value: 42 },
  { symbol: "Espadas", numero: "Q", value: 41 },

  { symbol: "Corazones", numero: "J", value: 40 },
  { symbol: "Diamantes", numero: "J", value: 39 },
  { symbol: "Tréboles", numero: "J", value: 38 },
  { symbol: "Espadas", numero: "J", value: 37 },

  { symbol: "Corazones", numero: "10", value: 36 },
  { symbol: "Diamantes", numero: "10", value: 35 },
  { symbol: "Tréboles", numero: "10", value: 34 },
  { symbol: "Espadas", numero: "10", value: 33 },

  { symbol: "Corazones", numero: "9", value: 32 },
  { symbol: "Diamantes", numero: "9", value: 31 },
  { symbol: "Tréboles", numero: "9", value: 30 },
  { symbol: "Espadas", numero: "9", value: 29 },

  { symbol: "Corazones", numero: "8", value: 28 },
  { symbol: "Diamantes", numero: "8", value: 27 },
  { symbol: "Tréboles", numero: "8", value: 26 },
  { symbol: "Espadas", numero: "8", value: 25 },

  { symbol: "Corazones", numero: "7", value: 24 },
  { symbol: "Diamantes", numero: "7", value: 23 },
  { symbol: "Tréboles", numero: "7", value: 22 },
  { symbol: "Espadas", numero: "7", value: 21 },

  { symbol: "Corazones", numero: "6", value: 20 },
  { symbol: "Diamantes", numero: "6", value: 19 },
  { symbol: "Tréboles", numero: "6", value: 18 },
  { symbol: "Espadas", numero: "6", value: 17 },

  { symbol: "Corazones", numero: "5", value: 16 },
  { symbol: "Diamantes", numero: "5", value: 15 },
  { symbol: "Tréboles", numero: "5", value: 14 },
  { symbol: "Espadas", numero: "5", value: 13 },

  { symbol: "Corazones", numero: "4", value: 12 },
  { symbol: "Diamantes", numero: "4", value: 11 },
  { symbol: "Tréboles", numero: "4", value: 10 },
  { symbol: "Espadas", numero: "4", value: 9 },

  { symbol: "Corazones", numero: "3", value: 8 },
  { symbol: "Diamantes", numero: "3", value: 7 },
  { symbol: "Tréboles", numero: "3", value: 6 },
  { symbol: "Espadas", numero: "3", value: 5 },

  { symbol: "Corazones", numero: "2", value: 4 },
  { symbol: "Diamantes", numero: "2", value: 3 },
  { symbol: "Tréboles", numero: "2", value: 2 },
  { symbol: "Espadas", numero: "2", value: 1 },
];
const takingCard = () => {
  let randomCardIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomCardIndex];
  return randomCard;
};
takingCard();

export const game = () => {
  let username = prompt(
    `Bienvenido a nuestro juego de cartas! ♥ ♦ ♣ ♠.
Inserta tu usuario!`
  );
  if (!username) {
    username = "JUGADOR";
  }
  alert(`${username} Estas son las reglas: se te asignara una carta y  
Tienes que adivinar si la siguente es mayor o menor de la que tienes.
Los valore desde el mas grande al mas pequeño van de:
A, K, Q, J, 10, 9, 8 , 7, 6, 5, 4, 3, 2.
♥ Corazones ♦ Diamantes ♣ Tréboles ♠ Espadas.`);
  let score = 0;
  let match = 0;
  let playAgain = true;
  while (playAgain === true) {
    let usercard = takingCard();
    alert(`**${username}**
Tu carta es ${usercard.numero} de ${usercard.symbol}`);
    let opcion = prompt(
      `${username} la siguente carta es 'mayor' o 'menor'?`
    ).toLowerCase();
    let CPU = takingCard();
    if (CPU.symbol && CPU.numero === usercard.symbol && usercard.numero) {
      CPU = takingCard();
    }
    switch (opcion) {
      case "mayor":
        if (usercard.value < CPU.value) {
          alert(
            `${username} HAS GANADO, ha salido ${CPU.numero} de ${CPU.symbol}`
          );
          score++;
        } else {
          alert(
            `${username} HAS PERDIDO, ha salido ${CPU.numero} de ${CPU.symbol}`
          );
        }
        match++;
        break;
      case "menor":
        if (usercard.value > CPU.value) {
          alert(
            `${username} HAS GANADO, ha salido ${CPU.numero} de ${CPU.symbol}`
          );
          score++;
        } else {
          alert(
            `${username} HAS PERDIDO, ha salido ${CPU.numero} de ${CPU.symbol}`
          );
        }
        match++;
        break;
      default:
        alert(
          `${username} tiene que elegir si la siguente carta es 'mayor' o 'menor'!
`
        );
    }
    let input = prompt(`${username} quieres jugar de nuevo? 'SI' o 'NO'.
De momento has jugado ${match} veces y ganado ${score} veces!`).toLowerCase();
    playAgain = input === "si";
  }
  alert(`Gracias por haber jugado **${username}**
Has jugado ${match} vez y ganado ${score} vez!`);
};