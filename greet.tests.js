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

    it('Should greet correctly', function(){
        assert.deepEqual(getChoice(['English', 'Afrikaans', 'isiXhosa']),'Molo');
    });
    it('Should display message correctly for unexpected input', function(){
        // this test will fail - can you fix it?
        assert.equal("PLEASE GREET SOMEONE!", getChoice());
    });
});
