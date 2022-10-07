const abrir = document.getElementById('termino');
const modal = document.getElementById('modalito');
const cerrar = document.getElementById('close');
abrir.addEventListener('click',() =>{
    modal.classList.replace('modalito','modalito_show');
});
cerrar.addEventListener('click',()=>{
    modal.classList.replace('modalito_show','modalito')
});