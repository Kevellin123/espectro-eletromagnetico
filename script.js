const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const quiz = [
  {q:"Qual destas faixas é usada em exames de radiografia?", a:["Infravermelho","Raios X","Ondas de rádio"], correct:1, why:"Raios X atravessam os tecidos em diferentes proporções, permitindo formar imagens."},
  {q:"Qual afirmação descreve corretamente a frequência e o comprimento de onda?", a:["Aumentam sempre juntos","Não têm relação","No vácuo, são inversamente relacionados"], correct:2, why:"Para ondas eletromagnéticas no vácuo, frequência maior corresponde a comprimento de onda menor."},
  {q:"Qual destas opções é uma forma de radiação não ionizante?", a:["Ondas de rádio","Raios gama","Raios X"], correct:0, why:"Ondas de rádio são não ionizantes; raios X e gama são ionizantes."}
];
let current = 0;
const question = document.querySelector("#question");
const buttons = [...document.querySelectorAll(".answer")];
const feedback = document.querySelector("#feedback");
const next = document.querySelector("#next-question");
function showQuestion(){
  question.textContent = quiz[current].q;
  buttons.forEach((button,i)=>{button.textContent=quiz[current].a[i];button.disabled=false;button.hidden=false;});
  feedback.textContent="";
  next.hidden=true;
}
buttons.forEach((button,i)=>button.addEventListener("click",()=>{
  const item=quiz[current];
  buttons.forEach(b=>b.disabled=true);
  if(i===item.correct){feedback.textContent="Isso mesmo! "+item.why;}
  else{feedback.textContent="Ainda não. "+item.why;}
  next.hidden=false;
}));
next.addEventListener("click",()=>{current=(current+1)%quiz.length;showQuestion();});
