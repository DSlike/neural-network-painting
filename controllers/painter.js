function paint() {
  copypx.beginPath();
  copypx.clearRect(0, 0, Original.width, Original.height);
  var pixels = copypx.getImageData(0, 0, imageSize, imageSize);
  for (let i = 0; i <= pixels.data.length; i += 4) {
    let y = parseInt(i / 4 / imageSize);
    let x = Math.round(((i / 4 / imageSize) - y) * imageSize);

    var result = netWork.activate(getInputArray(x, y, i));

    result = parseUniq(result, i);
    for(let j=0; j<4; j++){
      pixels.data[i+j] = parseInt(result[j]);
    }

    if (i == pixels.data.length - 4) {
      copypx.putImageData(pixels, 0, 0);
    }
  }
  copypx.closePath();
}
