//start
 
const selectElement = ({ s }) => document.querySelector(s);
selectElement({ s: '.open' }).addEventListener('click', () => {
    selectElement({ s: '.nav-list' }).classList.add('active');
});
selectElement({ s: '.close' }).addEventListener('click', () => {
    selectElement({ s: '.nav-list' }).classList.remove('active');
});  
/* 
const selectElement = (s) => document.querySelector(s);
selectElement('.open').addEventListener('click', () => {
    selectElement('nav-list').classList.add('active');
});
selectElement('.close').addEventListener('click', () => {
    selectElement('nav-list').classList.remove('active');
}); */