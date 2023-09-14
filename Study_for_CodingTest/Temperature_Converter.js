// ########### Questions #############################################################################
// Build a simple temperature converter widget that contains two text inputs temperatures in Celsius and Fahrenheit respectively
// allowing for conversion between the temperature scales.

// 화씨 섭씨 변환기 (화씨 input 에서 쓰면, 섭씨에서 변하고, vice versa)
// ########### Solution 1 #############################################################################
// ########### app.js
import { useState } from 'react';
import './styles.css';

function format(number) {
  // Show 4 d.p. if number has more than 4 decimal places.
  return /\.\d{5}/.test(number) ? Number(number).toFixed(4) : number;
}

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function convert(value, setDestination, calculateValue) {
    const numericValue = Number(value);
    const isValid = !Number.isNaN(numericValue) && Boolean(value);
    setDestination(isValid ? format(calculateValue(numericValue)) : '');
  }

  return (
    <div>
      <div className='temperature-converter'>
        {/* Use a label for better a11y. */}
        <label className='temperature-converter-column'>
          <input
            className='temperature-converter-column-top-row'
            type='number'
            value={celsius}
            onChange={(event) => {
              const newValue = event.target.value;
              setCelsius(newValue);
              convert(newValue, setFahrenheit, (value) => (value * 9) / 5 + 32);
            }}
          />
          <div className='temperature-converter-column-bottom-row'>Celsius</div>
        </label>
        <div className='temperature-converter-column'>
          <div className='temperature-converter-column-top-row'>=</div>
        </div>
        {/* Use a label for better a11y. */}
        <label className='temperature-converter-column'>
          <input
            className='temperature-converter-column-top-row'
            type='number'
            value={fahrenheit}
            onChange={(event) => {
              const newValue = event.target.value;
              setFahrenheit(newValue);
              convert(newValue, setCelsius, (value) => ((value - 32) * 5) / 9);
            }}
          />
          <div className='temperature-converter-column-bottom-row'>
            Fahrenheit
          </div>
        </label>
      </div>
    </div>
  );
}
// ########### style.css
// body {
//     font-family: sans-serif;
//   }

//   .temperature-converter {
//     display: flex;
//   }

//   .temperature-converter
//     .temperature-converter-column-top-row {
//     align-items: center;
//     display: flex;
//     font-size: 18px;
//     height: 24px;
//     padding: 4px;
//     text-align: center;
//   }

//   .temperature-converter
//     .temperature-converter-column-bottom-row {
//     padding: 4px;
//     text-align: center;
//   }

// ########### Solution 2 (내가 씀)#############################################################################
// ########### app.js
import './styles.css';
import { useState } from 'react';

function format(number) {
  // 소수점 4개 넘어가면 4개 고정
  const tempArr = String(number).split('');
  const numberBehindDot = tempArr.slice(tempArr.indexOf('.'));
  if (3 < numberBehindDot.length) return Number(number).toFixed(4);
  else return number;
}

export default function App() {
  const [cValue, setCValue] = useState(0);
  const [fValue, setFValue] = useState((cValue * 9) / 5 + 32);

  const convertValue = (e, degree) => {
    let newValue = e.target.value;
    if (degree === 'c') {
      setCValue(newValue);
      setFValue(format((newValue * 9) / 5 + 32));
    } else {
      setFValue(newValue);
      setCValue(format((newValue - 32) / (9 / 5)));
    }
  };

  return (
    <div className='container'>
      <div className='celciusContainer'>
        <input value={cValue} onChange={(e) => convertValue(e, 'c')} />
        <div>Celcius</div>
      </div>
      <div className='equality'>=</div>
      <div className='fahrenheitContainer'>
        <input value={fValue} onChange={(e) => convertValue(e, 'f')} />
        <div>Fahrenheit</div>
      </div>
    </div>
  );
}

// ########### style.css
// body {
//     font-family: sans-serif;
//   }

//   .container{
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     padding: 4px;
//     column-gap: 10px;
//   }

//   .celciusContainer{
//     height: 80px;
//     flex: 1;
//     border: 1px lightgray solid;
//   }

//   .celciusContainer > input {
//     height: 60%;
//     text-align: center;
//     font-weight: 500;
//   }

//   .celciusContainer > div:nth-child(2){
//     border-top: 1px lightgray solid;
//     border-bottom: 1px lightgray solid;
//     height: 40%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #f0f0f0;
//     font-weight: 600;
//   }

//   .equality{
//     font-size: 28px;
//     padding-top: 10px;
//     color: gray;
//   }

//   .fahrenheitContainer{
//     height: 80px;
//     flex: 1;
//     border: 1px lightgray solid;
//   }

//   .fahrenheitContainer > input {
//     height: 60%;
//     text-align: center;
//     font-weight: 500;
//   }

//   .fahrenheitContainer > div:nth-child(2){
//     border-top: 1px lightgray solid;
//     border-bottom: 1px lightgray solid;
//     height: 40%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #f0f0f0;
//     font-weight: 600;
//   }
