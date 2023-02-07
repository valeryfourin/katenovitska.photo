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

import {aldanaJuanfer, mariaEmiliaIsrael, nathyJoseLuis, valeriaRicky, ludmilaMarcelo, marianaNico, eliJose, saritaEdwin, karenLorenzo} from './utils/weddings';
import {pattyOrlando, nikaDavid, anyaIllya} from './utils/lovestories';
import {denisse, mishell} from './utils/portraits';

export const Context = createContext(null);
ReactDOM.render(
  // <React.StrictMode>
    <Context.Provider value={{
      weddings: {
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
