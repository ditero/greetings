describe('The getUser function', function(){

    it('getUser Function: should get Andile correctly', function(){
        assert.equal('Andile', getUser('Andile'));
    });
    it('getUser function: should display message correctly for unexpected input', function(){

        assert.equal("PLEASE GREET SOMEONE!", getUser('11343#'));
    });
});

describe('The greetChoice function', function(){

    it('Should greet correctly in IsiXhosa', function(){
        assert.deepEqual(getChoice('IsiXhosa'),'Molo');
    });
    it('Should greet correctly in English', function(){

        assert.deepEqual(getChoice('English'), 'Hello');
    });
});

describe('The greetMessage function', function(){

    it('Should greet Anele correctly in IsiXhosa', function(){
        assert.deepEqual(greetMessage('IsiXhosa', 'Anele'),'Molo, Anele');
    });
    it('Should greet Cara correctly in English', function(){

        assert.deepEqual(greetMessage('English', 'Cara'), 'Hello, Cara');
    });
    it('should display message correctly for unexpected input', function(){

        assert.deepEqual(greetMessage('English', '.@#'), "Hello, PLEASE GREET SOMEONE!");
    });
});
