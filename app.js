// your code here!
$('form').submit(function(event)
{
	event.preventDefault();
	var inputText = $(this).find('#user-text');

	$('.hidden').removeClass('hidden');
var arrayTo = getTokens(inputText.val());
var uniqueA = [];
var found = false;
var sumOfChar =0;
	for(var i =0; i< arrayTo.length; ++i)
	{	found = false;
		
		for(var i2 =0;i2<uniqueA.length; ++i2)
		{
			if(arrayTo[i] == uniqueA[i2])
			{
				found = true;
				break;
			}
		}
		if(!found)
		uniqueA.push(arrayTo[i]);
		sumOfChar += arrayTo[i].length;
	}
	$('.js-wcount').text(arrayTo.length);
	$('.js-ucount').text(uniqueA.length);
	$('.js-wlength').text(sumOfChar/arrayTo.length +' characters');

});

function getTokens(rawString)
{
	 return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}