window.onload = function () {

        let posX = 0;
        let posY = 0;

        let moveLeft = false;
        let moveUp = false;

        let circle = document.getElementById('circle');
        
        let start = document.getElementById('start');
        start.addEventListener('click', startAnim);
        

        function startAnim() {
            setInterval(move, 20);
            start.removeEventListener('click', startAnim);
        }

        function move() {

            switch (posX) {

                case 450:
                    moveLeft = true;
                    break;

                case 0:
                    moveLeft = false;
                    break;
            }

            switch (posY) {
   
                case 250:
                    moveUp = true;
                    break;

                case 0:
                    moveUp = false;
                    break;
            }

            moveLeft ?

                posX -= 3 : posX += 3;
            moveUp ?

                posY -= 1 : posY += 1;
    

            circle.style.left = posX + 'px';
            circle.style.top = posY + 'px';
        }
    }