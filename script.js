
let wrong_guess = new Audio('wrong_guess.mp3');
let clapping_sound = new Audio('clapping_sound.wav');
let audio = new Audio('audio.mp3');

let message = document.getElementById("message");
let user_score = document.getElementById("score");
let remainingTurns = document.getElementById("remaining-turns");
let btn = document.getElementById("btn");
let reload = document.getElementById("reload");

let num = Math.floor(Math.random() * 100) + 1;
num = Number.parseInt(num);
let factor = 10;// for every turn, there are 10 score
let counter = 0;
let score = 0;
let total_turns = 10;
let total_score = 100;
let flag = false;
function checkNo() {


	let guess = document.getElementById("user_gusss");
	if (guess.value == "" || guess.value < 1 || guess.value > 100) {
		alert("enter a number (1-100)");
	}
	else {
		console.log("a");
		guess = Number.parseInt(guess.value);
		if (guess > num) {
			message.innerHTML = guess + " is bigger than my guess";
			message.style.color = "red";
			counter++;
			setTimeout(() => {
				wrong_guess.play();

			}, 500);
		}
		else if (guess < num) {
			message.innerHTML = guess + " is smaller than my guess";
			message.style.color = "red";
			counter++;
			setTimeout(() => {
				audio.pause();
			}, 500);

			setTimeout(() => {
				wrong_guess.play();

			}, 500);
			setTimeout(() => {
				audio.play();
			}, 500);
		}
		else {
			message.innerHTML = `Congrats! You guessed the number (${guess})`;
			message.style.color = "green";
			flag = true;
			btn.disabled = true;
			setTimeout(() => {
				audio.pause();
			}, 2000);
			setTimeout(() => {
				clapping_sound.play();

			}, 500);

		}
		/* 
		counter++;
		I didn't increase counter here, because
		I don't want it be incremented when someone's guess is correct
		I mean counter should only be incremented when my guess is incorrectd */

		score = total_score - (counter * factor);
		if (counter == 10 && flag == false) {
			console.log("Game over");
			//score = total_score - (counter * 10);
			user_score.style.backgroundColor = "#4a0099";
			user_score.innerHTML = "You got " + score + " out of " + total_score;
			btn.disabled = true;
		} else if ((counter <= 10 && flag)) {
			//score = total_score - (counter-1);
			user_score.style.backgroundColor = "#4a0099";
			user_score.innerHTML = "Your Score :" + score + " out of " + total_score;
		}

		remainingTurns.innerHTML = "Remaining Turns = " + (total_turns - counter);
		if (counter == 10 || flag == true) {

			reload.style.right = "55px";
			reload.style.zIndex = "2";
			reload.style.visibility = "visible";
		}

	} // end of else
	setTimeout(() => {
		audio.play();
	}, 500);
} // enf of function

// logic for gameover
function reload_gm() {
	location.reload();
}