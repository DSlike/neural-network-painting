function getTrainData(callback) {
  const pixels = ctx.getImageData(0, 0, imageSize, imageSize);
  let trainData = [];
  for (let i = 0; i < pixels.data.length; i += 4) {
    let r, g, b, a;

    r = pixels.data[i];
    g = pixels.data[i + 1];
    b = pixels.data[i + 2];
    a = pixels.data[i + 3];

    let y = parseInt(i / 4 / imageSize);
    let x = Math.round(((i / 4 / imageSize) - y) * imageSize);

    trainData.push({
      input: getInputArray(x, y, i),
      output: makeItUniq(r, g, b, a, i)
    });

    if (i == pixels.data.length - 4) {
      callback(trainData);
    }
  }
}

function getInputArray(x, y, i) {
  let w = Math.sin((i / (Math.pow(imageSize, 2))).toFixed(10));
  let im = (w + x / imageSize + y / imageSize / 100).toFixed(6),
      tx = Math.abs(x/tableCells)/tableCells,
      ty = Math.abs(y/tableCells)/tableCells;
  return [x / imageSize, y / imageSize, tx, ty, w, im];
}

function makeItUniq(r, g, b, a, i) {

  let ur = r / maxColor;
  let ug = g / maxColor;
  let ub = b / maxColor;
  let ua = a / maxColor;

  return [ur, ug, ub, ua];
}

function parseUniq(result, i) {

  let pr = result[0] * maxColor;
  let pg = result[1] * maxColor;
  let pb = result[2] * maxColor;
  let pa = result[3] * maxColor;

  return [pr, pg, pb, pa];
}
