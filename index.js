let addButton = document.getElementById("add-button");
let table = document.getElementById("table");

addButton.onclick = function(){
    let nameInput = document.getElementById(id="name").value;
    let dateInput = document.getElementById(id="date").value;
    let amountInput = document.getElementById(id="amount").value;

    if (nameInput != "" && dateInput != "" && amountInput != "") {
        CreateRow(nameInput, dateInput, amountInput);
    }
}

function CreateRow (_nameInput, _dateInput, _amountInput) {
    // delete button
    let buttonColumn = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"))
    deleteButton.setAttribute("class", "delBut")
    deleteButton.addEventListener("click", ()=> {DeleteButton(deleteButton.parentElement)});
    buttonColumn.appendChild(deleteButton);

    // add data
    let newRow = document.createElement("tr");

    let newData1 = document.createElement("td");
    newData1.appendChild(document.createTextNode(_nameInput));
    let newData2 = document.createElement("td");
    newData2.appendChild(document.createTextNode(_dateInput));
    let newData3 = document.createElement("td");
    newData3.appendChild(document.createTextNode(_amountInput));

    newRow.appendChild(newData1);
    newRow.appendChild(newData2);
    newRow.appendChild(newData3);
    newRow.appendChild(buttonColumn);
    table.appendChild(newRow);
}

function DeleteButton(_parent){    
    console.log(_parent);
    let parentRow = _parent.parentElement
    parentRow.remove()
}
