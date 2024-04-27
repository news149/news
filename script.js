
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
