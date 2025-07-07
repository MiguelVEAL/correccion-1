// Guardamos las URLs de la API que vamos a usar.
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Conectamos con los párrafos <p> del HTML. El $ es una señal de que es un elemento de la página.
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// async nos deja usar await para esperar a que la API responda.
async function displayUser(username) {
  // Ponemos un texto de carga para que el usuario sepa que algo está pasando.
  $n.textContent = 'cargando...';

  // try intenta ejecutar este código. Si hay un error, salta al catch.
  try {
    // Pedimos los datos del usuario. await hace que el código espere aquí la respuesta.
    const response = await fetch(`${usersEndpoint}/${username}`);
    
    // Convertimos la respuesta a JSON.
    const data = await response.json();
    console.log(data); // Muestra los datos en la consola para revisarlos.

    // Ponemos la información del usuario en los párrafos del HTML.
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
    
  } catch (err) {
    // Si algo sale mal en el try, este código se ejecuta.
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Avisamos en la página que hubo un error.
  $n.textContent = `Algo salió mal: ${err}`;
}

// Llamamos a la función para que se ejecute con un nombre de usuario.
displayUser('stolinski');