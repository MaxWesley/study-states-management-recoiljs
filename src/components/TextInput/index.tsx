import {
  useRecoilState
} from 'recoil'

import { atom_textState } from './utils/atoms'

function TextInput() {
  const [text, setText] = useRecoilState(atom_textState)

  const onChangeText = (event: any) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChangeText}
      />
      <br />
      Echo: {text}
    </div>
  )
}

export { 
  TextInput
}