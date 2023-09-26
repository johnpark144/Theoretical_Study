// ########### Questions #############################################################################
// Create a widget that renders the current time in HH:MM:SS format using a 7-segment digital display.
// You are free to choose to use 12-hour or a 24-hour display.


// ########### Solution #############################################################################
// ########### App.js
import Clock from './Clock';

import './styles.css';

export default function App() {
  return (
    <div className="wrapper">
      <Clock />
    </div>
  );
}

// ########### Clock.js
import { useEffect, useState } from 'react';

// 모든 사이드에 border가 들어갈때
const ALL_SIDES = [
  'digit-square-border-top',
  'digit-square-border-left',
  'digit-square-border-right',
  'digit-square-border-bottom',
];

// 각 숫자(0~9)를 표현 --> top부분, bottom부분 클래스
const NUMBER_TO_CLASSES = {
  0: {
    top: [
      'digit-square-border-top',
      'digit-square-border-left',
      'digit-square-border-right',
    ],
    bottom: [
      'digit-square-border-bottom',
      'digit-square-border-left',
      'digit-square-border-right',
    ],
  },
  1: {
    top: ['digit-square-border-right'],
    bottom: ['digit-square-border-right'],
  },
  2: {
    top: [
      'digit-square-border-top',
      'digit-square-border-right',
      'digit-square-border-bottom',
    ],
    bottom: [
      'digit-square-border-top',
      'digit-square-border-left',
      'digit-square-border-bottom',
    ],
  },
  3: {
    top: [
      'digit-square-border-top',
      'digit-square-border-right',
      'digit-square-border-bottom',
    ],
    bottom: [
      'digit-square-border-top',
      'digit-square-border-right',
      'digit-square-border-bottom',
    ],
  },
  4: {
    top: [
      'digit-square-border-left',
      'digit-square-border-right',
      'digit-square-border-bottom',
    ],
    bottom: [
      'digit-square-border-right',
      'digit-square-border-top',
    ],
  },
  5: {
    top: [
      'digit-square-border-top',
      'digit-square-border-left',
      'digit-square-border-bottom',
    ],
    bottom: [
      'digit-square-border-top',
      'digit-square-border-right',
      'digit-square-border-bottom',
    ],
  },
  6: {
    top: [
      'digit-square-border-top',
      'digit-square-border-left',
      'digit-square-border-bottom',
    ],
    bottom: ALL_SIDES,
  },
  7: {
    top: [
      'digit-square-border-top',
      'digit-square-border-right',
    ],
    bottom: ['digit-square-border-right'],
  },
  8: {
    top: ALL_SIDES,
    bottom: ALL_SIDES,
  },
  9: {
    top: ALL_SIDES,
    bottom: [
      'digit-square-border-top',
      'digit-square-border-right',
      'digit-square-border-bottom',
    ],
  },
};

// 숫자 프레임 생성함수
function Digit({ number }) {
  const { top, bottom } = NUMBER_TO_CLASSES[number];
  return (
    <div>
      <div
        className={[
          'digit-square',
          'digit-square-top',
          ...top, // 각각 top부분의 들어갈 클래스
        ].join(' ')}
      />
      <div
        className={[
          'digit-square',
          'digit-square-bottom',
          ...bottom, // 각각 bottom부분의 들어갈 클래스
        ].join(' ')}
      />
    </div>
  );
}

//  ':' 부분 생성 함수 
function Separator() {
  return (
    <div className="separator">
      <div className="separator-dot" />
      <div className="separator-dot" />
    </div>
  );
}

// 시간 생성 함수
function useCurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return date;
}

// 디폴트 함수
export default function Clock() {
  const date = useCurrentDate(); // 현재 시간을 가져옴

  let hours = date.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    // 10의 자리는 10으로나는 정수부분만, 1의자리는 10으로 나눠서 나머지만
    <time className="clock" >
      <Digit number={parseInt(hours / 10)} />
      <Digit number={hours % 10} />
      <Separator />
      <Digit number={parseInt(minutes / 10)} />
      <Digit number={minutes % 10} />
      <Separator />
      <Digit number={parseInt(seconds / 10)} />
      <Digit number={seconds % 10} />
    </time>
  );
}


// ########### Styles.css
// body {
//     font-family: sans-serif;
//   }
  
//   .wrapper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .clock {
//     --segment-width: 10px;
//     --segment-size: 40px;
//     --segment-color: #fff;
  
//     background-color: #000;
//     border: 10px solid #ccc;
//     border-radius: 10px;
//     display: flex;
//     gap: 10px;
//     padding: 20px;
//   }
  
//   .digit-square {
//     border-style: solid;
//     border-color: transparent; /* 일반적으로는 투명하게 */
//     border-width: var(--segment-width);
//     box-sizing: border-box;
//     height: var(--segment-size);
//     width: var(--segment-size);
//   }
  
//   /* 숫자의 윗부분, 아랫부분 겹치는부분 --> 1/2 너비로 */
//   .digit-square-top {
//     border-bottom-width: calc(var(--segment-width) / 2);
//   }
  
//   .digit-square-bottom {
//     border-top-width: calc(var(--segment-width) / 2);
//   }
  
//   /* top left right bottom중 해당부분만 적용 */
//   .digit-square-border-top {
//     border-top-color: var(--segment-color)
//   }
  
//   .digit-square-border-left {
//     border-left-color: var(--segment-color);
//   }
  
//   .digit-square-border-right {
//     border-right-color: var(--segment-color);
//   }
  
//   .digit-square-border-bottom {
//     border-bottom-color: var(--segment-color);
//   }
  
//   .separator {
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-evenly;
//   }
  
//   .separator-dot {
//     background-color: var(--segment-color);
//     border-radius: var(--segment-width);
//     height: var(--segment-width);
//     width: var(--segment-width);
//   }
  
  