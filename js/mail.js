Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pruba@gmail.com",
    Password : "6529D1CCC19A798C1DA668DF4F1A3339D41E",
    To : 'brunonahuel87@yahoo.com',
    From : "prueba@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);