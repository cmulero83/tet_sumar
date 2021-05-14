var app = require("../index.js")

describe("Prueba sumar", function(){

    it("Pasa dos numeros y devuelve la suma", function(){

        var value=app.sumar(7,6);
        expect(value).toBe(13)
})

})