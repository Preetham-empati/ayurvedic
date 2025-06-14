var el = x => document.getElementById(x);

function showPicker(inputId) { el('file-input').click(); }

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
}


function analyze() {
    var uploadFiles = el('file-input').files;
    if (uploadFiles.length != 1) alert('Please select an image to analyze!');
    el('analyze-button').innerHTML = 'Analyzing...';
}


function final(inp) {
  if(inp.id == "yes"){
    $("#finalBlockYes").addClass("visible");
  } else{
    $("#finalBlockNo").addClass("visible");
  }

  $(".yes-no-button").css("pointer-events","none");
}