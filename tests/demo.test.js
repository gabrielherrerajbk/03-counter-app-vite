describe('Pruebas en <DemoComponent />', () => {
    
    test('Esta prueba no debe de fallar',()=>{
        const Message1 = 'Hola Mundo';
    
        const Message2 = Message1.trim();
    
        expect(Message1).toBe(Message2);
        
    
    });

});

