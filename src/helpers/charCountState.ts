import { atom_textState } from '../components/TextInput'

import {
  selector
} from 'recoil'

const charCountState = selector({
  key: 'chartCountState',
  get: ({get}) => {
    const text = get(atom_textState)

    return text.length
  }
})

export { 
  charCountState as charCountSelector 
}