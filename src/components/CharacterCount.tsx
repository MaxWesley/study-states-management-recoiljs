import { charCountSelector } from "../helpers/charCountState"
import { useRecoilValue } from "recoil"

function CharacterCount() {
  const count = useRecoilValue(charCountSelector)

  return(
    <>Character Count: {count}</>
  )
}

export {
  CharacterCount
}