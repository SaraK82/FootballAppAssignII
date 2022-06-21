 const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        ['Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Lwandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score:'4.0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date:'Nov 9th, 2037',
    odds:{
        team1 :1.33,
        draw: 3.25,
        team2: 6.5,
    },
};

//1.
const players1 = ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Lwandowski',]
const players2 = ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',]
//2.
let [gk,...fieldPlayers] = players1;
console.log(gk);

//3.
const allPlayers = players1.concat(players2)
//console.log(allPlayers)

//4.
const players1Final = players1
const subPlayers = ['Thiago','Coutinho','Perisic']

subPlayers.forEach(element=>{
    players1Final.push(element)
});
//console.log(players1Final)

//5.
const gameOdd = game.odds
const{team1, draw, team2} = gameOdd
console.log(draw)

//6.
function printGoals(...names){
    for(let name of names){
        console.log(`Hello ${name}`);
    }
}

printGoals("Davies","Muller","Lewandowski","Kimmich")

//7.
console.log(game.odds.draw)










 


