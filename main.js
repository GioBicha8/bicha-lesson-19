const form = document.getElementById("form");
const personal = document.getElementById("personal");
const mobile = document.getElementById("mobile");
const job = document.getElementById("job");

form.addEventListener("submit", (e) => {
 e.preventDefault()
 Validie()
});
function Validie(){
     const personalVal = personal.value.trim()
     const mobilelVal = mobile.value.trim()
     const joblVal = job.value.trim()
}
]
if(personal === ""){
    setErrorMsg(personal, 'first name cannot be blank');
}
else if(personal.length <=2){
    setErrorMsg(personal, 'min 3 char');
}
else{
    setSuccessMsg(personall);
}
