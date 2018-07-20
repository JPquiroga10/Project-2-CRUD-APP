
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('IronGenerator JS imported successfully!');
// }, false);

// // yuor main constructor function 
// function Draft(teamArr) {
//   const draftTeam = [];
//   var qBArray =[];
//   var rBArray =[];
//   var wRarray =[];
//   var tEArray =[];
//   var dsTArray =[];
//   var kArray =[];
//   // const playerPosition = ["QB","RB","WR","TE","DST","K"];
// }


// //method that split your players
// Draft.prototype.teamSpliter = (teamArr)=>{
//   teamArr.forEach((player) => {
// //  loop through array to plit players into to ech player postion
// switch(player.position) {
//   case 'QB':
//       qBArray.push(player)
//       break;
//    case 'RB':
//       rBArray.push(player)
//       break;
//   case 'WR':
//       wRArray.push(player)
//       break;
//   case 'TE':
//       teArray.push(player)
//       break;
//  case 'DST':
//       dsTArray.push(player)
//       break;
//  case 'K':
//       kArray.push(player)
//       break;
//   default:
      
//    }
// })
// }
// // function that take one position array go through it and selec a random player 
// Draft.prototype.ramdomSelector = (arr,PosArr)=>{ 
//   myRandomPayer = arr.Math.floor(Math.random() * Math.floor(arr.length));
//   return posArr.push(myRandomPayer);
// }
// // push ypur dudes to this array  draftTeam
// ramdomSelector(teamArr,qBArray);
// ramdomSelector(teamArr,teArray);
// ramdomSelector(teamArr,dsTArray);
// ramdomSelector(teamArr,kArray)


// // huffle funtion  is going to mis yor array and then you have to take the first two / three elemntes of it 
//   Draft.prototype.shuffle = (teamArray)=> {
//   var j, x, i;
//   for (i = teamArray.length - 1; i > 0; i--) {
//       j = Math.floor(Math.random() * (i + 1));
//       x = teamArray[i];
//       teamArray[i] = teamArray[j];
//       teamArray[j] = x;
//   }
//  return teamArray;

// }

// shuffle(rBArray);
// shuffle(wRArray);


// // Draft.shuffleSelector(aKarray)
// draftTeam.push(rBArray.splice[0,1])
// // Draft.shuffleSelector(wRarray)
// drafTeam.push(wRArray.splice[0,2])


// // creating a new instans of Draf constructor funtion
// var getMyTeam = new Draft(arrayofplayer)

// // push ypur dudes to this array  draftTeam
// // on your click funtion to get a random team yo call getMyTeam 
// getMyteam(arry)
  

