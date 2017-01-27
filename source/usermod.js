function toggleGender(gender){
    if(gender=="male"){
        document.getElementById("male").className = "usermod-gender";
        document.getElementById("female").className = "";
        document.getElementById("male").parentElement.setAttribute("value","male");
        document.getElementById("usermod-avatar").style.backgroundImage = "url(img/male.jpg)";
    }
    else{
        document.getElementById("male").className = "";
        document.getElementById("female").className = "usermod-gender";
        document.getElementById("male").parentElement.setAttribute("value","female");
        document.getElementById("usermod-avatar").style.backgroundImage = "url(img/female.jpg)";
    }
}

function saveUserMod(){
    var name = document.getElementById("usermod-name").value;
    var gender = document.getElementById("usermod-gender").getAttribute("value");
    if(name){
        player = new Player(name,gender, slider.currentPaddle(), slider.currentBall());
        savePlayer(player);
        location.reload();
    }else
        alert("Please enter your name!");
}