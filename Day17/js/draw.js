function drawCircle(x, y) {
  const cor = document.querySelector('input').value;
  pincel.beginPath();
  pincel.fillStyle = cor;
  if (!verificar) {
    return;
  } else {
    pincel.arc(x, y, 10, 0, 2 * Math.PI);
    pincel.fill();
  }
}
