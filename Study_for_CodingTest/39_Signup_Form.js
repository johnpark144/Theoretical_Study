// ########### Questions #############################################################################
// Implement a signup form to allow users to fill in their details and submit the form.

// ###################### index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8" />
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1.0" />
//   </head>
//   <body>
//     <form>
//       <label>Username</label>
//       <input type="text" />
//     </form>
//     <script src="src/index.js"></script>
//   </body>
// </html>

// ###################### index.js
import './styles.css';

async function submitForm(username, email, password, passwordConfirm) {
  try {
    const response = await fetch(
      'https://www.greatfrontend.com/api/questions/sign-up',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      }
    );

    const { message } = await response.json();
    alert(message);
  } catch (_) {
    alert('Error submitting form!');
  }
}

// ###################### styles.css
// body {
//     font-family: sans-serif;
//   }

// ########### Solution ##############################################################################
// ###################### index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8" />
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1.0" />
//   </head>
//   <body>
//     <form>
//       <div>
//         <label for="username-input">Username</label>
//         <input
//           id="username-input"
//           name="username"
//           required
//           type="text"
//           pattern="^[a-zA-Z0-9]+$"
//           minlength="4" />
//       </div>
//       <div>
//         <label for="email-input">Email</label>
//         <input
//           id="email-input"
//           name="email"
//           required
//           type="email" />
//       </div>
//       <div>
//         <label for="password-input">Password</label>
//         <input
//           id="password-input"
//           name="password"
//           required
//           type="password"
//           minlength="6" />
//       </div>
//       <div>
//         <label for="password-confirm-input">
//           Confirm Password
//         </label>
//         <input
//           id="password-confirm-input"
//           name="password_confirm"
//           required
//           type="password"
//           minlength="6"
//           aria-describedby="password-mismatch-error" />
//         <div
//           class="error hidden"
//           id="password-mismatch-error">
//           The passwords do not match
//         </div>
//       </div>
//       <div>
//         <button type="submit">Sign Up</button>
//       </div>
//     </form>
//     <script src="src/index.js"></script>
//   </body>
// </html>

// ###################### index.js
import './styles.css';

async function submitForm(username, email, password, passwordConfirm) {
  try {
    const response = await fetch(
      'https://www.greatfrontend.com/api/questions/sign-up',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      }
    );

    const { message } = await response.json();
    alert(message);
  } catch (_) {
    alert('Error submitting form!');
  }
}

(() => {
  const $form = document.querySelector('form');
  const $passwordConfirmInput = document.getElementById(
    'password-confirm-input'
  );
  const $passwordMismatchError = document.getElementById(
    'password-mismatch-error'
  );

  $form.addEventListener('submit', async (e) => {
    e.preventDefault();
    $passwordConfirmInput.removeAttribute('aria-invalid');
    $passwordMismatchError.classList.add('hidden');

    const formData = new FormData($form);
    const password = formData.get('password');
    const passwordConfirm = formData.get('password_confirm');

    if (password !== passwordConfirm) {
      $passwordConfirmInput.setAttribute('aria-invalid', 'true');
      $passwordMismatchError.classList.remove('hidden');
      return;
    }

    await submitForm(
      formData.get('username'),
      formData.get('email'),
      formData.get('password'),
      formData.get('password_confirm')
    );
  });
})();

// ###################### styles.css
// body {
//     font-family: sans-serif;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     row-gap: 12px;
//   }

//   label {
//     font-size: 12px;
//   }

//   input {
//     display: block;
//   }

//   input:focus {
//     outline: 2px solid royalblue;
//   }

//   .error {
//     color: red;
//     font-size: 11px;
//     margin-top: 4px;
//   }

//   .hidden {
//     display: none;
//   }
