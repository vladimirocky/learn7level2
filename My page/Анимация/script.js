const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
let timeoutID;


    // будем использовать переменные чтобы
    // записывать текущее положение круга
        let posX = 0;
        let posY = 0;
    // это 'флаги' чтобы функция
    // понимала куда перемещать круг
        let moveLeft = false;
        let moveUp = false;
    // получаем доступ к кругу
        let circle = document.getElementById('circle');
    // вызываем нашу функцию каждые 20 миллисекунд
    // будет перемещать каждые 20
    // миллисекунд наш круг
    startBtn.addEventListener('click', () => {
        timeoutID = setInterval(move, 2);
        console.log('start');
      });
      
      stopBtn.addEventListener('click', () => {
        clearTimeout(timeoutID);
        console.log('stop');
      });

        function move() {
            // чтобы определить направление
            // движения курга проверяем
            // достигли ли мы границы
            // сначала по горизонтали
            switch (posX) {
                // значит дошли до правой границы
                case 450:
                    moveLeft = true;
                    break;
                // значит дошли до левой границы
                case 0:
                    moveLeft = false;
                    break;
            }
            // проверяем по вертикали
            switch (posY) {
                // достигли нижней границы
                case 250:
                    moveUp = true;
                    break;
                // достили верхней границы
                case 0:
                    moveUp = false;
                    break;
            }
            // меняем позцию в зависимости
            // от направления движения
            moveLeft ?
                // по горизонтали
                posX -= 3 : posX += 3;
            moveUp ?
                // по вертикали
                posY -= 1 : posY += 1;
    
            // так мы двигаем наш круг
            circle.style.left = posX + 'px';
            circle.style.top = posY + 'px';
        }