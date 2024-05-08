var form = document.querySelector(".form-enquiry");
var messageArea = document.querySelector(".message-area");
var closeButton = document.querySelector(".close");

var formName = document.querySelector("#ename");
//var formCompany = document.querySelector("#ecompany");
var formEmail = document.querySelector("#eemail");
var formPhone = document.querySelector("#etel");
function createMessagesForRows(rows,type){
   var rowList = rows.split('<br>');
   for(let i = 0;i<rowList.length;i++){
    createMessage(rowList[i],type);
   }
   
}
function createMessage(name,type){

    if(name!=""){

        messageArea.innerHTML+= "<div class='validation-message " + type + "'><button type='button' class='close'>×</button>" + name + "</div>";
        if(name.includes("Name")){
            formName.classList.add("bad");
        }
        if(name.includes("Email")){
            formEmail.classList.add("bad");
        }

        if(name.includes("Phone")){
            formPhone.classList.add("bad");
        }

    }
    
}
function submitForm(e){
e.preventDefault();
var formData = new FormData(form);
//console.log("Absolute URL:" + convertRelativeToAbsoluteUrl('php/formValidation'));
fetch('php/formValidation.php',{
    method: "POST",
    body: formData,
  }).then(response =>
    { if(!response.ok){
        throw new Error("Bad Response");
    }
    return response.text();
    }).then(res => {
        console.log(res);
        messageArea.innerHTML = "";
        if(res.includes("Your message has been sent!")){
            resetFormControlBad();
            createMessage(res,"good");
        }
        else{
            resetFormControlBad();
            createMessagesForRows(res,"bad");
        }
    })
    .catch(error => console.log(error));
}

form.addEventListener('submit',submitForm);
messageArea.addEventListener('click',(e)=>{
    if(e.target.classList.contains('close')){
        e.target.parentNode.remove();
    }

});
//Resets the bad status of form controls to not bad
function resetFormControlBad(){
    formName.classList.remove("bad");
    formEmail.classList.remove("bad");
    formPhone.classList.remove("bad");
}
function convertRelativeToAbsoluteUrl(relativeUrl) {
    var anchor = document.createElement('a');
    anchor.href = relativeUrl;
    return anchor.href; // This will return the absolute URL
  }