// ########### Questions #############################################################################
// Implement a progress bar component which shows the completion progress
// by filling the bar proportionately to the progress

// ########### app.js
import ProgressBar from './ProgressBar';
import './styles.css';

function App() {
  return (
    <div>
      <ProgressBar />
    </div>
  );
}

// ########### ProgressBar.js
function ProgressBar() {
  return <div className='progress'></div>;
}

// ########### styles.css
//   body {
//     font-family: sans-serif;
//   }

//   .progress {
//     background-color: rgb(233, 236, 239);
//     border: 1px solid #c5c5c5;
//     border-radius: 8px;
//     height: 20px;
//   }

// ########### Solution #############################################################################
// ########### app.js
import ProgressBar from './ProgressBar';
import './styles.css';

function App() {
  return (
    <div className='wrapper'>
      <ProgressBar value={0} />
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
      {/* 0, 100 */}
      <ProgressBar value={-10} />
      <ProgressBar value={120} />
    </div>
  );
}

// ########### ProgressBar.js
const MIN = 0;
const MAX = 100;

function ProgressBar({ value }) {
  // value =< 0 될 경우 --> 0
  // 100 =< value 될 경우 --> 100
  const clampedValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className='progress'>
      <div
        className='progress-bar'
        style={{ width: `${clampedValue}%` }}
        role='progressbar'
        aria-valuenow={clampedValue} // 현제 value를 적용
        aria-valuemin={MIN}
        aria-valuemax={MAX}
      >
        {clampedValue}%
      </div>
    </div>
  );
}

// ########### styles.css
// body {
//     font-family: sans-serif;
//   }

//   .wrapper {
//     display: flex;
//     flex-direction: column;
//     gap: 12px;
//   }

//   .progress {
//     background-color: rgb(233, 236, 239);
//     border: 1px solid #c5c5c5;
//     border-radius: 8px;
//     height: 20px;
//     overflow: hidden;
//   }

//   .progress-bar {
//     background-color: #0d6efd;
//     color: #fff;
//     height: 100%;
//     overflow: hidden;
//     text-align: center;
//   }
