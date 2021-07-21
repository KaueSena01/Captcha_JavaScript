const capctha = document.querySelector(".captacha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector("input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-txt");

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
					 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
					 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
					 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
					  1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() {
  for (let i = 0; i < 6; i++) {
	let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
	capctha.innerText += ` ${randomChar}`;
  }
}

getCaptcha();

reloadBtn.addEventListener("click", () =>{
	capctha.innerText = "";
	getCaptcha();
});

checkBtn.addEventListener("click", e => {
	e.preventDefault(); // Impede o envio do formulário
	statusTxt.style.display = "block";

	let inputVal = inputField.value.split('').join(' ');
	if (inputVal == capctha.innerText) {
		statusTxt.style.color = "#4db2ec";
		statusTxt.innerText = "Legal! Você preencheu corretamente!";
		setTimeout(()=>{
			statusTxt.style.display = "";
			inputField.value = "";
			capctha.innerText = "";
			getCaptcha();
		}, 4000); // Limpando os dados
	}else{
		statusTxt.style.color = "#ff0000";
		statusTxt.innerText = "Captcha errado. Preencha novamente!";
	}
})