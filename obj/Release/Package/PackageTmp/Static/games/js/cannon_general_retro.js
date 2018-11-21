	
		var screenX = 50;
		var screenY = 30;
		
		// setup target
		var targetDefaultRadius;
		var targetRadius;
		var targetHeight;
		var centerlize;
		var distractor = true;
		
		// setup hit mark
		var hitSpotY;
		var hitSpotSize;
		var hitSpotColor = "green";
		var hitX;
		
		// setup cannon
		var cannonX;
		var cannonHalfWidth;
		var cannonHeight;		
		var CANNON_COLOR = 'white';
		var angleBoundry = 75;
		var CANNON_ACCURACY;
		var NEEDED_ACCURACY = 10;	
		
		// level setup
		var AFTER_LEVEL_PLAY_LEVEL = -1;  // determines if the next level is a game level. -1 = continue toturial
		var ARROW_IS_NEXT_ROUND = false;
		
		function calcSizes() {

			targetDefaultRadius = Math.min(screenX/10,screenY/10);
			cannonX = screenX / 2;
			targetHeight = screenY / 5			
			centerlize = screenX/7;
			cannonHalfWidth = screenX/45;
			cannonHeight = screenY/2;					
			targetRadius = Math.floor(targetRadius);
			hitSpotSize = targetRadius/2;
			hitX = screenX;		
			CANNON_ACCURACY = 30;
			targetRadius = targetDefaultRadius;			
			CANNON_COLOR = "white";
			
		}
		
		function putDistractor(x,y,r) {
			putSmiley(x,y,r,Math.floor(Math.random()*3));
		}
		
		function restartCannon() {

			ctx.line(-cannonHalfWidth - 10 , -cannonHeight  , cannonHalfWidth * 2 , cannonHeight - 5 );
			
		}
		
		function cannonShift(newAngel) {

			if (!gameStart) { gameStart = true;
								StartNewGame();
								return; }	
								
			if (ARROW_IS_NEXT_ROUND) {
				level = level+1;
				newRound();
			}								
								
			if (Math.abs(newAngel) > angleBoundry) {
				// play out of bounds sound
				stuck.play();
			} else {
			
				ctx.clearRect(-cannonHeight*2 , 0 , cannonHeight*4, -cannonHeight - 10);
				cannonAngle = newAngel;

				ctx.rotate(cannonAngle * Math.PI / 180);
				restartCannon();
				ctx.restore();
				
				ctx.rotate(-cannonAngle * Math.PI / 180);
			}		

			hideShame();
		}

		function hideShame() {
			context.beginPath();
			context.fillStyle = BG_COLOR;
			context.fillRect(-cannonHeight*2 , 0 , cannonHeight*4, cannonHeight);	
		}


		function hitmark(cannonAngle) { 
			var hitSpotY = targetHeight;

			// delete previous
			context.beginPath();
			context.arc(hitX, -windowHeight + hitSpotY, hitSpotSize*1.5, 0, 2 * Math.PI, false);
			context.fillStyle = "black";
			context.fill();	
			
			// add new
			hitX = Math.tan(-cannonAngle * Math.PI / 180) * (-windowHeight + hitSpotY);
		   context.strokeStyle = hitSpotColor;
		   context.lineWidth = hitSpotSize / 4;
			
		  context.beginPath();
		  context.moveTo(hitX - hitSpotSize, -windowHeight + hitSpotY - hitSpotSize);
		  context.lineTo(hitX + hitSpotSize, -windowHeight + hitSpotY + hitSpotSize);
		  context.stroke();			
		  
		  context.beginPath();
		  context.moveTo(hitX - hitSpotSize, -windowHeight + hitSpotY + hitSpotSize);
		  context.lineTo(hitX + hitSpotSize, -windowHeight + hitSpotY - hitSpotSize);
		  context.stroke();				  
			
			
		}

		window.addEventListener('keydown', function(e) { 
		
			if (!gameStart) { spaceBar();
								return; }				
		
			if (MAX_LEVEL < level) {
				window.location = "cannon_s.html";
			}		
		
			switch (e.keyCode) {
				case 39:
					cannonShift(cannonAngle+CANNON_ACCURACY);
					break;
				case 37:
					cannonShift(cannonAngle-CANNON_ACCURACY);
					break;
				case 38:
					fire();
					break;
				case 32:
					spaceBar();	
					break;
			}

		});		

		function goLeft() {
			cannonShift(cannonAngle-CANNON_ACCURACY);
		}
		
		function goRight() {
			cannonShift(cannonAngle+CANNON_ACCURACY);
		}		
		
		function goDown() {
			fire();
		}
		
		function goUp() {
			fire();
		}		

		