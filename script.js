function showTab(tabName) {

let tabs = document.querySelectorAll(".tab");

tabs.forEach(function(tab){
tab.style.display = "none";
});

document.getElementById(tabName).style.display = "block";

}