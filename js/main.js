const calculator = {
  currentInput: '',
  operator: null,
  previousInput: '',

  inputNumber(num) {
    // logic for appending number
    this.currentInput += num
    console.log("current input", this.currentInput)
    document.querySelector('#screen').innerText = this.currentInput
  },

  inputOperator(op) {
    this.operator = op
    this.previousInput = this.currentInput
    this.currentInput = ''
    console.log("previous input", this.previousInput)
  },

  calculate() {
    // logic for computing result
    if(this.operator === '+'){
      result = Number(this.currentInput) + Number(this.previousInput)
      console.log(result)
    } else if(this.operator === '-'){
      result = Number(this.previousInput) - Number(this.currentInput)
      console.log(result)
    } else if(this.operator === 'x'){
      result = Number(this.currentInput) * Number(this.previousInput)
      console.log(result)
    } else if(this.operator === '/'){
      result = Number(this.previousInput) / Number(this.currentInput)
      console.log(result)
    }
    this.currentInput = `${result}`
    document.querySelector('#screen').innerText = result
  },

  clear() {
    this.currentInput = ''
    this.operator = null
    this.previousInput = ''
    document.querySelector('#screen').innerText = 0
  }
}


document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => fillStack(btn.innerText)))
// console.log(btnArr)
function fillStack(btn){
  console.log(btn)
  if(btn === '+' || btn === '/' || btn === 'x' || btn === '-'){
    calculator.inputOperator(btn)
  } else if(btn === '='){
    calculator.calculate()
  } else {
    calculator.inputNumber(btn)
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){
    calculator.clear()
  }
})