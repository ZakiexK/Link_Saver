const list = document.getElementById('list-el')
const input = document.getElementById('input-el')
const button = document.getElementById('btn-el')
const button2 = document.getElementById('btn-el2')
let myarr = []

button2.addEventListener('click',function()
{
    list.innerHTML=null
    console.log('something is happening')
    myarr.pop()
    console.log(myarr)
    for (let i = 0; i < myarr.length; i++) {
        list.innerHTML += '<li class="list-group-item">' + myarr[i] + '</li>';
    }

})

button.addEventListener('click',function()
{
    renderitems()
})


 function renderitems() {
            const temp = input.value;
            myarr.push(temp);

            for (let i = 0; i < myarr.length; i++) {
                list.innerHTML += '<li class="list-group-item">' + myarr[i] + '</li>';
            }
        }