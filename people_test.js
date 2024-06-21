Feature('people');

Scenario('Teste validar request people',  ({ I }) => {
    I.sendGetRequest('/people')
    I.seeResponseCodeIsSuccessful()
});

Scenario('Teste validar request people 1',  ({ I }) => {
    I.sendGetRequest('/people')
    I.seeResponseCodeIsSuccessful()
});

Scenario('Teste validar request people 2',  ({ I }) => {
    I.sendGetRequest('/people/1')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['name', 'birth_year'])
    I.seeResponseContainsJson ({
        name: 'Luke Skywalker',
        birth_year: '19BBY'
    })
});