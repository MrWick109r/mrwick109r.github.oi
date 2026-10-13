const roles = ['Junior System Developer', 'Web Developer', 'Problem Solver'];
const el = document.getElementById('typed');
let r = 0, c = 0, deleting = false;

function type() {
  const word = roles[r];
  el.textContent = word.slice(0, c);
  if (!deleting && c < word.length) c++;
  else if (!deleting) { deleting = true; return setTimeout(type, 1200); }
  else if (c > 0) c--;
  else { deleting = false; r = (r + 1) % roles.length; }
  setTimeout(type, deleting ? 50 : 100);
}
type();

function check(){
    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let number = document.getElementById("number").value.trim();
    let email = document.getElementById("email").value.trim();
    let p = document.getElementById("p");
    let pp = document.getElementById("pp");
    let ppp = document.getElementById("ppp");
    let pppp = document.getElementById("pppp");
    let allValid = true;


    if(name === ""){
        p.textContent = "Empty field";
        p.style.color = "red";
        allValid = false;

        
    }

    else{
        p.textContent = "VALID";
        p.style.color = "green";
        
       
    }

    if(surname === ""){
        pp.textContent = "Empty field";
        pp.style.color = "red";
        allValid = false;
    }

    else{
        pp.textContent ="VALID";
        pp.style.color ="green" ;

    }

    if(number === ""){
        ppp.textContent = "Empty field";
        ppp.style.color = "red";
        allValid = false;
    }

    else{
        ppp.textContent = "VALID";
        ppp.style.color = "green";
       
    }

    if(email === ""){
        pppp.textContent = "Empty field";
        pppp.style.color = "red";
        allValid = false;
    }

    else{
        pppp.textContent = "VALID";
        pppp.style.color = "green";
        
    }

    if(allValid){
        alert("GRANTED!");
    }
}
check();

