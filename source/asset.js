Colors = {

  arkanoid: {
    w: "#FCFCFC", // white
    o: "#FC7460", // orange
    l: "#3CBCFC", // light blue
    g: "#80D010", // green
    r: "#D82800", // red
    b: "#0070EC", // blue
    p: "#FC74B4", // pink
    y: "#FC9838", // yellow
    s: "#BCBCBC", // silver
    d: "#F0BC3C", // gold
    x: "#000000"
  },

  pastel: {
    y: "#FFF7A5", // yellow
    p: "#FFA5E0", // pink
    b: "#A5B3FF", // blue
    g: "#BFFFA5", // green
    o: "#FFCBA5", // orange
    x: "#000000"
  },

  vintage: {
    a: "#EFD279", // yellow
    b: "#95CBE9", // light blue
    c: "#024769", // dark blue
    d: "#AFD775", // light green
    e: "#2C5700", // grass
    f: "#DE9D7F", // red
    g: "#7F9DDE", // purple
    h: "#00572C", // dark green
    i: "#75D7AF", // mint
    j: "#694702", // brown
    k: "#E9CB95", // peach
    l: "#79D2EF" // blue
  },

  liquidplanner: {
    a: '#62C4E7', // light blue
    b: '#00A5DE', // dark  blue
    x: '#969699', // light gray
    y: '#7B797E' // dark  gray
  },


};
Levels = [

  {
    colors: Colors.pastel,
    bricks: [

      "yyyyyYYY",
  
    ]
  },

  {
    colors: Colors.arkanoid,
    bricks: [
      "", "",
      "          yy      yy          ",
      "            yy  yy            ",
      "            yy  yy            ",
      "          ssSSssSSss          ",
      "          ssSSssSSss          ",
      "        SSsswwsswwssSS        ",
      "        SSsswwsswwssSS        ",
      "      ssSSssSSssSSssSSss      ",
      "      ssSSssSSssSSssSSss      ",
      "      ss  ssSSssSSss  ss      ",
      "      ss  ss      ss  ss      ",
      "      ss  ss      ss  ss      ",
      "            ss  ss            ",
      "            ss  ss            ",
    ]
  },

  {
    colors: Colors.arkanoid,
    bricks: [
      "",
      "oo",
      "ooll",
      "oollgg",
      "oollggbb",
      "oollggbbrr",
      "oollggbbrroo",
      "oollggbbrrooll",
      "oollggbbrroollgg",
      "oollggbbrroollggbb",
      "oollggbbrroollggbbrr",
      "oollggbbrroollggbbrroo",
      "oollggbbrroollggbbrrooll",
      "oollggbbrroollggbbrroollgg",
      "oollggbbrroollggbbrroollggbb",
      "ssSSssSSssSSssSSssSSssSSssSSrr"
    ]
  },

  {
    colors: Colors.arkanoid,
    bricks: [
      "", "",
      "              ss              ",
      "          bbBBssggGG          ",
      "        BBbbWWwwWWGGgg        ",
      "      bbBBwwWWwwWWwwggGG      ",
      "      bbBBwwWWwwWWwwggGG      ",
      "      bbBBwwWWwwWWwwggGG      ",
      "      ss  ss  ss  ss  ss      ",
      "              ss              ",
      "              ss              ",
      "          oo  oo              ",
      "          ooOOoo              ",
      "            OO                "
    ]
  },

  {
    colors: Colors.pastel,
    bricks: [
      "", "",
      "  yyYYyyYYyyYY  YYyyYYyyYYyy  ",
      "  bbBBbbBBbbBB  BBbbBBbbBBbb  ",
      "  ggGGggGGggGG  GGggGGggGGgg  ",
      "  ooOOooOOooOO  OOooOOooOOoo  ",
      "", "",
      "  yyYYyyYYyyYY  YYyyYYyyYYyy  ",
      "  bbBBbbBBbbBB  BBbbBBbbBBbb  ",
      "  ggGGggGGggGG  GGggGGggGGgg  ",
      "  ooOOooOOooOO  OOooOOooOOoo  ",
      "", "",
      "  yyYYyyYYyyYY  YYyyYYyyYYyy  ",
      "  bbBBbbBBbbBB  BBbbBBbbBBbb  ",
      "  ggGGggGGggGG  GGggGGggGGgg  ",
      "  ooOOooOOooOO  OOooOOooOOoo  "
    ]
  },

  {
    colors: Colors.vintage,
    bricks: [
      "", "", "",
      "   AAaaAAaaAAaaAAaaAAaaAAaa   ",
      "    BBbbBBbbBBbbBBbbBBbbBB    ",
      "     CCccCCccCCccCCccCCcc     ",
      "      DDddDDddDDddDDddDD      ",
      "       EEeeEEeeEEeeEEee       ",
      "        FFffFFffFFffFF        ",
      "         GGggGGggGGgg         ",
      "          HHhhHHhhHH          ",
      "           IIiiIIii           ",
      "            JJjjJJ            ",
      "             KKkk             ",
      "              LL              "
    ]
  },

  {
    colors: Colors.vintage,
    bricks: [
      "", "",
      "  aabbccddeeffggFFEEDDCCBBAA  ",
      "   aabbccddeeffFFEEDDCCBBAA   ",
      "    aabbccddeeffEEDDCCBBAA    ",
      "     aabbccddeeEEDDCCBBAA     ",
      "      aabbccddeeDDCCBBAA      ",
      "       aabbccddDDCCBBAA       ",
      "        aabbccddCCBBAA        ",
      "         aabbccCCBBAA         ",
      "          aabbccBBAA          ",
      "      hh   aabbCCAA   hh      ",
      "     hhHH   aabbAA   hhHH     ",
      "    hhiiHH   aaAA   hhiiHH    ",
      "   hhiiIIHH   aa   hhiiIIHH   ",
      "  hhiijjIIHH      hhiijjIIHH  ",
      " hhiijjJJIIHH    hhiijjJJIIHH "
    ]
  },

  {
    colors: Colors.pastel,
    bricks: [
      "                              ",
      "                              ",
      "  bbBBbbBBbbBBbbBBbbBBbbBBbb  ",
      "  ooggGGggGGggGGggGGggGGggoo  ",
      "  ooggGGggGGggGGggGGggGGggoo  ",
      "  ooppPPppPPppPPppPPppPPppoo  ",
      "  ooppPPppPPppBBppPPppPPppoo  ",
      "  ooppPPppPPbbBBbbPPppPPppoo  ",
      "  ooppPPppBBbbOObbBBppPPppoo  ",
      "  ooppPPbbBBooOOooBBbbPPppoo  ",
      "  ooppBBbbOOooYYooOObbBBppoo  ",
      "  oobbBBOOooyyYYyyooOOBBbboo  ",
      "  oobbooOOYYyyYYyyYYOOoobboo  ",
      "  ooOOooyyYYyyYYyyYYyyooOOoo  ",
      "  ooOOYYyyYYyyYYyyYYyyYYOOoo  ",
      "  ooyyYYyyYYyyYYyyYYyyYYyyoo  ",
      "  ooyyYYyyYYyyYYyyYYyyYYyyoo  ",
      "  bbBBbbBBbbBBbbBBbbBBbbBBbb  ",
    ]
  },

  {
    colors: {
      b: '#111111', // black,
      w: '#EEEEEE', // white,
      c: '#EC7150', // cherry,
      s: '#B33A2F' // shadow,
    },
    bricks: [
      "",
      "       bBb                    ",
      "      BcCcB                   ",
      "     bCwCcsb  b               ",
      "     bCcCcsb b                ",
      "      BcCsB B                 ",
      "    BbBsSsBbB       bBb       ",
      "   bcCcbBbcCcb     BcCcB      ",
      "  bcwcCsbcwcCsb   bCwCcsb  b  ",
      "  bcCcCsbcCcCsb   bCcCcsb b   ",
      "  bcCcsSbcCcsSb    BcCsB B    ",
      "   bsSsb bsSsb   BbBsSsBbB    ",
      "    bBb   bBb   bcCcbBbcCcb   ",
      "               bcwcCsbcwcCsb  ",
      "               bcCcCsbcCcCsb  ",
      "               bcCcsSbcCcsSb  ",
      "                bsSsb bsSsb   ",
      "                 bBb   bBb    ",
      "                              ",
      "                              ",
      "                              ",
      "                              ",
    ]
  },

  {
    colors: {
      r: '#D80000', // red
      b: '#706800', // brown
      o: '#F8AB00', // orange
      f: '#F83800', // fire
      w: '#FFFFFF', // white
      e: '#FFE0A8' // beige
    },

    bricks: [
      "",
      "    rRrRr                     ",
      "   RrRrRrRrR                  ",
      "   BbBoObo                    ",
      "  boboOoboOo       F    f   f ",
      "  bobBoOoboOo     f e         ",
      "  bBoOoObBbB       F  f     e ",
      "    oOoOoOo        Ff      E  ",
      "   bBrbBb        E  f fF F  f ",
      "  bBbrbBrbBb       FfFfFf  F  ",
      " bBbBrRrRbBbB     fFeFeFfFf   ",
      " oObrorRorboO    FfEeEeEfF    ",
      " oOorRrRrRoOo    FeEeWwEeFf   ",
      " oOrRrRrRrRoO   fFeFwWfEeFf   ",
      "   rRr  RrR     fFeFwWfEeFf   ",
      "  bBb    bBb    fFeEwWeEeFf   ",
      " bBbB    bBbB   fFfEeEeEfF    ",
      "                 FfFfFfFfF    ",
      "                   FfFfF      "
    ]
  }


];







