import { Habits } from './components/Habits';

function App() {
  return (
    <>
      <Habits completed={3} />
      <Habits completed={12} />
      <Habits completed={30} />
    </>
  );
}

export default App;
