$(document).ready(function() {
  var a= prompt("Your name");
  alert("Wohooo! Best of luck" + " " +a );
  var towers = [[[], $(".line1")], [[], $(".line2")], [[], $(".line3")]],
    moves = 0,
    discs = null,
    hold = null;
  function clear() {
    towers[0][1].empty();
    towers[1][1].empty();
    towers[2][1].empty();
  }
  

  function drawdiscs() {
    clear();
    for (var i = 0; i < 3; i++) {
      if (!jQuery.isEmptyObject(towers[i][0])) {
        for (var j = 0; j < towers[i][0].length; j++) {
          towers[i][1].append(
            $(
              "<li id='disc" +
                towers[i][0][j] +
                "' value='" +
                towers[i][0][j] +
                "'></li>"
            )
          );
        }
      }
    }
  }

  function init() {
    clear();
    towers = [[[], $(".line1")], [[], $(".line2")], [[], $(".line3")]];
    discs = document.getElementById("box").value;
    moves = 0;
    hold = null;
    for (var i = discs; i > 0; i--) towers[0][0].push(i);
    drawdiscs();
  }

  function handle(tower) {
    if (hold === null) {
      if (!jQuery.isEmptyObject(towers[tower][0])) {
        hold = tower;
        towers[hold][1]
          .children()
          .last()
          .css("margin-top", "-170px");
      }
    } else {
      var move = moveDisc(hold, tower);
      moves += 1;
      $(".moves").text(moves + " moves");
      if (move == 1) {
        drawdiscs();
      } else {
        alert("Rule Violation! Bigger disk is not allowed on a smaller one");
      }
      hold = null;
    }
    if (solved()) $(".moves").text("Solved with " + moves + " moves!");
  }

  function moveDisc(tower1, tower2) {
    var from = towers[tower1][0];
    var to = towers[tower2][0];
    if (from.length === 0) return 0;
    else if (to.length === 0) {
      to.push(from.pop());
      return 1;
      } else if (from[from.length - 1] > to[to.length - 1]) {
        return 0;
      } else {
      to.push(from.pop());
      return 1;
    }
  }

  function solved() {
    if (towers[2][0].length == discs)
      return 1;
    else return 0;
  }

  $(".t").click(function() {
    handle($(this).attr("value"));
  });

  $("#restart").click(function() {
    var discs = document.getElementById("box").value;
    if(discs<=7){
      init();
    }
    else{
      // $(".error").text("Please!");
      alert("Please choose the correct value from the box!");
    }
    
  });
  init();
});