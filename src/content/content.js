import axios from 'axios'
var word_el = ''
var synonym_list = []

const handleChange = (event) => {
    word_el = event.target.value;
};
const fecthSynonym = (e) =>{
    
    e.preventDefault();
    console.log(word_el)

    if(word_el!=''){

      const waiting = document.getElementById('waiting')
      const error = document.getElementById('error')
      const errorText = document.getElementById('error_text')
      const syn_result = document.getElementById('result')
      const syn_list = document.getElementById('result_list')
      const syn_title = document.getElementById('syn_title')
      const loader = document.getElementById('loader')

      waiting.style.display = 'none'
      syn_result.style.display = 'none'
      error.style.display = 'none'
      loader.style.display = 'grid'

      const request_word = word_el.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      const url = `https://api-synonyms.herokuapp.com/api/v1/resources/synonym?word=`+request_word
      
      console.log(url)

      axios.get(url)
      .then(res=>{

        loader.style.display = 'none'
        const result = res.data

        console.log(result.syn)

        if(result.syn==null){
          console.log("erro")
          error.style.display = 'block'
          errorText.innerHTML = result
          
        }
        else{
          syn_list.innerHTML=""
          synonym_list = result.syn;
          console.log(synonym_list)
          synonym_list.forEach((syn)=>{
            var entry = document.createElement('li')
            var text = ''
            syn.forEach((w)=>{
              text += w + "; "
            })
            entry.innerHTML = text
            syn_list.appendChild(entry)
          })
          syn_result.style.display='block'
          syn_title.innerHTML=word_el
        }
      })

    }
  }
export {handleChange, fecthSynonym}

