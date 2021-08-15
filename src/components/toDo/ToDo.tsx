import { useSelector, useDispatch } from 'react-redux'
import { setText, setTitle, setId, setAll, deletePost } from './toDoSlice'
import type { RootState } from '../../app/store'
import { v4 as uuidv4 } from 'uuid'
import { Action } from '@reduxjs/toolkit'

export function ToDo() {

  const elem = useSelector((state: RootState) => ({text: state.toDo.inputText, title: state.toDo.inputTitle, id: state.toDo.inputId }))
  const elems = useSelector((state: RootState) =>  state.toDo.elems)
  const dispatch = useDispatch()
  const dispatchAll = (actions: Action[]) => actions.map(action => dispatch(action))

  return (
    <div>
      <input type="text"
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => 
          dispatch(setTitle(e.target.value))
        }
      />
      <input type="text" 
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setText(e.target.value))
        }
      />

      <button onClick={() => dispatchAll([setId(uuidv4()), setAll(elem)])}>Post</button>
      
      {elems.map(x => 
        <body>
          {x.title}
          {x.text}
          <button onClick={() => dispatch(deletePost(x.id))}> Delete</button>
        </body>

      )}
    </div>
  )
}

