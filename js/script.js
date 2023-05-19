var selectedRow = null /* global veriable*/

                        /* main fuction*/
function onFormSubmit(){
  if (validate()){
    var formData = readFormdata();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
    }

}
                        /* data getting methode from input*/
function readFormdata(){
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["empcode"] = document.getElementById("empcode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    formData["email"] = document.getElementById("email").value;
    formData["birthdate"] = document.getElementById("birthdate").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["userphoto"] = document.getElementById("userphoto").value;
    //formData["position"] = document.getElementById("position").value;//
    return formData;
}
                        /* data inserting function*/
function insertNewRecord(data) {
    var table = document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empcode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.birthdate;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.gender;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.userphoto;
   /* cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.position; */
    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a onclick="onEdit(this)">Edit</a>   
                      <a onclick="onDelete(this)">Delete</a>`;
}
                        /* data reset function*/
function resetForm(){ 

    document.getElementById("fullname").value = "";
    document.getElementById("empcode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("userphoto").value = "";
    /*document.getElementById("position").value = "";*/
    selectedRow = null;
}
                        /*function fro editing inserted data */
function onEdit(td){

    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("birthdate").value = selectedRow.cells[5].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[6].innerHTML;
    document.getElementById("userphoto").value = selectedRow.cells[7].innerHTML;
   /* document.getElementById("position").value = selectedRow.cells[8].innerHTML;*/
}
                        /* editing data update fuction */
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.empcode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.birthdate;
    selectedRow.cells[6].innerHTML = formData.gender;
    selectedRow.cells[7].innerHTML = formData.userphoto;
   /* selectedRow.cells[8].innerHTML = formData.position;*/
}
                        /* Function for deleting any inserted or updated data*/
function onDelete(td){
    if (confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        resetform();
    }

    
}
                        /* function for validation*/
function validate(){
    isValid = true;
    if (document.getElementById("fullname").value == ""){
        isValid = false ;
        document.getElementById("fullnameValidationError").classList.remove("hide");

    }
    else {
        isValid = true;
        if (!document.getElementById("fullnameValidationError").classList.contains("hide"))
             document.getElementById("fullnameValidationError").classList.add("hide");
    }
    return isValid;
}