var Gift = function (src, spos) {
  this.src = src;
  this.spos = spos;
   var boni=10;
  var bonuses=[
function(board){
 
  console.log(board.paddle.frame.size.width);
board.paddle.frame.size.width+=boni;
if(board.paddle.frame.origin.x-boni >=0)
 board.paddle.frame.origin.x-=10
},
function(board){
 
  console.log(board.paddle.frame.size.width);
board.paddle.frame.size.width+=boni;
if(board.paddle.frame.origin.x-boni >=0)
 board.paddle.frame.origin.x-=10
}
,
function(board){
 
  console.log(board.paddle.frame.size.width);
board.paddle.frame.size.width-=boni;

}
,
function(board){
if(board.ball.dx<4)
{
  board.ball.dx*=2;
  board.ball.dy*=2;
}
}
,
function(board){
if(board.ball.dx>1)
{
  board.ball.dx/=2;
  board.ball.dy/=2;
}
}
,
function(board){
board.lives++;
}


]
  this.draw = function (ctx) {
    var img = new Image();
    img.src = src;
    ctx.drawImage(img, spos.x, spos.y++);
  }
  this.bonusfun=bonuses[Math.floor(Math.random() * bonuses.length)];
  this.hascollided=function(rect){
      var interval=50;
      if(spos.y+interval>=rect.origin.y){
          if(spos.x>=rect.origin.x && spos.x<=rect.origin.x+rect.size.width )
            return true
          if(spos.x+interval>=rect.origin.x && spos.x+interval<=rect.origin.x+rect.size.width )
             return true


      }
return false;

  }

}
gifts = ["img/heart.png"];

