var el = x => document.getElementById(x);

function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
  $(".analyze-btn").addClass("visible");
}

function analyze() {
  el("analyze-button").innerHTML = "Analyzing...";
  el("imageForm").submit();
  
}

function askUser() {
    $(".form").css("display","none");
    $(".displayinfo").addClass("visible");
}

function final(inp) {
  if(inp.id == "yes"){
    $("#finalBlockYes").addClass("visible");
  } else{
    $("#finalBlockNo").addClass("visible");
  }

  $(".yes-no-button").css("pointer-events","none");
}
