

$(document).ready(function(){
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
				$("#rollTable").append("<tr><th>Total</th><th>" + totalRoll + "</th></tr>");
			}
			
			display_roll(diceRoll, i, end);
		};
	});
});

function display_roll(diceRoll, iter, end) {
	
	setTimeout(function(){ 
		$('#roll_amount').hide().html("<i><u>Roll #" + iter + "</u></i><br>" + diceRoll).fadeIn();

	}, (iter * 2000));

	if (end == true) {
		setTimeout(function(){
			$('#loading').remove();
			$("#rollResults").show();
		}, ((1+iter) * 2000));
		
	}
	
}