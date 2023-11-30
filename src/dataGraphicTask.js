function numDecorator(arg1, arg2, arg3, arg4, arg5) {
    const argArray = [arg1, arg2, arg3, arg4, arg5];
    let require1 = " ____ ";
    let require2 = "......";
    let require3 = "|    |";
  
    let result = [];
    for (let i = 0; i < argArray.length; i++) {
      let str10 = "......";
      let str9 = "......";
      let str8 = "......";
      let str7 = "......";
      let str6 = "......";
      let str5 = "......";
      let str4 = "......";
      let str3 = "......";
      let str2 = "......";
      let str1 = "......";
      let str0 = "......";
      if (argArray[i] === 10) {
        str10 = require1;
        str9 = require3;
        str8 = require3;
        str7 = require3;
        str6 = require3;
        str5 = require3;
        str4 = require3;
        str3 = require3;
        str2 = require3;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 9) {
        str10 = require2;
        str9 = require1;
        str8 = require3;
        str7 = require3;
        str6 = require3;
        str5 = require3;
        str4 = require3;
        str3 = require3;
        str2 = require3;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 8) {
        str9 = require2;
        str8 = require1;
        str7 = require3;
        str6 = require3;
        str5 = require3;
        str4 = require3;
        str3 = require3;
        str2 = require3;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 7) {
        str8 = require2;
        str7 = require1;
        str6 = require3;
        str5 = require3;
        str4 = require3;
        str3 = require3;
        str2 = require3;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 6) {
        str7 = require2;
        str6 = require1;
        str5 = require3;
        str4 = require3;
        str3 = require3;
        str2 = require3;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 5) {
        str6 = require2;
        str5 = require1;
        str4 = require3;
        str3 = require3;
        str2 = require3;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 4) {
        str5 = require2;
        str4 = require1;
        str3 = require3;
        str2 = require3;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 3) {
        str4 = require2;
        str3 = require1;
        str2 = require3;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 2) {
        str3 = require2;
        str2 = require1;
        str1 = require3;
        str0 = require3;
      } else if (argArray[i] === 1) {
        str2 = require2;
        str1 = require1;
        str0 = require3
      } else if (argArray[i] === 0) {
        str1 = require1;
        str0 = require3;
      }
      result.push(
        str10,
        str9,
        str8,
        str7,
        str6,
        str5,
        str4,
        str3,
        str2,
        str1,
        str0
      );
    }
    // result=result.join(" ");
    return console.dir(result);
  }
  numDecorator(10, 3, 10, 1, 10);



  // firstValueObj.setDamage();

/*Сегодня вы провели сбор данных и хотите, чтобы данные были хорошо представлены в виде графика,

поэтому вы решили составить краткую диаграмму. Предположим, что для этого ката ваши данные представлены массивом по их значениям,

например [10,5,3,1,4], тогда вы должны представить свои данные следующим образом:
for data = [10,5,3,1,4] :

 ____ ........................ ^ 10
|    |........................ | 9
|    |........................ | 8
|    |........................ | 7
|    |........................ | 6
|    | ____ .................. | 5
|    ||    |............ ____  | 4
|    ||    | ____ ......|    | | 3
|    ||    ||    |......|    | | 2
|    ||    ||    | ____ |    | | 1
|    ||    ||    ||    ||    | | 0

ХОРОШО ЗНАТЬ : Каждая полоса всегда имеет ширину 6. 
Вертикальная ось должна быть окружена одним пробелом с каждой стороны. Никаких конечных пробелов ни в одной строке.

Для этого ката мы используем: следующие символы: '_',' ','|','.','^'. некоторые цифры. Тип возврата: Ваш код должен возвращать строку символов,

соединенную символом \n. [] и [0] возвращают разные значения "" и "____ ^ 0" КРИТЕРИИ: Длина массива всегда меньше 50.

Значение данных также меньше 50 и всегда положительное. УДАЧИ :)
*/
  export{numDecorator}