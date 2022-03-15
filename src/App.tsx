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
    </div>
  )
}

const textState = atom({
  key: 'textState',
  default: ''  
})

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
