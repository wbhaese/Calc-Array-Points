function sideBarPointsCount() {
    for(var v = 0; v < scoreArray.length; v++){
      for(var z = 0; z < scoreArray[v].length; z++){
        if(scoreArray[v][z] != undefined){
          winPoint = (scoreArray[v][z].win * 20);
          drawPoint = (scoreArray[v][z].draw * 10);
          lostPoint = (scoreArray[v][z].loss * 10);

          scoreArray[v][z].points = ((winPoint + drawPoint - lostPoint) / 3);
        }
      }
    }

    for(var v = 0; v < scoreArray.length; v++){
      scoreArray[v].sort(function (a, b) {
        if (a.points < b.points) {
          return 1;
        }
        if (a.points > b.points) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      i = 1;

      scoreArray[v].forEach(function(e) {
        $(`#team${e.team}`).css('order',`${i}`);
        i++;
      });
    }
  }
