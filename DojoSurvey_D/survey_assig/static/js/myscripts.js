function validateForm() {
    // Get form elements
    var name = document.forms["myForm"]["First_name"].value;
    var gender = document.forms["myForm"]["Gender"].value;
    var location = document.forms["myForm"]["Dojo_Location"].value;
    var python = document.forms["myForm"]["Python"].checked;
    var cSharp = document.forms["myForm"]["CCharp"].checked;
    var java = document.forms["myForm"]["Java"].checked;
    // Check if any required field is empty
    if (name == "" || gender == "" || location == "") {
    alert("Please fill out all required fields.");
    return false; // Prevent form submission
    }
    
    // Check if at least one language is selected
    if (!python && !cSharp && !java) {
    alert("Please select at least one favourite language.");
    return false; // Prevent form submission
    }
    
    return true;
    }
    
    function goBack (){
    window.location.href = 'http://localhost:8000/';
    }