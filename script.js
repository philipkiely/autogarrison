var forbidden = ["is", "are", "was", "were"];

function lower(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

document.getElementById("grade").addEventListener("click", function() {
  var out = [];
  var essay = document.getElementById("page").value;
  var sentences = essay.split(/[.!?]+/);
  for (i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].replace(/[|&;$%@"<>():'=`–\\_#^*+,]/g, "");
    var words = sentences[i].split(" ");
    var words_so_far = []
    for (j = 0; j < words.length; j++) {
      if (forbidden.indexOf(words[j]) > -1) {
        out.push("<span style=\"color: red;\">");
        out.push(words[j]);
        out.push("</span> ");
      }//if forbidden
      else if (words_so_far.indexOf(words[j]) > -1) {
        out.push("<span style=\"color: pink;\">");
        out.push(words[j]);
        out.push("</span> ");
      }//if repeated
      else {
        out.push(words[j]);
        out.push(" ");
      }//else
      words_so_far.push(words[j]);
      words_so_far.push(lower(words[j]));
      if (j == words.length - 1) {
        out.pop()
      }//if end, removes extra space
    }// for word in sentence
    out.push(". ")
    if (i == sentences.length - 1) {
      out.pop()
    }//if end, removes extra period
    out.push("</span> "); //just in case
  }//for sentence in essay
  var out_string = out.join("")
  document.getElementById("output").innerHTML = out_string;
  document.getElementById("page").classList.add("hidden");
  document.getElementById("output").classList.remove("hidden");
  document.getElementById("grade").classList.add("hidden");
});
