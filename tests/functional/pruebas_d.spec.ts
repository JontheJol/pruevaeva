import { test } from '@japa/runner'
import User from 'App/Models/User';

//assertBody PUT
test.group('aBPut', () => {

  test('Test de PUT', async ({ client }) => {
    const userId = 6; // ID a modificar

    const response = await client.put(`/usuarios/${userId}`).form({
      name: 'low',
      edad: 24,
      email: 'gyrocar@mail.com'
    });

    let datos = JSON.parse(response.text());

    response.assertStatus(200);
    response.assertBody({
      name: 'low',
      edad: 24,
      email: 'gyrocar@mail.com',
      id: datos.id,
      created_at: datos.created_at,
      updated_at: datos.updated_at,
      remember_me_token: datos.remember_me_token
    })

    test('Tests contain put', async ({ client }) => {
      const userId = 6; // ID a modificar

      const response = await client.put(`/usuarios/${userId}`).form({
        name: 'low',

        email: 'gyrocar@mail.com'
      });

      let datos = JSON.parse(response.text());

      response.assertStatus(200);
      response.assertBodyContains({
        name: 'low',

        email: 'gyrocar@mail.com',
        id: datos.id,
        created_at: datos.created_at,
        updated_at: datos.updated_at,
        remember_me_token: datos.remember_me_token
      });
    });
  })

    test('Tests contain post', async ({ client }) => {
      const response = await client.post('/usuarios').form({
        name: 'low',
        edad: 25,
        email: "gyr@mail.com",
        password: "1234"
      });

      let datos = JSON.parse(response.text());

      response.assertBodyContains({
        name: 'low',
        edad:25,
        email: "gyr@mail.com",
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
        email: "newusesr@mail.com",
        password: "5678"
      };
    //bro porque ahora si \otro metodo
      const response = await client.post('/usuarios').form(newUserData);

      let datos = JSON.parse(response.text());

      // definir el objeto de la respuesta
      const expectedResponse = {
        name: 'newUser',
        edad: 30,
        email: "newusesr@mail.com",
        id: datos.id,
        created_at: datos.created_at,
        updated_at: datos.updated_at,
      };

      //  assertBody para verificar que la respuesta
      response.assertBody(expectedResponse);
    });



})
