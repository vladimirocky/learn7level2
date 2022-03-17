window.onload = function () {
    let btn = document.getElementById("demo");
    btn.addEventListener('click', myFunction);

    function myFunction() {
        alert("Hey!");
        // удаляем обработчик, больше нажать уже на получится
        btn.removeEventListener('click', myFunction);
    }
}