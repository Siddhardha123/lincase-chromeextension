
//declartions
let myleads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl  = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const savebtn = document.getElementById("save-btn")

const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
console.log(leadsfromlocalstorage)
if(leadsfromlocalstorage)
   {
       myleads  = leadsfromlocalstorage 
       render(myleads)
   }  
//render function
function render(leads)
{
  let listitems = ""
  for(let i=0;i<leads.length;i+=1)
   {   
      listitems +=  "<li><a href='"+ leads[i] +"' target= _blank>"+leads[i]+"</a><li>"
   }
   ulEl.innerHTML = listitems
} 
//save button function
savebtn.addEventListener("click",function(){ 
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         
         myleads.push(tabs[0].url)
         localStorage.setItem("myleads",JSON.stringify(myleads))
         render(myleads)
   })
  

})
//delete button function
deletebtn.addEventListener("dblclick",function(){
        myleads = []
        localStorage.clear()
        render(myleads)

})
//input button function
inputbtn.addEventListener("click",function(){
    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
})

