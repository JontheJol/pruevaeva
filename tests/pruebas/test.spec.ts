import { test } from '@japa/runner'


test.group('test de modificaciones poco usuales', () => {
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

    test('Tests user id 5 fallo por email', async ({ client }) => {
      const userId = 5; // ID a modificar

      const response = await client.put(`/usuarios/${userId}`).form({
        name: 'low2',
        email: 'gyrocar@mail.com',
      });

      const datos = JSON.parse(response.text());

      response.assertStatus(200);
      response.assertBodyContains({
        name: 'low2',
        email: 'gyrocar@mail.com',
        id: datos.id,
        created_at: datos.created_at,
        updated_at: datos.updated_at,
        remember_me_token: datos.remember_me_token,
      });
    });
  });

  test('Tests crear un usuario con email similar', async ({ client }) => {
    const response = await client.post('/usuarios').form({
      name: 'low22',
      edad: 45,
      email: 'gdayr@mail.com',
      password: '1234',
    });

    const datos = JSON.parse(response.text());

    response.assertStatus(201); // Created status code
    response.assertBodyContains({
      name: 'low22',
      edad: 45,
      email: 'gdayr@mail.com',
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
      remember_me_token: datos.remember_me_token,
    });
  });
  test('Tests crear un usuario', async ({ client }) => {
    const response = await client.post('/usuarios').form({
      name: 'low3',
      edad: 55,
      email: 'gyr@mail.com',
      password: '1234',
    });

    const datos = JSON.parse(response.text());

    response.assertStatus(201); // Created status code
    response.assertBodyContains({
      name: 'low3',
      edad: 55,
      email: 'gyr@mail.com',
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
      remember_me_token: datos.remember_me_token,
    });
  });

  test('Tests crear usuario password incorrecto ', async ({ client }) => {
    const newUserData = {
      name: 'newUser',
      edad: 30,
      email: 'newusesr@mail.com',
    };

    const response = await client.post('/usuarios').form(newUserData);

    const datos = JSON.parse(response.text());


    const expectedResponse = {
      name: 'newUser',
      edad: 30,
      email: 'newusesr@mail.com',
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
    };

    response.assertStatus(201);
    response.assertBody(expectedResponse);
  });
});

