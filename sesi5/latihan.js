var buah = ['Apel', 'Jeruk', 'Mangga', 'Semangka', 'Nanas']
var listBuah = document.getElementById('buah');
for (i = 0; i < buah.length; i++) {
    var listItem = document.createElement('li');
    listItem.classList.add('buah');
    listItem.textContent = buah[i];
    listBuah.appendChild(listItem);
}

// Latihan String Methods
function filterbuah() {
    var input = document.getElementById("myInput");
    var filter = input.value;
    var li = document.getElementsByClassName("buah");

    for (i = 0; i < li.length; i++) {
        buah = li[i];
        if (buah.textContent.indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
// jQuery





