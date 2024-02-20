import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './fonts/didactgothic/DidactGothic-Regular.ttf';
import './fonts/playfair/PlayfairDisplay-Regular.ttf';
import './fonts/windsong/WindSong-Regular.ttf';
import './index.css';
import './responsive.css';

import {aldanaJuanfer, mariaEmiliaIsrael, nathyJoseLuis, valeriaRicky, ludmilaMarcelo, 
        marianaNico, eliJose, saritaEdwin, karenLorenzo, yasSebastian, joseFer, belenFelipe} from './utils/weddings';
import {pattyOrlando, nikaDavid, anyaIllya, tusharRaksha, sofiRob} from './utils/lovestories';
import {denisse, mishell} from './utils/portraits';

export const Context = createContext(null);
ReactDOM.render(
  // <React.StrictMode>
    <Context.Provider value={{
      weddings: {
        belenFelipe,
        joseFer,
        yasSebastian,
        karenLorenzo,
        saritaEdwin,
        mariaEmiliaIsrael,
        aldanaJuanfer,
        valeriaRicky,
        nathyJoseLuis,
        eliJose,
        ludmilaMarcelo,
        marianaNico,
      },
      loveStories: {
        tusharRaksha,
        sofiRob,
        pattyOrlando,
        nikaDavid,
        anyaIllya,
      },
      portraits: {
        denisse,
        mishell,
      }
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
