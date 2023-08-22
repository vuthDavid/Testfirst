const form = document.querySelector('form');
const resultdiv = document.querySelector('.result');
form.addEventListener('submit', (e)=>{
   e.preventDefault();
    getWordInfo(form.elements[0].value);
    
});
const getWordInfo = (word)=>{
    // const resspone =await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello/en/${word}');
    // const data = await.resspone.json();
    // resultdiv.innerHTML='<h2>${data[0].meanings[0].definitions[0].definition} </h2>';

    // console.log(data);

    alert ("Word:" + word);

}