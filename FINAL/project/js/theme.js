(function() {
  window.addEventListener('load', init);                  
  let tmp = document.querySelector("html");
  function init() {
      document.getElementById("changeTheme").addEventListener("click", changeTheme);
      if(window.localStorage) {
          if (localStorage.getItem('data-theme') == "dark") {
              tmp.setAttribute("data-theme","dark");
          }
          else if (localStorage.getItem('data-theme') == "light") {
              tmp.setAttribute("data-theme","light");
          }
      }
    
  }
  
  function setDarkTheme() {
      if(window.localStorage) {
        document.querySelector("html").setAttribute("data-theme","dark");
          localStorage.setItem('data-theme', 'dark');
      }
      
  }
  function setLightTheme() {
      if(window.localStorage) {
        document.querySelector("html").setAttribute("data-theme", "light");
          localStorage.setItem('data-theme', 'light');
      }
  }
  let check = 1;
  function changeTheme() {
    if (check % 2 == 0){
      setLightTheme();
      check++;

    }
    else {
      setDarkTheme();
      check++;

    }
  }

})();