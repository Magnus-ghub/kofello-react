// import { Train } from "@mui/icons-material";
//task T
function mergeSortedArrays(arr1: number[], arr2: number[]) {
  const overal = arr1.concat(arr2);

  overal.sort((a, b) => a - b);

  return overal;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

/**
Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
*/




console.log("ts ishga tushti");
// TASK S
function missingNumber(arr: number[]): number {
  arr.sort((a, b) => a - b); 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1; 
    }
  }

  return arr.length + 1; 
}
console.log(missingNumber([1, 2, 3, 4, 5, 7, 9, 6]));
console.log(missingNumber([2, 3, 1, 5, 6]));
console.log(missingNumber([1, 0, 3]));

/**
 Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

MASALAN: missingNumber([3, 0, 1]); return 2

Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
'2' soni tushib qolgan
 */

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