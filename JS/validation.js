function onSubClick(event) {
    event.preventDefault();

    let firstName = document.getElementById("name-id").value;
    let lastName = document.getElementById("last-id").value;
    let email = document.getElementById("mail-id").value;
    let massage = document.getElementById("tel-id").value;

    document.getElementById('name-span').innerHTML = '';
    document.getElementById('last-span').innerHTML = '';
    document.getElementById('mail-span').innerHTML = '';
    document.getElementById('tel-span').innerHTML = '';

    if (firstName < 2) {
        document.getElementById('name-span').innerHTML = "Your First Name Is Too Short!"
       document.getElementById('name-span').style.color =  "red";
    }
    if (lastName < 2) {
         document.getElementById('last-span').innerHTML = "Your Last Name Is Too Short!"
        document.getElementById('last-span').style.color =  "red";
    }
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1  ) {
        document.getElementById('mail-span').innerHTML = "Please enter valid email!"
        document.getElementById('mail-span').style.color =  "red";
    }
    if (massage < 9) {
        document.getElementById("tel-span").innerHTML = "Please enter valid phone number!"
        return document.getElementById("tel-span").style.color =  "red";
    }

        Email.send({
        Host : "smtp.gmail.com",
        Username : "example@gmail.com",
        Password : "",
        To : 'example@gmail.com',
        From : "example@gmail.com",
        Subject : `Mail from: ${firstName} ${lastName}`,
        Body : "Thank you for filling out the form"
    }).then(
      () => {
          document.getElementById('btn-id').innerHTML = `The message has been sent:`;
          document.getElementById('btn-id').style.color =  "green";
        }
    );

    document.getElementById("name-id").value = '';
    document.getElementById("last-id").value= '';
    document.getElementById("mail-id").value = '';
    document.getElementById("tel-id").value = '';
    document.getElementById('subject-id').value = '';
    document.getElementById('mas-id').value = '';
}

