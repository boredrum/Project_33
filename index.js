                                        // EXCERCISE 1
// let describe = function(email){
//     return true
// }


                                        // EXCERCISE 2, 3, 4
let validateEmail = function(email){
    if (email == '') return false
    if (typeof(email) !== 'string') return false
    if (email.split('').length < 5) return false                   // EXCERCISE 2
    if (!email.split('').includes('@') || email.split('')[0] == '@') return false
    let count = 0;                   // EXCERCISE 3, 4
    for (let i=0; i < email.split('').length; i++){
        if (email.split('')[i] == '@' || (email.split('')[i] == '.' && email.split('')[i+1] && email.split('')[i+1] == '@')){
            count++
            if (count > 1 || !email.split('').includes('.', i)){
                return false
            }
        }
    }
//пояснення коду завдання 3-4: ми вже точно знаємо, що у нас є @ в емейлі адже він пройшов перевірку до цього, тому count в нас буде 1 за замовчуванням
//тому ми перевіряємо, чи є у нашому коді ще @, якщо так - count вже буде 2 і функція поверне false
//у строчці 15 ми перевіряємо чи існує елемент массиву [i+1], якщо так - перевіряємо чи @ стоїть після точки, та якщо це так - додаємо 1 до count
//при порушенні будь-якого правила з цих, count буде 2 та функція поверне false
    return true
}
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>FALSE')
console.log(validateEmail('e.mail@gmailcom'))
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>FALSE')
console.log(validateEmail('e.mail.@gmail.com'))
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>TRUE')
console.log(validateEmail('e.mail@gmail.com'))