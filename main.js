 const form = document.getElementById("registerForm");

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const password2 = document.getElementById("password2").value;

            const message = document.getElementById("message");

            if (email === "") {
                message.textContent = "Az email cím megadása kötelező!";
                
            }

            else if (!email.includes("@") || !email.includes(".")) {
                message.textContent = "Hibás email cím!";
                
            }

            else if (password === "") {
                message.textContent = "A jelszó megadása kötelező!";
               
            }

            else if (password.length < 8) {
                message.textContent = "A jelszó minimum 8 karakter legyen!";
              
            }

            else if (password2 === "") {
                message.textContent = "A jelszó megerősítése kötelező!";
               
            }

            else if (password !== password2) {
                message.textContent = "A két jelszó nem egyezik!";
                
            }

            else {
                message.textContent = "Sikeres regisztráció!";
               
            }

        });


// document.getElementById('submit').addEventListener('click', function(rege) {
//     rege.preventDefault()
//     const login = document.getElementById('login')
//     if(!login.checkValidity()){
//         login.reportvalidity()
//         return
//     }



// })


 // let email = document.getElementById("emailInput").value
    // let jelszo1 = document.getElementById("passwordInput").value
    // let jelszo2 = document.getElementById("passwordInput2").value
    // let valasz = ""
    // let emailOk = false
    // let jelszoOk = false
    // if(email == null){
    //     alert("A mező nincs kitötlve")
    // }
    // else if(email.includes(".") && email.includes("@")){
    //     emailOk = true
    // }