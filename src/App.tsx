import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'

function App() {

  return (
    <div className="App">
      <TextInput />
      <CharacterCount />
    </div>
  )
}

const textState = atom({
  key: 'textState',
  default: ''  
})

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState)

    return text.length
  }
})

function CharacterCount() {
  const count = useRecoilValue(charCountState)

  return <>Character Count: {count}</>
}

function TextInput() {
  const [text, setText] = useRecoilState<string>(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  }

  return(
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}
export default App
