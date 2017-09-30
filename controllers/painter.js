function paint(callback) {
  var pixels = copypx.getImageData(0, 0, imageSize, imageSize);
  for (let i = 0; i <= pixels.data.length; i += 4) {
    let y = parseInt(i / 4 / imageSize);
    let x = Math.round(((i / 4 / imageSize) - y) * imageSize);

    var result = netWork.activate(getInputArray(x, y, i));

    result = parseUniq(result, i);

    pixels.data[i] = parseInt(result[0]);
    pixels.data[i + 1] = parseInt(result[1]);
    pixels.data[i + 2] = parseInt(result[2]);
    pixels.data[i + 3] = parseInt(result[3]);

    if (i == pixels.data.length - 4) {
      copypx.putImageData(pixels, 0, 0);
      callback();
    }
  }
}
