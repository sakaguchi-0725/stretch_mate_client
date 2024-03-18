import { Route, Routes } from 'react-router-dom'
import Example from '../components/Example'

const ExampleRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
    </Routes>
  )
}

export default ExampleRoute