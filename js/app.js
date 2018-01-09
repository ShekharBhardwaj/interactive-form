//on window load focus on first input box
window.onload = () => {
 $("#name").focus();
}

const colorList = $('#color option');

function isdiaplay(arg){
	for (let i = 0 ; i < colorList.length; i+=1){
						if(!($(colorList[i]).text().toLowerCase().includes(arg))){
									console.log($(colorList[i]).text().toLowerCase());
							 		$(colorList[i]).hide();
							} else {
									$(colorList[i]).show();
							}	
				}
}

$("#title").on("change", function () {
	let selectedVal = $(this).find(':selected').text();
	if(selectedVal.toLowerCase() === 'other'){
			console.log('other');
			$('<input type="text" id="other-title"  placeholder="Your Job Role" name="otherinput">').insertAfter('#title');
			$("#other-title").focus();
		 }
});

$("#design").on("change", function () {
    let selectedVal = $(this).find(':selected').val();
		console.log();
		switch (selectedVal) {
  		case 'js puns':
    		isdiaplay('js puns');
				break;
			case 'heart js':
				isdiaplay('js shirt');
				break;
			default:
    		isdiaplay('shirt');
			}

});