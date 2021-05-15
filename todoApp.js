console.log('Testing....');


//grabbing the input-field,button and list

let input = document.getElementById('todo-input');
let button = document.getElementById('add-btn');
let ul = document.getElementById('unordered-list');
let msg = document.getElementById('msg');


//Adding items in the list using click event..
button.addEventListener('click',(e)=>{
    let local = localStorage.getItem('items'); //getting data from localstroage having name is items.
    if(local == null){
        newArr = [];  //if items is not present set a new Array.
    }else{
        newArr = JSON.parse(localStorage.getItem('items')); //if items present parse the string into JSON format.
    }
    newArr.push(input.value);  //Append the todo into array
    localStorage.setItem('items',JSON.stringify(newArr));
    input.value = "";

    showItems(); //callback to showItems after adding new item
    e.preventDefault();
});


//displaying items into the screen.
showItems();
function showItems(){
    let local = localStorage.getItem('items');
    if(local == null){
        newArr = [];
    }else{
        newArr = JSON.parse(localStorage.getItem('items'));
    }
    let output = ``;
    newArr.forEach((element,index) => {
        output += `<li class="list-group-item">${element}<span onclick = "deleteItem(${index})"; class="delete"><i class="fas fa-trash"></i></span></li>`;
    });
    ul.innerHTML = output;
}


//deleting the item

function deleteItem(index){
    newArr = JSON.parse(localStorage.getItem('items'));
    newArr.splice(index,1); //delete the item into an array

    
    msg.innerHTML = `<p style="color:red;">Item Deleted...</p>`;
    

    //updating the original array after deletion
    localStorage.setItem('items',JSON.stringify(newArr));
    showItems();  
    
    
}

setTimeout(()=>{
    msg.style.visibility = "hidden";
},6000);
    

