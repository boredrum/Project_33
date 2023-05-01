                                        // EXCERCISE 1
// describe('describe', () =>{
//     it('test', () =>{
//     });
// })


                                        // EXCERCISE 2-4
let assert = chai.assert;

describe("validateEmail", function(){
    describe('valid string', function(){
        it('not empty string', function(){
            assert.equal(validateEmail(''), false);
        });
        it('typeof string', function(){
            assert.equal(validateEmail(222), false, 'number: error');
            assert.equal(validateEmail(true), false, 'boolean: error');
            assert.equal(validateEmail({}), false, 'object: error');
        });
        it('not empty string', function(){
            assert.equal(validateEmail('     '), false, 'empty string');
        });
    })
    describe('valid data', function(){
        it('Don\'t have the @ or @ the first character', function(){
            assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
            assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character');
        });
        it('length less than 5 chars', () =>{                   // EXCERCISE 2
            assert.equal(validateEmail('test'), false, 'length less than 5 chars');
        });
        it('Has two or more @', function(){                   // EXCERCISE 3
            assert.isFalse(validateEmail('em@il@gmail.com'), 'More than one @');
        });
        it('Dot after @ and not just before @', function(){                   // EXCERCISE 4
            assert.isFalse(validateEmail('e.mail@gmailcom'), 'Doesn\'t have dot after @');
            assert.isFalse(validateEmail('e.mail.@gmail.com'), 'Must be at least one char between . and @');
        });
    })
})
