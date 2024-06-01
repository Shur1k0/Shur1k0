function dropMenu() {
    document.getElementById("dropDown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropButton')){

        var dropdowns = document.getElementsByClassName("dropElements");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}