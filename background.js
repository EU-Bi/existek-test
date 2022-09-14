const body = document.querySelector('body')
const pageInput=document.querySelector('input[type="text"]');
console.log(pageInput.value)
document.onkeypress=function(e){
  if(e.code==='Space'){
    results=[]
    ul.innerHTML=''
  }
}
let wordArr
pageInput.addEventListener('input', (e)=>{
  results=[]
  ul.innerHTML=''
  wordArr=e.target.value.split(' ')
  if(wordArr[wordArr.length-1]==' '){
    results=[]
    ul.innerHTML=''
  }
  createWordArray(wordArr)
  results=results.sort((a,b)=>a.relevance-b.relevance).reverse()
  generateHTML(results)
  const li = document.querySelectorAll('.li_mydiv')
  li.forEach((e)=>{
    e.addEventListener('click',(e)=>{
      wordArr[wordArr.length-1]=e.target.outerText
      
      replaceWord=wordArr.join(' ')
      console.log(replaceWord)
      pageInput.value=replaceWord
  
      })
    })
    
  
})


console.log(pageInput.parentElement)
const wordBox=document.createElement('div')
wordBox.classList.add('mydiv')
body.appendChild(wordBox)
console.log(wordBox)



const vocabulary=['Dog','Rat','Bat','Hello','Help','Hell','Held']

function get_bigrams(string){
  var s = string.toLowerCase()
  var v = s.split('');
  for(var i=0; i<v.length; i++){ v[i] = s.slice(i, i + 2); }
  return v;
}

function string_similarity(str1, str2){
  if(str1.length>0 && str2.length>0){
    var pairs1 = get_bigrams(str1);
    var pairs2 = get_bigrams(str2);
    var union = pairs1.length + pairs2.length;
    var hits = 0;
    for(var x=0; x<pairs1.length; x++){
      for(var y=0; y<pairs2.length; y++){
        if(pairs1[x]==pairs2[y]) hits++;
    }}
    if(hits>0) return ((2.0 * hits) / union);
  }
  return 0.0
}
let results=[]


const createWordArray=(str)=>{
  console.log(str[str.length-1])
  vocabulary.forEach(item=>{
    const relevance = string_similarity(str[str.length-1],item)
    let obj ={word:item, relevance:relevance}
    if(obj.relevance>0){
      results.push(obj) 
    }    
  })
}
let ul=document.createElement('ul')
wordBox.appendChild(ul)
ul.classList.add('list_mydiv')
let replaceWord=''
const generateHTML=(arr)=>{
  
  arr.sort((a,b)=>a.relevance-b.relevance)
  for(let i=0;i<4;i++){
    console.log(arr[i].word)
    if(arr.length>4){
      ul.innerHTML=''
      return arr=[]
    }
    else{
      ul.innerHTML+=`<li class="li_mydiv" value=${arr[i].word}>${arr[i].word}</li>`
    
    }
    
  }
  
}

