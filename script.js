function Generate() {
    var hexcode = "#";

    var main = document.querySelector(".main");
    main.innerHTML = "";

    var list = document.querySelector(".list");

    for (let i = 0; i < 12; i++) {
        var hexcode = "#";
        var val = Math.floor(Math.random() * 0xffffff).toString(16);
        hexcode += val;

        var ele = document.createElement("li");
        ele.classList.add('list');

        ele.innerHTML = `<div class="container" style = "background-color: ${hexcode};"></div>
        <span class = "hex" id = "${hexcode}" onclick = "CopyText(this, this.id)">${hexcode}</span>`;

        main.appendChild(ele);
    }
}

function CopyText(ele, hex) {
    console.log(hex);

    navigator.clipboard.writeText(hex).then(() => {
        ele.innerHTML = "Copied..";
        setTimeout(() => { ele.innerHTML = hex }, 1000);
    })
}
