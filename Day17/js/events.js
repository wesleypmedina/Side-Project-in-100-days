let verificar = false;
canvas.addEventListener('mousemove', addCordenadas);

function addCordenadas(e) {
  const x = e.pageX;
  const y = e.pageY;
  drawCircle(x, y);
};

canvas.addEventListener('click', function() {
  verificar = true;
  this.addEventListener('click', function() {
    verificar = false;
  });
});
