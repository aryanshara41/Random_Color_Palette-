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
        <span>${hexcode}</span>`;

        main.appendChild(ele);
    }
}