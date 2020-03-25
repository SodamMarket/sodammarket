const liveStockElement = document.getElementsByName('livestock');
const enrollButton = document.getElementById('btnSubmit');
const textElement = document.querySelectorAll('.textBox');
const sellerElement = document.getElementById('seller');

const specialListElement = document.getElementById('specialList');

enrollButton.addEventListener('click', async function() {
  // liveStock
  let liveStock = '';
  for (element of liveStockElement) {
    if (element.checked) {
      liveStock = element.value;
    }
  }

  const result = await axios.get('/contents/total');
  const { topIndex } = result.data;
  console.log('topIndex', topIndex);

  const contents = {
    liveStock,
    productName: textElement[0].value,
    seller: sellerElement.textContent.trim(),
    price: parseInt(textElement[1].value),
    specialPrice: parseInt(textElement[2].value),
    weight: parseFloat(textElement[3].value),
  };

  const specialUserList = specialListElement.value.split(', ');
  const specialUser = {
    productid: topIndex,
    specialusers: specialUserList,
  };

  console.log('specialUser', specialUser);

  let isEnrollContents = false;
  let isSpecialContents = false;

  await axios
    .post('/enroll', contents)
    .then(function(response) {
      const { state } = response.data;
      if (state === 400) {
        alert('제품등록 과정에서 오류가 발생했습니다.');
        window.location.href = '/error';
        return;
      }
      isEnrollContents = true;
    })
    .catch(function(error) {
      console.error(error);
    });

  if (!(specialUserList.length && specialUserList[0] === '')) {
    await axios
      .post('/enroll/special', specialUser)
      .then(function(response) {
        const { state } = response.data;
        if (state === 400) {
          alert('제품등록 과정에서 오류가 발생했습니다. (유저)');
          window.location.href = '/error';
          return;
        }
        isSpecialContents = true;
      })
      .catch(function(error) {
        console.error(error);
      });
  } else {
    isSpecialContents = true;
  }

  console.log('isEnrollContents', isEnrollContents);
  console.log('isSpecialContents', isSpecialContents);
  if (isEnrollContents && isSpecialContents) {
    alert('정상적으로 제품이 등록되었습니다. ');
    window.location.href = '/';
  }
});
