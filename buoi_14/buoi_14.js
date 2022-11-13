function getTwoNumber() {
    const a = document.getElementById("soThuNhat").value;
    const b = document.getElementById("soThuHai").value;
    console.log(a);
    console.log(b);
    let list = document.getElementById("myList");
    for (let index = a; index < b; index++) {
        const t = checkSquareNumber(index)
        if (t != null) {
            console.log(t);
            let li = document.createElement("li");
            li.innerText = index;
            list.appendChild(li);
        }
    }

}

function checkSquareNumber(n) {
    const i = Math.sqrt(n);
    if (Math.ceil(i) === i) {
        return n;
    }
}

