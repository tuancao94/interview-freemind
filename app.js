$(document).ready(function () {
   $('#btn').click(function () {
      alert("123");
      $.ajax({
         method: 'post',
         url: 'https://freemind-test.netlify.app/.netlify/functions/test',
         data: { 
             name: $('#input-name').val(),
             tel: $('#input-phone').val(),
             location:$('#input-location').val(),
             comment:$('#input-comment').val(),
             item:$('#default').val(),
             mail:$('#input-email').val(),
         },
         data: $('#form-box').serialize(),
         success: function (res) {
            alert(res);
         }
      });
   });
})

function isEmail(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


function save() {
   console.log("1111");
   let fullname = documentById('input_name').value;
   let tel = documentById('input-phone').value;
   let location = documentById('input-location').value;
   let comment = documentById('input-comment').value;
   let item = documentById('default').value;
   let mail = documentById('input-email').value;

   if (_.isEmpty(fullname)) {
      documentById('name-error').inNerHTML = "Vui lòng nhập vào họ tên!";
   }
   else if (fullname.trim().length <= 2) {
      documentById('name-error').inNerHTML = "Họ và tên không được nhỏ hơn 2 kí tự!";
   }
   else if (fullname.trim().length >= 50) {
      documentById('name-error').inNerHTML = "Họ và tên không được lớn hơn 50 kí tự!";
   }
   else{
      documentById('name-error').inNerHTML = " ";
   }


   if (_.isEmpty(tel)) {
      documentById('tel-error').inNerHTML = "Vui lòng nhập vào số điện thoại!";
   }
   else if (tel.trim().length > 10) {
      documentById('tel-error').inNerHTML = "Số điện thoại không đúng.Vui lòng nhập lại!";
   }
   else{
      documentById('tel-error').inNerHTML = " ";
   }


   if (_.isEmpty(mail)) {
      documentById('mail-error').inNerHTML = "Vui lòng nhập vào email!";
   }
   else if(!isEmail(mail)){
      documentById('mail-error').inNerHTML = "Email không đúng định dạng.Vui lòng nhập lại!";
   }
   else{
      documentById('mail-error').inNerHTML = " ";
   }
}