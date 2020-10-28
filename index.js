// function isElementOutViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
// }

// let p = document.querySelector("#project1")

let scrollingDiv = document.querySelector(".scrolling")
console.log(scrollingDiv)

let y = 0;

// scrollingDiv.onscroll = function (e) {
//     console.log(e, e.target.scrollY)
//     // console.log(
//     //     isElementOutViewport(p)
//     // )
// }

let links = document.querySelectorAll("nav button")
let page = "#home"

for (let link of links) {
    link.onclick = function (event) {
        let div = `#${event.target.innerText.replace(".", "")}`
        page = div;
        console.log(div, typeof div)
        scrollingDiv.querySelector(div).scrollIntoView({
            behavior: 'smooth'
        });
        console.log(this)
        document.querySelectorAll(".nav-bar-ul li button").forEach(eachButton => eachButton.classList.remove("active"))
        this.classList.add("active")
    }
}

window.onresize = function (event) {
    let button = [...document.querySelectorAll(".nav-bar-ul li button")].find(eachButton => eachButton.innerText.replace(".", "") == page.replace("#", ""))
    console.log(button)
    button.click()
    // window.location.reload()
}
