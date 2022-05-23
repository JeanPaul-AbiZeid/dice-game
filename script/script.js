var random_number_1 = Math.floor(Math.random() * 6);    //generating numbers between 0 and 5
var random_number_2 = Math.floor(Math.random() * 6);

//array to select dice image
const image_source = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png" ]

var player1_image = image_source[random_number_1];
var player2_image = image_source[random_number_2];

var img1 = document.getElementsByClassName("img1")
var img2 = document.getElementsByClassName("img2")

function player1() {
    img1[0].src = player1_image;
}

function player2() {
    img2[0].src = player2_image;
}

player1()
player2()