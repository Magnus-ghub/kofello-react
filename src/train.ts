console.log("ts ishga tushti");
// TASK R
function calculate(sum: string): number {
  const result = sum.split(" ");
  const sum1 = Number(result[0]);
  const operator = result[1];
  const sum2 = Number(result[2]);
  
  if (operator === "+") return sum1 + sum2;
  if (operator === "-") return sum1 - sum2;
  if (operator === "*") return sum1 * sum2;
  if (operator === "/") return sum1 / sum2;
  return 0;

}

console.log(calculate("4 + 3"));
console.log(calculate("15 * 3"));
console.log(calculate("120 / 15"));


/**
Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
 */

// TASK Q:
function hasProperty(obj: object, key: string): boolean {
    return key in obj;
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  


/**
Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.
 */