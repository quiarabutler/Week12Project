var selectedRow = null;

// Alert Message 
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
}


// Add names 

document.querySelector("#student-form").addEventListener("click", (e) =>{
    e.preventDefault();


    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const grade = document.querySelector("#grade").value;

    if(firstName == "" || lastName == "" || grade == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list")
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${grade}</td>
            
             <td>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added", "success");
        }
       

        
    }
});


 

 // Delete Button Functions
document.querySelector("#student-list").addEventListener("click", (e) =>{
 target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});