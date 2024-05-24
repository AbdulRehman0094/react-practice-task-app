
import './App.css'
import Box_Color_Task from './components/Box_Color_Task'
import ClrPalt from './components/Pallet'
import Test from './components/Test'
import { useContext ,useState} from 'react'
import context from './components/context/Context'
import ShuffleArray from './components/ShuffleArray'

function App() {

  const [selectedColor, setSelectedColor] = useState(null);
   const value = selectedColor;


  return (
    <>
    <context.Provider value={value}> 
      {/* <Box_Color_Task/> */}
      <Test />
      <ClrPalt state={selectedColor} setSelectedColor={setSelectedColor}/>
      <ShuffleArray/>
      </context.Provider>
    </>
  )
}

export default App
