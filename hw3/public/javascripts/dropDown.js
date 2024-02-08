$("a").click(function(event){
    document.getElementById("dropdownButton").innerHTML = event.target.innerHTML;
});