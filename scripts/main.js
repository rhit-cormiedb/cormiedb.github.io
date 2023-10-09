let scrolled = false;
let toTop = document.querySelector("#scrollToTop");

addEventListener("scroll", (event) => {
    let scroll=window.scrollY;

    if(scroll>10&&!scrolled){
        scrolled=true;
        toTop.classList.add("shown");
    }
    else if(scroll<10&&scrolled){
        scrolled=false;
        console.log(scrolled);
        toTop.classList.remove("shown");
    }
});

