let dado = Number(prompt ('Qual dado você quer ver? (1 à 6)'));

let choice = document.querySelector(`.d${dado}`);
choice.classList.remove("escondido");