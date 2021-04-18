
function isEmail(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function save() {
   let fullname = document.getElementById('input-name').value;
   let tel = document.getElementById('input-phone').value;
   let location = document.getElementById('input-location').value;
   let comment = document.getElementById('input-comment').value;
   let item = document.getElementById('default').value;
   let mail = document.getElementById('input-email').value;

   if (_.isEmpty(fullname)) {
      documentById('name-error').innerHTML = "Vui lòng nhập vào họ tên!";
      return;
   }
   else if (fullname.trim().length <= 2) {
      documentById('name-error').innerHTML = "Họ và tên không được nhỏ hơn 2 kí tự!";
      return;
   }
   else if (fullname.trim().length >= 50) {
      documentById('name-error').innerHTML = "Họ và tên không được lớn hơn 50 kí tự!";
      return;
   }
   else{
      documentById('name-error').innerHTML = " ";
   }


   if (_.isEmpty(tel)) {
      documentById('tel-error').innerHTML = "Vui lòng nhập vào số điện thoại!";
      return;
   }
   else if (tel.trim().length > 10) {
      documentById('tel-error').innerHTML = "Số điện thoại không đúng.Vui lòng nhập lại!";
      return;
   }
   else{
      documentById('tel-error').innerHTML = " ";
   }


   if (_.isEmpty(mail)) {
      documentById('mail-error').innerHTML = "Vui lòng nhập vào email!";
      return;
   }
   else if(!isEmail(mail)){
      documentById('mail-error').innerHTML = "Email không đúng định dạng.Vui lòng nhập lại!";
      return;
   }
   else{
      documentById('mail-error').innerHTML = " ";
   }

   // $.ajax({
   //    method: 'post',
   //    url: 'https://freemind-test.netlify.app/.netlify/functions/test',
   //    data: { 
   //        name: $('#input-name').val(),
   //        phone: $('#input-phone').val(),
   //        position:$('#input-location').val(),
   //        exp:$('#input-comment').val(),
   //        picture:$('input[type=file]').val().replace(/.*(\/|\\)/, ''),
   //        email:$('#input-email').val(),
   //    },
   //    data: $('#form-box').serialize(),
   //    success: function (res) {
   //       alert(res);
   //    }
   // });
}

$(document).ready(function () {
   $('#btn').click(function () {
      $.ajax({
         method: 'post',
         url: 'https://freemind-test.netlify.app/.netlify/functions/test',
         data: { 
             name: $('#input-name').val(),
             phone: $('#input-phone').val(),
             position:$('#input-location').val(),
             exp:$('#input-comment').val(),
             picture:$('input[type=file]').val().split('\\').pop(),
             email:$('#input-email').val(),
         },
         success: function (res) {
            alert(res);
         }
      });
   });
})
