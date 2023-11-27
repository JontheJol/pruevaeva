import { test } from '@japa/runner'
import User from 'App/Models/User';


test.group('Users Controller - PUT', () => {
  test('actualizar usuario exitosamente', async ({client}) => {

    const response =await client.post('usuarios/')
  
  });
});
