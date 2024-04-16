var acc = document.getElementsByClassName("service__button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;

    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        var otherPanel = acc[j].nextElementSibling;
        otherPanel.style.maxHeight = null;
        acc[j].style.borderColor = "";
        if (acc[j].nextElementSibling) {
          acc[j].nextElementSibling.style.borderColor = "";
        }
      }
    }

    this.classList.toggle("active");
    if (panel) {
      panel.style.borderColor = this.classList.contains("active") ? "red" : ""; 
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
