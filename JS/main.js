let navFlag = false;

document.getElementById('burger').addEventListener('click', ()=>{
   if(!navFlag) {
        document.getElementById('nav-hidden').classList.remove("d-none")
       return navFlag = true;
   }
    if(navFlag){
         document.getElementById('nav-hidden').classList.add("d-none") 
        return navFlag = false;
    }
})