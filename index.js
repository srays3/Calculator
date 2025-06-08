const root = document.getElementById('root')
root.innerHTML = ''
root.style.backgroundColor = "#2e3440"
root.style.width = "max-content"
root.style.justifyContent = "center"
root.style.marginTop = "10%"
root.style.marginLeft = "40%"


const title = document.createElement('h2')
title.innerText = "Basic Calculator"
title.style.color = "white"
title.style.textAlign = "center"
root.appendChild(title)

const display = document.createElement('input')
display.type = 'text'
display.placeholder = '0'
display.readOnly = true
display.style.width = '200px'
display.style.fontSize = '20px'

root.appendChild(display)
root.appendChild(document.createElement('br'))

let expression = ''

function appendToExpression(value){
    expression+= value
    display.value = expression
}

function calculate(){
    try{
        const result = eval(expression)
        display.value = result
        expression = result.toString()
    }catch(e){
        console.log(e)
        display.value = 'Error'
        expression = ''
    }
}

function createButton(label, onClickFunc){
    const button = document.createElement('button')
    button.innerText = label
    button.style.width = '45px'
    button.style.height = '45px'
    button.style.margin = '2px'
    button.onclick = onClickFunc
    root.appendChild(button)
}

const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
]

buttons.forEach(label => {
    if (label === '='){
        createButton(label, calculate)
    } else {
        createButton(label,() => appendToExpression(label))
    }

    if((buttons.indexOf(label) + 1) % 4 === 0){
        root.appendChild(document.createElement('br'))
    }
}
)

createButton('C', () => {
    expression = ''
    display.value = ''
})