    let hamburgerMenu = document.getElementById("bar");
    let menu = document.getElementById('menu');
    let hamburgerClick = true
    let tog = "none";

    window.addEventListener("resize", function() {
        console.log("change")

        if (window.innerWidth >= 901) {
            menu.style.display = "flex";
            tog = "none";
        } else {
            menu.style.display = tog;
        }

    });

    hamburgerMenu.addEventListener("click", function() {
        hamburgerClick = true;
    // });

    // window.addEventListener("click", function() {

        if(hamburgerClick) {

            console.log("click");

            switch (tog) {
                default: tog = "block"; break;
    
                case("block"): tog = "none"; break;
            }
    
            menu.style.display = tog;

            hamburgerClick = false;
        }else{
            tog = "none";
            menu.style.display = tog;
        }
        
    });