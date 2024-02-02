

const frmcontainer = document.querySelector(".frm-container");
const itemText = document.querySelector("#item");
const submitbtn = document.querySelector(".submit-btn");
const editmsg = document.querySelector(".modeladdmsg");
const itemlistcontainer = document.querySelector(".itemlist-container");
const clearitembtn = document.querySelector(".clear-items");

let editflag = false;
let editid = -1;
let itemarr= [];

retrieveData();

//intialize item arr and get the data of LocalStorage 
function intialize() {
    if (localStorage.length > 0) {
        itemarr = JSON.parse(localStorage.getItem("items"));
    } else {
        itemarr = [];
    }
}

frmcontainer.addEventListener("submit", (e) => {
    e.preventDefault();

    let value = itemText.value;
    console.log({value})
    if (value !== "" && !editflag) {
        additemLocalStorage(value);
    } else if (value !== "" && editflag && editid >= 0 && editid < itemarr.length) {
        editItemLocalStorage(value, editid);
    } else {
        displayAlert("Please Enter Valid Value !", "danger");
    }

    retrieveData();
});

function additemLocalStorage(value) {
    itemarr.push({ name: value });
    localStorage.setItem("items", JSON.stringify(itemarr));
    displayAlert("Add Succssfully", "success");
    defaultvalue();
}

function editItemLocalStorage(value, id) {
    itemarr[id].name = value;
    localStorage.setItem("items", JSON.stringify(itemarr));
    defaultvalue();
    displayAlert("Edit Successfully !" , "success");
}

clearitembtn.addEventListener("click", clearItems);

function clearItems() {
    displayAlert("Remove All Items !", "danger");
    localStorage.clear("items");
    itemlistcontainer.innerHTML = "";
    itemarr.clear;
    itemarr = [];
    defaultvalue();
    retrieveData();
}

function retrieveData() {
    intialize();
    console.log(itemarr.length)
    if (itemarr.length >= 0) {
        let itemdiv = itemarr.map((el, i) => {
            return ` <div class="items">
            <p class="index">${i}</p>
            <item class="item-name">${el.name}</item>
            <div class="btn-container">
            <button value="${i}" class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            <button value="${i}" class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            </div>
            </div>
            `
        }).join("");
        itemlistcontainer.innerHTML = "";
        itemlistcontainer.innerHTML = itemdiv;
    }

    editebtnretrived();
    deletebtnretrieved();

    if (itemarr.length > 0) {
        clearitembtn.classList.add("show");
    } else {
        clearitembtn.classList.remove("show");
    }
}

function deletebtnretrieved() {

    const deletesbtns = document.querySelectorAll(".delete-btn");

    deletesbtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.value;
            itemarr.splice(id, 1);
            localStorage.setItem("items", JSON.stringify(itemarr));
            displayAlert("Remove item successfully !", "danger");
            if (itemarr.length == 0) itemarr = [];
            retrieveData();
        })
    })

}

function editebtnretrived() {
    const editbtns = document.querySelectorAll(".edit-btn");

    editbtns.forEach(btn => {
        btn.addEventListener("click", () => {
            editid = parseInt(btn.value);
            console.log({ editid })
            itemText.value = itemarr[editid].name;
            submitbtn.innerText = "Edit"
            editflag = true;
        });
    })
}

//reset all value like --> id = -1 && editflag = false
function defaultvalue() {
    editflag = false;
    editid = -1;
    submitbtn.innerText = "Submit";
    itemText.value = "";
}

//function use for allert message show using text and class --> success and danger 
function displayAlert(text, classname) {
    editmsg.innerText = text;
    editmsg.classList.add(`${classname}`);
    setTimeout(() => {
        editmsg.classList.remove(`${classname}`);
    }, 1500);
}
