
function getSum() {
    let list = document.getElementById("myList");
    const a = document.getElementById("soThuNhat").value;
    const b = document.getElementById("soThuHai").value;
    let sum = 0;
    console.log(a);
    console.log(b);
    
    for (index = a; index < b; index++) {
        let t = checkSquareNumber(index);
        if (t == true) {
            sum += index;
        }
    }
    let li = document.createElement("li");
    li.innerText = sum;
    list.appendChild(li);
}

function checkSquareNumber(n) {
    let flag = true;
    if (n < 2) {
        flag = false
    }
    else {
        for (let index = 2; index < n - 1; index++) {
            if (n % index == 0) {
                flag = false
                break;
            }
        }
    }
    return flag
}

