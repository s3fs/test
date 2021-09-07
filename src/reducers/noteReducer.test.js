import { noteReducer } from "./noteReducer"
import deepFreeze from "deep-freeze"

describe('noteReducer', () => {
  test('return new state witn new-note action', () => {
    const state = []
    const action = {
      type: 'NEW_NOTE',
      data: {
        content: 'state changes m,ade with actions',
        important: false,
        id: 2
      }
    }

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })

  test('ret n.s.w.a. toggle-importanc3', () => {
    const state = [
      {
        content: 'the app state is in redx store',
        important: true,
        id: 1
      },
      {
        content: 'state changes m,ade with actions',
        important: false,
        id: 2
      }
    ]

    const action = {
      type: 'TOGGLE_IMPORTANCE',
      data: {
        id: 2
      }
    }

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(state[0])
    expect(newState).toContainEqual({
      content: 'state changes m,ade with actions',
      important: false,
      id: 2
    })
  })
})