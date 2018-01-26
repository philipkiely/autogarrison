var forbidden = ["is", "are", "was", "were"];


document.getElementById("grade").addEventListener("click", function() {
  var essay = document.getElementById("page").innerHTML;
  var sentences = essay.split("."); //add regex .!?
  for(i = 0; i < sentences.length; i++) {
    var words = sentences[i].split(" "); //add regex all delims
    for(j = 0; j < words.length) {
      if (word[i] in forbidden) {
        //highlight the word
      }//if forbidden
    }// for word in sentence
  }//for sentence in essay
});
