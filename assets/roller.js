
//Keep track of timeouts so we can get rid of them if user skips to results
var timeouts = [];

function clear_timeouts() {
	//Get rid of all timeouts if they skip to the results
	$.each(timeouts, function(){
		window.clearTimeout(this);
	});

}

$(document).ready(function(){
	$(document).on('click', '#skip', function(){
		$('#loading').remove();
		$("#rollResults").show();
		clear_timeouts();
	});

	$('#roller').click(function(){
		$("#rollTable").empty();
		$("#rollResults").hide();
		var numDice = $('#numDice').val();

		$("#rollTable").append(
		  "<tr>" + 
          "<th>Roll #</th>" + 
          "<th>Amount</th>" + 
          "</tr>"
        );

		var loading_str = 
		'<div id="loading"> ' +
		'<h2 style="display:none;" id="roll_amount"></h2>' +
		'<button type="button" id="skip">Skip to Results</button>' + 
		'</div>';
				
		$('body').append(loading_str);

		totalRoll = 0;
		for (i = 1; i <= numDice; i++){
			var diceRoll = Math.floor((Math.random() * 6) + 1);
			$("#rollTable").append('<tr><td>' + i + '</td><td>' + diceRoll + '</td></tr>')
			totalRoll += diceRoll;
			end = false;
			if (i == numDice) {
				end = true;
				$("#rollTable").append(
					"<tr><th>Total</th><th>" + totalRoll + "</th></tr>" + 
					"<tr><th>Average</th><th>" + (totalRoll/numDice).toFixed(2) + "</th></tr>"
					);
			}
			
			display_roll(diceRoll, i, end);
		};
	});
});


//this function displays the result of a roll one at a time for each roll
function display_roll(diceRoll, iter, end) {
	
	timeouts.push(setTimeout(function(){ 
		$('#roll_amount').hide().html("<i><u>Roll #" + iter + "</u></i><br>" + diceRoll).fadeIn();

	}, (iter * 2000)));

	if (end == true) {
		timeouts.push(setTimeout(function(){
			$('#loading').remove();
			$("#rollResults").show();
		}, ((1+iter) * 2000)));
		
	}
	
}