function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

const masculinoBtn = document.getElementById('masculino');
const femininoBtn = document.getElementById('feminino');

masculinoBtn.addEventListener('click', () => {
  masculinoBtn.classList.add('selected');
  femininoBtn.classList.remove('selected');
});

femininoBtn.addEventListener('click', () => {
  femininoBtn.classList.add('selected');
  masculinoBtn.classList.remove('selected');
});

