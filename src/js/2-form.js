const form = document.querySelector(".feedback-form");
const formData = { email: "", message: "" };
const key = "feedback-form-state";
populateTextArea();
form.addEventListener("input", formInfoSaver);
form.addEventListener("submit", submitHandler);
function formInfoSaver(e) {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    localStorage.setItem(key, JSON.stringify(formData));
}
function populateTextArea() {
    const saved = localStorage.getItem(key);
    if (!saved) return;
    const message = JSON.parse(saved);
    if (message.email) {
    form.elements.email.value = message.email;
    } 
    if (message.message) {
    form.elements.message.value = message.message; 
    } 
    }

function submitHandler(e) {
    e.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        return alert("Fill please all fields")
    }
    console.log(formData);
    form.reset();
    localStorage.removeItem(key);
    formData.email = "";
    formData.message = "";
}
    