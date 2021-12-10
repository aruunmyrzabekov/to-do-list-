const input = document.querySelector('input')
const btn = document.querySelector('.addTask  >  button')

btn.addEventListener('click', addList)
input.addEventListener('keyup',(e)=>{
    (e.keyCode === 13 ? addList(e):null)
})

function addList(e) {
    const not = document.querySelector('.not')
    const com = document.querySelector('.com')

    const newli = document.createElement('li')
    const checkbtn = document.createElement('button')
    checkbtn.classList.add('btn2')
    const delbtn = document.createElement('button')
    delbtn.classList.add('btn3')
    

    if(input.value !== ''){
        newli.textContent = input.value
        input.value = ''
        not.appendChild(newli)
        newli.appendChild(checkbtn)
        newli.appendChild(delbtn )
        let local = []
        local.push(JSON.stringify(newli))
        localStorage.setItem('work', local)

    }
    checkbtn.addEventListener('click',function(){
        const parent = this.parentNode
        parent.remove()
        com.appendChild(parent)
        checkbtn.style.display = 'none'
    })

    delbtn.addEventListener('click',function(){
        const parent = this.parentNode
        parent.remove()
    })
}