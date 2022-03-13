var fr = ["Aarav Kunjir ", "Aayra Kunjir ", "Milind Kunjir ", "Sonali Kunjir ", ];

var ima = ["download.png", "ugly.webp", "https://thumbs.dreamstime.com/b/happy-cute-kid-boy-hugging-dad-love-164772554.jpg(1).png", "mom-clipart.png"];

var i = 0;

function next() {
    document.getElementById("nameC").innerHTML = fr[i];
    document.getElementById("picC").src = ima[i];
    i = i + 1;

    if (i >= 4) {

        i = 0;
    }
}