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
        if (email.split('')[i] == '@'){
            count++
            if (count > 1 || !email.split('').includes('.', i) || email.split('')[i-1] == '.'){
                return false
            }
        }
    }
    return true
}
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>FALSE')
console.log(validateEmail('e.mail@gmailcom'))
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>FALSE')
console.log(validateEmail('e.mail.@gmail.com'))
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>TRUE')
console.log(validateEmail('e.mail@gmail.com'))
