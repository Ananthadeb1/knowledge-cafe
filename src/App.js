import './App.css';
import Blog from './components/Blog/Blog';
import Head from './components/Head/Head';
import Main from './components/Main/Main';
import  { Toaster } from 'react-hot-toast';




function App() {
  return (
    <div className="App">
      <Head></Head>
      <Main></Main>
      <Blog></Blog>
      <Toaster />
    </div>
  );

}
export default App;
