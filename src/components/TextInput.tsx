import {
  atom,
  useRecoilState
} from 'recoil'

const textState = atom({
  key: 'textState',
  default: ''
});

function TextInput() {
  const [text, setText] = useRecoilState(textState)

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
  TextInput,
  textState as atom_textState
}