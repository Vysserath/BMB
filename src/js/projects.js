filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter__card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Отримуємо значення параметра filter з URL
function getFilterFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('filter');
  }
  
  // Застосовуємо фільтрацію відповідно до значення параметра filter
  function applyFilter() {
    var filter = getFilterFromURL();
    if (filter) {
      filterSelection(filter);
      highlightActiveButton(filter);
    }
  }
  
  // Підсвічуємо активну кнопку
  function highlightActiveButton(filter) {
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
      if (buttons[i].getAttribute("onclick").includes(filter)) {
        buttons[i].classList.add("active");
      }
    }
  }
  
  // Викликаємо функцію застосування фільтрації при завантаженні сторінки
  window.addEventListener('load', applyFilter);
  