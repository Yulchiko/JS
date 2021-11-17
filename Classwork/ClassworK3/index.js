//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//   1. перебрати його циклом while


let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = numbers.length - 1;
while (i >= 0) {
    console.log(numbers[i]);
    i--;
}
//   2. перебрати його циклом for

for (let i = numbers.length - 1; i >= 0; i--) {
    let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    i = numbers.length - 1;
    while (i >= 0) {
        i--;
        console.log(numbers[i]);
    }
}
//   2. перебрати його циклом for
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
//    3. перебрати циклом while та вивести  числа тільки з непарним індексом

    i = numbers.length - 1;
    while (i >= 0) {
        if (i % 2 !== 0) {
            console.log(numbers [i])
        }
        i--;
    }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

    for (let i = numbers.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            console.log(numbers [i])
            i = numbers.length - 1;
            while (i >= 0) {
                if (i % 2 !== 0) {
                    i--;
                    console.log(numbers [i])
                }
            }
        }
    }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

            i = numbers.length - 1;
            while (i >= 0) {
                if (i % 2 !== 1) {
                    i--;
                    console.log(numbers [i])

                }
            }
//  5. перебрати циклом while та вивести  числа тільки парні  значення

            i = numbers.length - 1;
            while (i >= 0) {
                if (i % 2 === 0) {
                    console.log(numbers[i]);
                }
                i--;
            }

            for (let i = numbers.length - 1; i >= 0; i--) {
                if (i % 2 === 0) {
                    console.log(numbers [i]);

                }
            }
//  6. перебрати циклом for та вивести  числа тільки парні  значення

            for (let i = numbers.length - 1; i >= 0; i--) {
                if (i % 2 === 0) {
                    console.log(numbers [i]);
                }
            }
//  7. замінити кожне число кратне 3 на слово "okten"

            for (let i = numbers.length - 1; i >= 0; i--) {
                if (numbers[i] % 3 === 0) {
                    numbers[i] = "okten";
                    console.log(numbers[i]);
                }
            }
            console.log(numbers);

//   8. вивести масив в зворотньому порядку.

            let numbersback = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
            for (let i = numbersback.length - 1; i >= 0; i--) {
                console.log(numbersback[i]);
            }

//   8. вивести масив в зворотньому порядку.

            for (let i = numbers.length-1; i >= 0; i--){
                console.log(numbers[i]);
            }

//   9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
