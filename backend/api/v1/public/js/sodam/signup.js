function _sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function(data) {
      var fullAddr = '';
      var extraAddr = '';

      if (data.userSelectedType === 'R') {
        fullAddr = data.roadAddress;
      } else {
        fullAddr = data.jibunAddress;
      }

      if (data.userSelectedType === 'R') {
        if (data.bname !== '') {
          extraAddr += data.bname;
        }

        if (data.buildingName !== '') {
          extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
        }

        fullAddr += extraAddr !== '' ? ' (' + extraAddr + ')' : '';
      }

      document.getElementById('addr').value = data.zonecode; //5자리 새우편번호 사용
      document.getElementById('address1').value = fullAddr;
      document.getElementById('address2').focus();
    },
  }).open();
}

function _existValue() {
  let isExist = false; // 데이터가 없으면 true 를 변경
  textArray.forEach(textElement => {
    if (textElement.value === '') {
      isExist = true;
      return isExist;
    }
  });

  return isExist;
}

function resetButtonEvent() {
  console.log('clear Text');
  textArray.forEach(textElement => {
    textElement.value = '';
  });
}

function okButtonEvent() {
  const isExit = _existValue();

  let division = false;
  for (obj of divisionElement) {
    if (obj.checked) division = obj.value;
  }

  if (isExit) {
    alert('입력하지 않는 데이터가 존재합니다.');
    return;
  }

  const user = {
    id: textArray[0].value,
    password: textArray[1].value,
    email: textArray[3].value + '@' + textArray[4].value,
    name: textArray[5].value,
    phone: textArray[6].value + textArray[7].value + textArray[8].value,
    address: textArray[9].value + textArray[10].value + textArray[11].value,
    birthday: textArray[12].value,
    seller: division,
  };

  axios
    .post('/signup', user)
    .then(function(response) {
      const { state } = response.data;
      if (state === 400) {
        alert('error 잘못된 요청입니다.');
        window.location.href = '/error';
        return;
      }

      window.location.href = '/';
    })
    .catch(function(error) {
      console.error(error);
    });
}

// 프로그램 수행
const textArray = document.querySelectorAll('.textBox');
const resetButton = document.getElementById('btnReset');
const okButton = document.getElementById('btnSubmit');
const postButton = document.getElementById('postButton');
const divisionElement = document.getElementsByName('division');

resetButton.addEventListener('click', resetButtonEvent);
okButton.addEventListener('click', okButtonEvent);
postButton.addEventListener('click', _sample6_execDaumPostcode);
