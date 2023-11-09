import { test } from '@japa/runner'

test.group('Pruebas d', () => {
  test('assertbody', async({client, assert}) => {

    const response = await client.get('/ ')

    let datosBody = JSON.parse(response.text())
    console.log(datosBody)

    response.assertBody({hello : 'world'})
  })
  })
