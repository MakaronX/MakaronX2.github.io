var button = document.getElementById('button');

button.addEventListener('click', function() {
  var form = document.getElementById('myForm');
  var buttonText = button.querySelector('.transition');

  buttonText.style.opacity = '0';

  button.style.color = 'rgba(255, 255, 255, 0)';
  button.style.transition = 'transform 0.3s ease, width 0.5s ease, height 0.5s ease';
  button.style.width = '500px';
  button.style.height = '600px';
  button.style.transform = 'translate(-50%, -50%) rotateX(5deg) rotateY(calc(-5deg * var(--rotX, 0)))';

  setTimeout(function() {
    button.style.display = 'none';
    form.style.display = 'block';
  }, 500);
});
