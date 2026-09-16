const $=(s)=>document.querySelector(s);const $$=(s)=>document.querySelectorAll(s);
const toast=(msg)=>{const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500)};
$('.menu-toggle').addEventListener('click',()=>$('.nav').classList.toggle('open'));
$$('.nav a').forEach(a=>a.addEventListener('click',()=>$('.nav').classList.remove('open')));
$$('.tab').forEach(tab=>tab.addEventListener('click',()=>{$$('.tab').forEach(x=>x.classList.remove('active'));tab.classList.add('active');toast('Mode « '+tab.textContent+' » sélectionné.')}));
$('#flightForm').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);toast(`Demande reçue : ${data.get('from')} → ${data.get('to')}. Un conseiller vous recontactera.`);});
$('#contactForm').addEventListener('submit',e=>{e.preventDefault();toast('Merci ! Votre demande a bien été enregistrée (démo).');e.target.reset();});
function openModal(id){const m=$('#'+id);m.classList.add('show');m.setAttribute('aria-hidden','false')};function closeModal(m){m.classList.remove('show');m.setAttribute('aria-hidden','true')}
$$('[data-modal]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.modal)));
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>closeModal(b.closest('.modal'))));
$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m)}));
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();closeModal($('#loginModal'));toast('Connexion de démonstration réussie. À relier à votre backend.');});
$('#registerLink').addEventListener('click',e=>{e.preventDefault();toast('Page d’inscription à connecter au backend.');});
$$('[data-quote]').forEach(b=>b.addEventListener('click',()=>{openModal('loginModal');toast('Vous demandez des informations sur : '+b.dataset.quote)}));
const today=new Date().toISOString().split('T')[0];document.querySelector('input[name="date"]').min=today;document.querySelector('input[name="returnDate"]').min=today;
