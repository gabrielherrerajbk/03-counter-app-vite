import { usContext } from '../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => { 
    test('should first', () => { 
        const testReturn = {
            nombreClave: 'GabrielDev',
            anios: 1,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        const param = {
            clave: 'GabrielDev', 
            nombre: 'Gabriel', 
            edad: 1
        };
        const usContextSome = usContext(param);

        expect( testReturn ).toEqual( usContextSome )
     })
 })