const cliente = {
    nombre: 'Alan David',
    balance: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Alan David', () => {
        expect(cliente.nombre).toBe('Alan David');  
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Alan')
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(300);
    })
});