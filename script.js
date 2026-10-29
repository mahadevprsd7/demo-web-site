document.getElementById("queryForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Please fill all required fields!");
    } else {
        alert("Thank you! Your query has been submitted successfully.");
        document.getElementById("queryForm").reset();
    }
});