// Get all the nessecery button
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

// if statement to chcek if the the savedtheme is dark or not
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ ";
}

// listen to user clicking the button for dark mode
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
// turn on the dark-mode from css by adding it to the body
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});

// get the id from html
const form = document.getElementById("contact-form");

// check if user click the submit button
document.querySelector(".contact-submit-btn").addEventListener("click", (e) => {
  e.preventDefault();

// if the form is not fill it will check and give an error 
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

// if form is completed it will reset and give alert
  form.reset();
  alert("Sent successfully!");
});

// show the brunei time by doing some calculation
function showBruneiTime() {
  let bruneiTime = moment().utcOffset("+0800").format("HH:mm:ss");

  document.getElementById("clock").textContent = bruneiTime;
}

// show brunei time every seconds
showBruneiTime();
setInterval(showBruneiTime, 1000);
