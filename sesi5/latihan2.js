var buah = ['Apel', 'Jeruk', 'Mangga', 'Semangka', 'Nanas']
var listBuah = $('#buah');
for (i = 0; i < buah.length; i++) {
    var listItem = '<li class="buah">' + buah[i] + '</li>';
    listBuah.append(listItem);
}

// // Latihan String Methods
// function filterbuah() {
//     var input = document.getElementById("myInput");
//     var filter = input.value;
//     var li = document.getElementsByClassName("buah");

//     for (i = 0; i < li.length; i++) {
//         buah = li[i];
//         if (buah.textContent.indexOf(filter) > -1) {
//             li[i].style.display = "block";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

// jQuery
var filter = $('#myInput');
filter.keyup(filterBuah);

function filterBuah() {
    var buah = $('.buah');
    for (i = 0; i < buah.length; i++) {
        var item = $(buah[i]).text().toLowerCase();
        if (item.indexOf(filter.val().toLowerCase()) != -1) {
            $(buah[i]).slideDown();
        } else {
            $(buah[i]).slideUp();
        }
    }
}






