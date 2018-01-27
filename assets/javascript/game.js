// On Page Load:
		//What Variables do we need (and set them to default values)
			//computerRandomNumber = random number between 19 & 120
				var computerRandomNumber = Math.floor(Math.random() * (120-19 + 1) + 19);
				console.log(computerRandomNumber + " must be met.");
				document.getElementById("random-number").innerHTML = computerRandomNumber;
			//array of crystal values = an array of number values (4 values, all of them will be random numbers betwen 1 & 12)
				var img = $('.crystalbox img')
				var crystalImages = [
					"assets/images/bluecrystal.png",
					"assets/images/greencrystal.png",
					"assets/images/pinkcrystal.png",
					"assets/images/yellowcrystal.png"
				]
				var arrayOfCrystalValues = []
					for (var i = 0; i < 4; i++) {
						var crystalValue = Math.floor(Math.random() * (12-1 + 1) + 1);
						arrayOfCrystalValues.push(crystalValue);
					}
					console.log(arrayOfCrystalValues);

					for (var i = 0; i < arrayOfCrystalValues.length; i++) {
						var myImg = $("<img>");
						myImg.attr("randomNum", arrayOfCrystalValues[i]); // creating the name for the number to be attributed to.
						myImg.attr("src", crystalImages[i]);
						$(".crystalbox").append(myImg);
					}
			//wins = 0
				var wins = 0;
			//losses = 0
				var losses = 0;
			//userTotalScore = 0
				var userTotalScore = 0;
		//call reset function.
			reset();
		//Call update items on the page function.
	// On Crystal click:
		$('.crystalbox img').on("click", function () {
			console.log("clicking", $(this)[0].attributes.randomNum.value);
			userTotalScore += parseInt($(this)[0].attributes.randomNum.value);
			console.log(userTotalScore + " is User's total score");
			document.getElementById("userscore").innerHTML = userTotalScore;

		//DONE: figure out what crystal they clicked and store in a variable.
		//DONE: store crystal value in variable. (crystalClickedValue)
		//DONE: add crystalClickedValue to user total score.
		// Call update items on the page function.

		//if they win / if statement (userTotalScore === computerRandomNumber)
			if (userTotalScore === computerRandomNumber) {
				wins++;
				console.log("You've won! Wins = " + wins);
				$("#wins").text("Wins: " + wins);
				reset();
			}
			//add 1 to wins
			//call reset function
			// Call update items on the page function.

		//if they lose (userTotalScore > computerRandomNumber)
			//add 1 to losses
			//call reset function
			// Call update items on the page function.
			if (userTotalScore > computerRandomNumber) {
				losses++;
				console.log("You've lost! Losses = " + losses);
				$("#losses").text("Losses: " + losses);
				reset();
			}
		})

	//update items on the page:
		//put wins variable on page
		//put losses variable on page
		//put computerRandomNumber on page
		//DONE: put userTotalScore on page.
		
	//Reset (function):
		//userTotalScore = 0
		//computerRandomNumber = new random number between 19 & 120
		//array of crystal values (new random numbers between 1 & 12)
		function reset() {
			userTotalScore = 0;
			document.getElementById("userscore").innerHTML = userTotalScore;
			console.log(userTotalScore);
			computerRandomNumber = Math.floor(Math.random() * (120-19 + 1) + 19);
			console.log("New random number = " + computerRandomNumber);
				document.getElementById("random-number").innerHTML = computerRandomNumber;
		}




