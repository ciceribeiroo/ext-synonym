import './App.css';
import {handleChange, fecthSynonym} from './content/content';

function App() {      
  return (
    <div>
      <div className="container">
        <form className="search_wrapper" onSubmit={fecthSynonym}>
            <input id="search_input" type="text" placeholder="Digite a palavra aqui" onChange={handleChange}></input>
            <button type='submit' id="search_btn">Pesquisar</button>
        </form>
        <div className='result_wrapper'>
          <div id='loader' className="spinner_container">
            <div className="loading_spinner"></div>
          </div>
          <div id='error' className="error_wrappper">
            <h2 id='error_text'></h2>
          </div>
          <div id='result' className="synonym_wrapper">
            <div className="title">
              <h1 id='syn_title'></h1>
            </div>
            <div id="result_list" className="synonym_list">
            </div>
          </div>
        <div id='waiting' className="wainting_search">
          <h2>Pesquise um sinônimo acima</h2>
        </div>
      </div>        
        <footer>
            <div className="line"></div>
            <p>Dados retirados de &nbsp;<a href="https://sinonimos.com.br" target="_blank"> sinonimos.com.br</a> &nbsp;&nbsp;| com &#128420; por &nbsp;<a href="https://github.com/ciceribeiroo" target="_blank">ciceribeiro</a></p>
        </footer>
    </div>
    
    </div>
    
    
  );
}

export default App;
