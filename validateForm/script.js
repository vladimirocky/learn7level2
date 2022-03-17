function validate() {
    let inpt1 = document.getElementById('inpt1');
    let inpt2 = document.getElementById('inpt2');
    if (inpt1.value != '' && inpt2.value != '') {
        if (inpt1.value == inpt2.value) {
            return true;
        }
    }
    alert("Введите данные во все поля!");
    return false;
}