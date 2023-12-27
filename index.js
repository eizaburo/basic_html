const submit_btn = document.getElementById("submit_btn");

const _name = document.getElementById("name");
const _email = document.getElementById("email");
const _body = document.getElementById("body");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const body_error = document.getElementById("body_error");

const email_exp = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,4}$/;
const body_exp = /^.{1,10}$/;

submit_btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (_name.value == "") {
        name_error.classList.remove("hidden");
    }

    if (!email_exp.test(_email.value)) {
        email_error.classList.remove("hidden");
    }

    if (!body_exp.test(_body.value)) {
        body_error.classList.remove("hidden");
    }

    if (name_error.classList.contains("hidden") &&
        email_error.classList.contains("hidden") &&
        body_error.classList.contains("hidden")) {
        alert(`name=${_name.value}, email=${_email.value}, body=${_body.value}`);
    }
});

_name.addEventListener("keyup", (e) => {
    if (_name.value == "") {
        name_error.classList.remove("hidden");
    } else {
        name_error.classList.add("hidden");
    }
});

_email.addEventListener("keyup", (e) => {
    if (!email_exp.test(_email.value)) {
        email_error.classList.remove("hidden");
    } else {
        email_error.classList.add("hidden");
    }
});

_body.addEventListener("keyup", (e) => {
    if (!body_exp.test(_body.value)) {
        body_error.classList.remove("hidden");
    } else {
        body_error.classList.add("hidden");
    }
});
