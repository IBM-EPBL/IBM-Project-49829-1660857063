function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please fill out all the required fields");
      return false;
    }
  }