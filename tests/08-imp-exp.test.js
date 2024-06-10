import { getHeroeById, getHeroesByOwner } from '../src/base-pruebas/08-imp-exp';
import { heroes } from '../src/data/heroes';


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
     });

     test('getHeroeById debe de retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
     });

     test('getHeroesByOwner debe de retornar heroes DC', () => { 
        const testOwner = 'DC';
        const returnHeroes = getHeroesByOwner( testOwner );

        expect( returnHeroes ).toEqual( returnHeroes.filter( (heroe) => heroe.owner === testOwner ));
        expect( returnHeroes.length ).toBe(3);
     });
 });