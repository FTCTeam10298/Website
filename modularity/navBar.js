    let tog = "flex"
    let menu = document.getElementById('menu');
    let bar = document.getElementById("bar");

    function pullDom() {
        menu = document.getElementById('menu');
        bar = document.getElementById("bar");
        // let bar = document.querySelector('my-element');
    }

    while (menu == null || bar == null) {
        pullDom // try again in 300 milliseconds
    }


    console.log(bar)

    bar.addEventListener("click", showMenu);

    function showMenu() {
        console.log("click")
        switch (tog) {
            case("block"): tog = "none"; break;

            default: tog = "block"; break;
        }

        menu.style.display = tog;

    };

    // window.addEventListener("resize", function() {
    //     console.log("change")

    //     if (window.innerWidth >= 901) {
    //         menu.style.display = "flex";
    //         tog = "none";
    //     } else {
    //         menu.style.display = tog;
    //     }

    // });
