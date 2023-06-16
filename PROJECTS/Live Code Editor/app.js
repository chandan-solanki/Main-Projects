
// varaible of dom manipulation
let input = document.getElementsByClassName("input");
let htmlInput = document.getElementById("html-input");
let cssInput = document.getElementById("css-input");
let jsInput = document.getElementById("js-input");
let output = document.getElementById("output");
let labelEl = document.getElementsByClassName('lbl');
let codeContainer = document.getElementsByClassName('code-container');




// for input of textarea
Array.from(input).forEach((el) => {
    el.addEventListener("keyup", () => {
        output.contentDocument.body.innerHTML = ` ${htmlInput.value}  <style> ${cssInput.value}  </style>`
        output.contentWindow.eval(jsInput.value);
    })
})



Array.from(codeContainer).forEach((el) => {
    el.addEventListener("click", (e) => {
        for (lbl of labelEl) {
            lbl.classList.remove("active");
        }
        el.childNodes[1].classList.add("active");
        console.log()
    })
})



//this is navigation links for ipad or mobiles

let navLinks = document.getElementsByClassName("nav-link");

Array.from(navLinks).forEach((navlink) => {
    navlink.addEventListener("click", (e) => {
        //for remove class of nav links
        for (link of navLinks) {
            link.classList.remove("show-nav");
        }

        navlink.classList.add("show-nav");
        let id = navlink.id;

        //for remove class of show container
        for (let code of codeContainer) {
            code.classList.remove("show");
        }

        for (let code of codeContainer) {
            if (id === "css-nav") {
                if (code.className === "css code-container") {
                    code.classList.add("show");
                }
            }
            if (id === "html-nav") {
                if (code.className === "html code-container") {
                    code.classList.add("show");
                }
            }
            if (id === "js-nav") {
                if (code.className === "js code-container") {
                    code.classList.add("show");
                }
            }
        }

    });
})

