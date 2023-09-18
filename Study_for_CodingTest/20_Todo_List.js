// ########### Questions #############################################################################
// You're given some existing HTML for a Todo List app. Add the following functionality to the app:
// 1. Add new tasks on clicking the "Submit" button. The <input> field should be cleared upon successful addition.
// 2. Remove tasks from the Todo List upon clicking the "Delete" button.

import './styles.css';

export default function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type='text' placeholder='Add your task' />
        <div>
          <button>Submit</button>
        </div>
      </div>
      <ul>
        <li>
          <span>Walk the dog</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Water the plants</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Wash the dishes</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

// ########### Solution #############################################################################
import './styles.css';
import { useState } from 'react'

let id = 0  // 디폴트 함수 밖에 있어줘야 id 계산 문제 없음

export default function App() {
  const [tasks, setTasks] = useState([{ id: id++, task: 'Walk the dog' }, { id: id++, task: 'Water the plants' }, { id: id++, task: 'Wash the dishes' }])
  const [text, setText] = useState('')

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input aria-label="Add new task" type="text" placeholder="Add your task" value={text} onChange={e => setText(e.target.value)} />
        <div>
          <button onClick={() => {
            setTasks([...tasks, { id: id++, task: text }])
            setText('')
          }}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, task }) => (
          <li key={id}>
            <span>{task}</span>
            <button onClick={() => {
              setTasks(tasks.filter((toRemove) => id !== toRemove.id))
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}