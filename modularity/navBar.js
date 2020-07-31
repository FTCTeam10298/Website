    let tog = "none";
    function showMenu() {

        let menu = document.getElementById('menu');

        console.log("click");

        switch (tog) {
            default: tog = "block"; break;

            case("block"): tog = "none"; break;
        }

        menu.style.display = tog;
    };


    window.addEventListener("resize", function() {
        console.log("change")

        if (window.innerWidth >= 901) {
            menu.style.display = "block";
            tog = "none";
        } else {
            menu.style.display = tog;
        }

    });