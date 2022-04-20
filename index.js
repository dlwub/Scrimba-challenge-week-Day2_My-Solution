const recycleBtn = document.getElementById("recycle-btn")
recycleBtn.addEventListener("click", recycle)
const recycleSelect = document.getElementById("recycle-select")
const recycleBin = document.getElementById("recycle-bin")
const infoParagraph = document.getElementById("info-paragraph")

let itemCount = 0
recycleSelect.selectedIndex = 0
function recycle(){
    if(recycleSelect.value !==""){ 
         let item = recycleSelect.value             
         recycleBin.textContent += item         
         itemCount++               
    }
    if(itemCount==3){
        infoParagraph.innerHTML = `Recyle bin is full. <button id="empty-recyle-bin" >Empty</button>`
        document.getElementById("empty-recyle-bin").addEventListener('click', emptyBin)
        
        function emptyBin(){
            recycleBin.textContent = ""
            itemCount = 0  
            infoParagraph.innerHTML = "Recycled items will appear above ⬆️"  
            recycleSelect.selectedIndex = 0               
        }
    }
    
}



recycle()

// Task: Wire up the <select> tag and recycle button so that an emoji of the selected item appears in the DOM each time the recycle button is pressed.

// stretch goal 1️⃣ Add an item limit to indicate when the recycle bin is full

// stretch goal 2️⃣: Add the option to empty the bin.

// stretch goal 3️⃣: Animate adding the items to the bin.