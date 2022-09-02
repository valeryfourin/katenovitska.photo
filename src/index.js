import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './fonts/didactgothic/DidactGothic-Regular.ttf';
import './fonts/playfair/PlayfairDisplay-Regular.ttf';
import './fonts/windsong/WindSong-Regular.ttf';
import {ValeriaRicky, MariaEmiliaIsrael, AldanaJuanfer, NathyJoseLuis, LudmilaMarcelo, MarianaNico, EliJose} from './utils/weddingsArray';
import {PattyOrlando, NikaDavid, AnyaIllya} from './utils/lovestoriesArray';
import {Denisse, Mishell} from './utils/portraitsArray';

export const Context = createContext(null);
ReactDOM.render(
  // <React.StrictMode>
    <Context.Provider value={{
      // weddings
      valeriaRicky: new ValeriaRicky(),
      mariaEmiliaIsrael: new MariaEmiliaIsrael(),
      aldanaJuanfer: new AldanaJuanfer(),
      nathyJoseLuis: new NathyJoseLuis(),
      ludmilaMarcelo: new LudmilaMarcelo(),
      marianaNico: new MarianaNico(),
      // love stories
      pattyOrlando: new PattyOrlando(),
      nikaDavid: new NikaDavid(),
      anyaIllya: new AnyaIllya(),
      // portraits
      denisse: new Denisse(),
      mishell: new Mishell(),
      eliJose: new EliJose(),
    }}>
    {/* <Suspense fallback={(<div>Loading</div>)}> */}
      {/* <Spinner animation="border" role="status" variant="danger">
        <span className="sr-only">Loading...</span>
      </Spinner> */}
      <App />
    {/* </Suspense> */}
    </Context.Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