function randomGift(spos) {
  return new Gift(gifts[Math.floor(Math.random() * gifts.length)], spos);
}
Paddles={
  green:"img/greenpaddle.png",
  orange:"img/orangepaddle.png",
  blue:"img/bluepaddle.png",
}
Balls={
  green:"img/greenball.png",
  orange:"img/orangeball.png",
  blue:"img/blueball.png",
}
Badges={
  slug:"img/badges/slug.png",
  thug:"img/badges/thug.png",
  twox:"img/badges/2xspeed.png",
  complete50:"img/badges/50%.png",
  complete100:"img/badges/100%.png",
  bestscore:"img/badges/bestscore.png",
  bigball:"img/badges/bigball.png",
  first:"img/badges/first.png",
  skip:"img/badges/skiplevel.png"
}
var Badge=function(){
  
}
Defaults = {
  sounds: {
    brick: 'sound/brick.mp3',
    paddle: 'soundpaddle.mp3',
    go: 'sound/go.mp3',
    levelup: 'sound/levelup.mp3',
    loselife: 'sound/loselife.mp3',
    gameover: 'sound/gameover.mp3'
  },
  color: {
    background: 'rgba(200, 200, 200, 0.5)',
    foreground: 'green',
    border: '#222',
    ball: Balls.green,
    paddle: Paddles.green,
    score: "#EFD279",
    highscore: "#AFD775"
  }
}

function highScoreBadge(score) {
  game.player.addBadge(Badges.bestscore);

}

function saveHighScore(score) {
  var highscore = localStorage.getItem("highscore");
    if (score > highscore) {
      localStorage.setItem("highscore", score);
    }
}
function getHighScore() {
  var score = parseInt(localStorage.highscore);
  return score;
}

function checkHighScore(score) {
  var highScore = getHighScore();
  if (score > highScore || highScore === undefined) {
    saveHighScore(score);
    highScoreBadge(score);
  }
}

function outOflives(lives) {
  return (lives < 0);
}

function checkThugLife (game){

  if (game.player.lives == 3){
    game.player.addBadge(Badges.thug);
  }
}

function checkSlug (game)
{
  if(game.player.currentLevel == 0)
    game.player.addBadge(Badges.slug);

}

function calcBricksCount(bricks) {
  var count = 0
  for (var c = 0; c < bricks.length; c++) {
    var b = bricks[c];
    if (!b.unbreakable)
      count++;
  }
  return count;
}

function calcBricksHit(bricks) {
  var count = 0
  for (var c = 0; c < bricks.length; c++) {
    var b = bricks[c];
    if (b.hit)
      count++;
  }
  return count;
}

function win(bricks) {
  return (calcBricksCount(bricks) == calcBricksHit(bricks))
}