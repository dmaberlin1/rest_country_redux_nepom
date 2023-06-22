import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Main>
        <Routes>
          <Route exact path={'/'} element={<HomePage/>}/>
          <Route path={'/country/:name'} element={<Details/>}/>
          <Route path={'*'} element={<NotFound/>}/>
        </Routes>
      </Main>
    </>
  );
}

export default App;
