import Button from '../../Components/button';
import Container from '../../Components/Container';
import Display_counter from '../../Components/display_counter';
import Reduxheader from '../../Components/reduxheader';


import './App.css';

function App() {
  return (
    <div className="head">

      <div className="px-4 py-5 my-5 text-center">
        <Reduxheader />
        <div className="col-lg-6 mx-auto">
          <Display_counter />
          <Button />
        </div>
      </div>

    </div>
  );
}

export default App;
