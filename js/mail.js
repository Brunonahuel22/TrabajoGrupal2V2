
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "brunonahuel87@gmail.com",
    Password : "password",
    To : 'brunonahuel87@yahoo.com',
    From : "brunonahuel87@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);