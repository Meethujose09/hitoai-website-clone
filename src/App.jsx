
import Home from '../src/pages/Home/Home';
import Header from '../src/components/Header';
import Contact from '../src/pages/Contact/contact';
import Products from '../src/pages/Products/product';
import Services from '../src/pages/Services/service';
import Updates from '../src/pages/Updates/update';
import Partners from '../src/pages/Partners/Partners';
import Team from './pages/Team/team';
import data from "./data.json"; 
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Products />
 
      {/* <Services /> */}
      {/* <Updates /> */}
      <Partners />
      <Team sliderData={data}/>

      <Contact />

    </div>
  );
}

export default App;
