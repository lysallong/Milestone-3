//This one is for the index.html or our address page
const inputAddress = document.getElementById("address");
const inputButton = document.getElementById("submit");
inputButton.onclick = function(){
    const address = inputAddress.value;
    console.log(address);

    if(address){
        localStorage.setItem("address", address);
        location.reload();
    }

    function changeImage() {
        alert("testing");
        document.getElementById("categories").addAttribute("hidden");
        document.getElementById("categories2").removeAttribute("hidden");
    }

    function changeImage2() {

        document.getElementById("categories2").addAttribute("hidden");
        document.getElementById("categories").removeAttribute("hidden");
    }
}
