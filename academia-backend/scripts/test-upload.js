const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

async function testUpload() {
  try {
    // Necesitamos el token admin! Voy a hacer login primero (con admin@academiah-b.edu / admin123)
    const loginRes = await axios.post('http://localhost:3000/api/auth/iniciar-sesion', {
      correo_ahbb: 'admin@academiah-b.edu',
      contrasena_ahbb: 'admin123'
    });
    const token = loginRes.data.token;

    const form = new FormData();
    const filePath = path.join(__dirname, 'PlantillaRealProfesores.xlsx');
    form.append('file', fs.createReadStream(filePath));

    const uploadRes = await axios.post('http://localhost:3000/api/usuarios/carga-masiva/profesores-excel', form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Bearer ${token}`
      }
    });

    console.log('EXITO:', uploadRes.data);
  } catch (err) {
    if (err.response) {
      console.log('ERROR STATUS:', err.response.status);
      console.log('ERROR DATA:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.log('ERROR:', err.message);
    }
  }
}

testUpload();
