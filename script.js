const boxes = document.querySelectorAll('.box');
        let currentIndex = -1; 

        document.getElementById('toggleButton').addEventListener('click', () => {
            if (currentIndex !== -1) {
                boxes[currentIndex].classList.remove('hidden');
            }
            currentIndex = (currentIndex + 1) % boxes.length;
            boxes[currentIndex].classList.add('hidden');
        });