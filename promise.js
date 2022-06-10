const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();
  let tampung = ixx.concat(vgc);
  let totalEmosi = 0;
  
  tampung.map(ixx => ixx.hasil === emosi && (totalEmosi += 1) )
  return totalEmosi
};

module.exports = {
  promiseOutput,
};
