describe('The getUser function', function(){

    it('getUser Function: should get Andile correctly', function(){
        assert.equal('Andile', getUser('Andile'));
    });
    it('getUser function: should display message correctly for unexpected input', function(){
        // this test will fail - can you fix it?
        assert.equal("PLEASE GREET SOMEONE!", getUser('11343#'));
    });
});

describe('The greetChoice function', function(){
choices = {English: 'Hello', Afrikaans: 'Hallo', IsiXhosa: 'Molo'}
    it('Should greet correctly in IsiXhosa', function(){
        assert.deepEqual(getChoice(choices,'IsiXhosa'),'Molo');
    });
    it('Should greet correctly in English', function(){
        // this test will fail - can you fix it?
        assert.deepEqual(getChoice(choices, 'English'), 'Hello');
    });
});

describe('The greetMessage function', function(){
choices = {English: 'Hello', Afrikaans: 'Hallo', IsiXhosa: 'Molo'}
    it('Should greet Anele correctly in IsiXhosa', function(){
        assert.deepEqual(greetMessage(choices,'IsiXhosa', 'Anele'),'Molo, Anele');
    });
    it('Should greet Cara correctly in English', function(){
        // this test will fail - can you fix it?
        assert.deepEqual(greetMessage(choices, 'English', 'Cara'), 'Hello, Cara');
    });
});
