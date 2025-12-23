import { HStack } from './components/Stack'

function App() {
  return (
    <>
      {/* Stack 컴포넌트 */}
      <HStack
        gap="1rem"
        // justify="space-between"
        className="bg-gray-100 p-6 rounded-lg shadow-md"
        onClick={() => console.log('Clicked!')}
      >
        <div>아이템 1</div>
        <div>아이템 2</div>
      </HStack>
    </>
  )
}

export default App
