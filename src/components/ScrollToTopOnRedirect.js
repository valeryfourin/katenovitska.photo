import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTopOnRedirect({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (window.location.href.includes('portfolio/')) {
        window.scrollTo(0, 0);
        window.onhashchange = () => window.location.reload()
      }
      // debugger;
    });
    return () => {
      unlisten();
    }
  });

  return (null);
}

export default withRouter(ScrollToTopOnRedirect);