import { test } from '@japa/runner'

test.group('', () => {
  test('Test de modificacion de id 6', async ({ client }) => {
    const userId = 6;

    const response = await client.put(`/usuarios/${userId}`).form({
      name: 'low',
      edad: 24,
      email: 'gyrocar@mail.com',
    });

    const datos = JSON.parse(response.text());

    response.assertStatus(200);
    response.assertBody({
      name: 'low',
      edad: 24,
      email: 'gyrocar@mail.com',
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
      remember_me_token: datos.remember_me_token,
    });

    test('Tests contain put', async ({ client }) => {
      const userId = 6; // ID a modificar

      const response = await client.put(`/usuarios/${userId}`).form({
        name: 'low',
        email: 'gyrocar@mail.com',
      });

      const datos = JSON.parse(response.text());

      response.assertStatus(200);
      response.assertBodyContains({
        name: 'low',
        email: 'gyrocar@mail.com',
        id: datos.id,
        created_at: datos.created_at,
        updated_at: datos.updated_at,
        remember_me_token: datos.remember_me_token,
      });
    });
  });

  test('Tests contain post', async ({ client }) => {
    const response = await client.post('/usuarios').form({
      name: 'low',
      edad: 25,
      email: 'gyr@mail.com',
      password: '1234',
    });

    const datos = JSON.parse(response.text());

    response.assertStatus(201); // Created status code
    response.assertBodyContains({
      name: 'low',
      edad: 25,
      email: 'gyr@mail.com',
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
      remember_me_token: datos.remember_me_token,
    });
  });

  test('Tests contain not post', async ({ client }) => {
    const newUserData = {
      name: 'newUser',
      edad: 30,
      email: 'newusesr@mail.com',
      password: '5678',
    };

    const response = await client.post('/usuarios').form(newUserData);

    const datos = JSON.parse(response.text());

    // Define the response object
    const expectedResponse = {
      name: 'newUser',
      edad: 30,
      email: 'newusesr@mail.com',
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
    };

    response.assertStatus(201); // Created status code
    response.assertBody(expectedResponse); // Check the entire response object
  });
});
