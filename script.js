function wordCount() {
	
	var sentences = document.getElementById("inputText").value;
	var numSpaces = 0;
	var numWords = 1;
	var numSentences = 0;

	for (var i=0; i<sentences.length; i++) {
	    if (sentences[i] == ' ') {
      	  numSpaces++;
    	}
	}
	for (var i=0; i<sentences.length; i++) {
	    if (sentences[i] == '.') {
      	  numSentences++;
    	} 
	}
	for (var i=0; i<sentences.length; i++) {
		
	    if (sentences[i] == ' ') {
      	  numWords++;
    	}
	}
	document.getElementById("row1").innerHTML = 'There are ' + numSpaces + ' spaces in this text.';
	document.getElementById("row2").innerHTML = 'There are ' + numWords + ' words in this text.';
	document.getElementById("row3").innerHTML = 'There are ' + numSentences + ' sentences in this text.';
	document.getElementById("row4").innerHTML = 'There are ' + (numWords/2)/numSentences + ' average words per sentence in this text.';
}