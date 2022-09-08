const wordBox=document.createElement('div')
const pageInput=document.querySelector('input[type="text"]');
console.log(pageInput)
function autoPredicted(){
  pageInput.addEventListener('input', (e)=>{
    console.log(e.target.value)
    createWordArray(e.target.value)
  })
}



localStorage.localWords=[]
const createWordArray=(str)=>{
  const wordArr=str.split(' ')
  console.log(wordArr[wordArr.length-1])
  wordBox.innerHTML=wordArr[wordArr.length-1]
  pageInput.appendChild(wordBox)
}

// const createText=(text)=>{
//   const reader = new FileReader()
//   reader.readAsText(text,'windows-1251')
//   reader.onload=()=>{
//     console.log(reader.result)
//   }
  
// }
autoPredicted()
// createText(txt)