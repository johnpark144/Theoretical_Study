// ########### Questions #############################################################################
// -- Header
// Stretches horizontally across the whole page.
// 60px tall.
// -- Columns
// Both the left and right columns have a fixed width of 100px.
// The center column is fluid-width.
// All the columns should have the same height, regardless of which column is the tallest.
// -- Footer
// Stretches horizontally across the whole page.
// 100px tall.
// The footer should be at the bottom of the page even if there is not enough content to fill up the viewport height.

import './styles.css';

export default function App() {
  return (
    <>
      <header>Header</header>
      <div>
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}

// body {
//   font-family: sans-serif;
//   font-size: 12px;
//   font-weight: bold;
//   margin: 0;
// }

// * {
//   box-sizing: border-box;
// }

// header,
// nav,
// main,
// aside,
// footer {
//   padding: 12px;
// }

// header {
//   background-color: tomato;
// }

// nav {
//   background-color: coral;
// }

// main {
//   background-color: moccasin;
// }

// aside {
//   background-color: sandybrown;
// }

// footer {
//   background-color: slategray;
// }


/* // ########### Solution ############################################################################# */
import './styles.css';

export default function App() {
  return (
    <>
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}

// body {
//     font-family: sans-serif;
//     font-size: 12px;
//     font-weight: bold;
//     margin: 0;
//     min-height: 100vh;
//   }
  
//   #root {
//     display: flex;
//     flex-direction: column;
//     min-height: 100vh;   // height가 있어줘야 하위 태그들에 flex, flex-grow, flex-shrink가 작동함
//   }
  
//   * {
//     box-sizing: border-box;
//   }
  
//   header,
//   nav,
//   main,
//   aside,
//   footer {
//     padding: 12px;
//     text-align: center;
//   }
  
//   header {
//     background-color: tomato;
//     height: 60px;
//   }
  
//   .columns {
//     display: flex;
//     flex-grow: 1;
//   }
  
//   nav {
//     background-color: coral;
//     flex-shrink: 0;
//     width: 100px;
//   }
  
//   main {
//     background-color: moccasin;
//     flex-grow: 1;
//   }
  
//   aside {
//     background-color: sandybrown;
//     flex-shrink: 0;
//     width: 100px;
//   }
  
//   footer {
//     background-color: slategray;
//     height: 100px;
//   }
  