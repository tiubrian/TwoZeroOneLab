

$(document).ready(function(){
	$('#roller').click(function(){
		var numDice = $('#numDice').val();
		
		diceRollsStr = '';
		totalRoll = 0;
		for (i = 1; i <= numDice; i++){
			var diceRoll = Math.floor((Math.random() * 6) + 1);
			totalRoll += diceRoll;
	    	diceRollsStr += '<br>Dice ' + i + ' Roll: ' + diceRoll;
		};

		$('#diceRolls').html(diceRollsStr);
		$('#totalRoll').text(totalRoll);
	});
});