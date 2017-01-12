var Player=function(name,paddle,ball){
    this.badges=[];
    this.score=0;
    this.highscore;
    this.name=name||"player";
    this.lives=3;
    this.paddle=paddle||Defaults.color.paddle;
    this.ball=ball||Defaults.color.ball;
    this.addBadge=function(badge){
        this.badges.push(badge);
    }
    this.updateScore=function(score){
        this.score+=score;
    }
    this.resetScore=function(score){
        this.score=0;
    }
    this.drawBadges=function(){
        
    }
}