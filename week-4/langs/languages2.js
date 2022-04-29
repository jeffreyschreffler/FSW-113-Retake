const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
const submit = document.querySelector('#submit');
submit.addEventListener('click', function(){
    const items = document.querySelectorAll('input');
    const langs = [...items];

    chkLang(langs)
})

function chkLang(langs) {
    let result = false

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    result = langs.some(element => element.value === lang)
  

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}