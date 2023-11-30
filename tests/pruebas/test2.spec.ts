import { test } from '@japa/runner'

test.group('test de modificaciones normales a usuarios', () => {


  test('Test de modificacion de id 2', async ({ client }) => {
    const userId = 2;

    const response = await client.put(`/usuarios/${userId}`).form({
      name: 'low2',
      edad: 45,
      email: `gyrocar-2@mail.com`,
    });

    const datos = JSON.parse(response.text());

    response.assertStatus(200);
    response.assertBody({
      name: 'low2',
      edad: 45,
      email: `gyrocar-2@mail.com`,
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
      remember_me_token: datos.remember_me_token,
    });
  });

  test('Test de modificacion de id 3', async ({ client }) => {
    const userId = 3;

    const response = await client.put(`/usuarios/${userId}`).form({
      name: 'low3',
      edad: 55,
      email: `gyrocar-3@mail.com`,
    });

    const datos = JSON.parse(response.text());

    response.assertStatus(200);
    response.assertBody({
      name: 'low3',
      edad: 55,
      email: `gyrocar-3@mail.com`,
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
      remember_me_token: datos.remember_me_token,
    });
  });

  test('Test de modificacion de id 4', async ({ client }) => {
    const userId = 4;

    const response = await client.put(`/usuarios/${userId}`).form({
      name: 'low4',
      edad: 65,
      email: `gyrocar-4@mail.com`,
    });

    const datos = JSON.parse(response.text());

    response.assertStatus(200);
    response.assertBody({
      name: 'low4',
      edad: 65,
      email: `gyrocar-4@mail.com`,
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
      remember_me_token: datos.remember_me_token,
    });
  });

  test('Test de modificacion de nombre vacío', async ({ client }) => {
    const userId = 1;

    const response = await client.put(`/usuarios/${userId}`).form({
      name: '',
      edad: 45,
      email: `gyrocar-1@mail.com`,
    });

    response.assertStatus(422);
    response.assertBodyContains({
      errors: [
        {
          field: 'name',
          message: 'El nombre no puede estar vacío.',
        },
      ],
    });
  });
  test('Test de modificacion de edad negativa', async ({ client }) => {
    const userId = 1;

    const response = await client.put(`/usuarios/${userId}`).form({
      name: 'low',
      edad: -1,
      email: `gyrocar-1@mail.com`,
    });

    response.assertStatus(422);
    response.assertBodyContains({
      errors: [
        {
          field: 'edad',
          message: 'La edad debe ser un número entero positivo.',
        },
      ],
    });
  });
})
