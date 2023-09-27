// ########### Questions #############################################################################
// Make the text within the button display the number of times the button has been clicked.

















// ########### Solution #############################################################################
import { useState } from 'react';

import './styles.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
}
