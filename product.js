//Selecting Side Navbar, Menu Icon

const sidenav = document.getElementById("sidenav")
const menuicon = document.getElementById("menuicon")
const closenav = document.getElementById("closenav")


menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})

//Product Search Functionality
const productContainer = document.getElementById("product-container")
const search = document.getElementById("search")
const productlist = productContainer.querySelectorAll("div")

    search.addEventListener("keyup",function(){
        const enteredValue = event.target.value.toUpperCase()

        for(count= 0; count<productlist.length; count=count+1)
        {
            const productname = productlist[count].querySelector("h1").textContent
            
            if(productname.toUpperCase().indexOf(enteredValue)<0)
            {
                productlist[count].style.display="none"
            }
            else{
                productlist[count].style.display="block"
            }
            
        }
    })