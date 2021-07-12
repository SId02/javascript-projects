
	 document.querySelector(".name").addEventListener("blur", checkName);
   document.querySelector(".email").addEventListener("blur", checkEmail);
   document.querySelector(".mobile").addEventListener("blur", checkMobile);
   document.querySelector(".pincode").addEventListener("blur", checkPincode);

   // Function to Validate Name
   function checkName() {
     const name = document.querySelector(".name");
     const regName = /^[a-zA-Z]{3,30}$/;
     if (!regName.test(name.value)) {
       name.classList.add("is-danger ");
     } else {
       name.classList.remove("is-danger ");
     }
   }

   // Function to Validate Email Id
   function checkEmail() {
     const email = document.querySelector(".email");
     const regEmail = /^[a-z0-9]+@[a-z0-9]*\.[a-z]+$/i;
     if (!regEmail.test(email.value)) {
       email.classList.add("is-danger");
     } else {
       email.classList.remove("is-danger");
     }
   }

   // Function to Validate Mobile No
   function checkMobile() {
     const mobile = document.querySelector(".mobile");
     const regMobile = /^[789]\d{9}$/;
     if (!regMobile.test(mobile.value)) {
       mobile.classList.add("is-danger");
     } else {
       mobile.classList.remove("is-danger");
     }
   }

   // Function to PinCode
   function checkPincode() {
     const pin = document.querySelector(".pincode");
   const regPincode = /^[1-9]{1}[0-9]{5}$/;
	
     if (!regPincode.test(pin.value)) {
       pin.classList.add("is-danger");
     } else {
       pin.classList.remove("is-danger");
     }
   }
	
	








































