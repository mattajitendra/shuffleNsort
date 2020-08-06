"use strict";

const listItems = [1,2,3,4,5,6,7,8,9];

let renderList = listItems => {
    document.querySelector(".list-area ul").innerHTML='';
    for(var i=0; i<listItems.length; i++){
        var elem = document.createElement("li");
        elem.textContent=listItems[i];
        elem.classList.add("c"+listItems[i]);
        document.querySelector(".list-area ul").appendChild(elem);
     }
}
renderList(listItems);

let shuffleList = listItems => {
        for (var i = listItems.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = listItems[i];
            listItems[i] = listItems[j];
            listItems[j] = temp;
        }
        return renderList(listItems);
    }

let sortList = listItems => {
    listItems.sort((a, b) => a - b);
    return renderList(listItems);
}
