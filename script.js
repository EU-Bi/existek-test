const pageInput=document.querySelector('input[type="text"]');
console.log(pageInput)
function autoPredicted(){
  pageInput.addEventListener('change', (e)=>{
    console.log(e.target.value)
    createWordArray(e.target.value)
  })
}




const createWordArray=(str)=>{
  const wordArr=str.split(' ')
  console.log(wordArr[wordArr.length-1])
}
autoPredicted()