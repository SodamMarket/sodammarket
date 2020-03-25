const signInButton = document.getElementById('btnLogin');
const signUpButton = document.getElementById('btnJoin');
const signOutElement = document.getElementById('signout');

signInButton.addEventListener('click', () => {
  const id = document.getElementById('userId').value;
  const password = document.getElementById('userPassword').value;

  const loginData = {
    id,
    password,
  };
  axios
    .post('/signin', loginData)
    .then(function(response) {
      const { state } = response.data;
      if (state === 400) {
        alert('해당 정보가 존재하지 않습니다.');
        return;
      }

      window.location.href = '/';
    })
    .catch(function(error) {
      console.log(error);
    });
});

signUpButton.addEventListener('click', () => {
  window.location.href = '/signup';
});

if (signOutElement) {
  signOutElement.addEventListener('click', () => {
    // console.log('logout click');
    window.location.href = '/signout';
  });
}
