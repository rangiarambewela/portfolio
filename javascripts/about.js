
const carouselItem = document.getElementsByClassName("carousel-item");

$(".carousel-button").click(() => {
    for (let item of carouselItem) {
        if (item.classList.contains("active")) {
            console.log(item);
            item.classList.add("d-flex");
            item.classList.add("align-items-center");
        }
        else {
            item.classList.remove("align-items-center");
            item.classList.remove("d-flex");
        }
    }
})
