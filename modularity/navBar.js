    let tog = "none";
    let hamburgerClick = false;

    function showMenu() {
        hamburgerClick = true
        console.log("Hamburger click");

        let menu = document.getElementById('menu');

        switch (tog) {
            default: tog = "block"; break;

            case("block"): tog = "none"; break;
        }

        menu.style.display = tog;
    };

    document.addEventListener("click", function() {
        console.log("click");
        
        if(innerWidth <= 1200) {
            if(!hamburgerClick) {
                tog = "none";
                menu.style.display = tog;
            }
            hamburgerClick = false;
        }
    });

    window.addEventListener("resize", function() {
        console.log("change")

        if (window.innerWidth >= 1201) {
            menu.style.display = "flex";
            tog = "none";
        } else {
            menu.style.display = tog;
        }

    });