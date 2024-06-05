(function () {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("kont").addEventListener("click", dropMenu);

    }
    function dropMenu() {
        document.getElementById("dropDown").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (!event.target.matches('.kont')) {

            var dropdowns = document.getElementsByClassName("dropKont");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

})();