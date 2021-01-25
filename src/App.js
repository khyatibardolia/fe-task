import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/scss/font-awesome.scss';
import { CreateAccount } from './components/views/CreateAccount';

const App = () => {
  return (
    <div className='App container-fluid w-100'>
      <div className='row d-flex h-100'>
        <div className={'col-sm-8 p-0 section-left'}>
          <div className={'step-wizard w-100 d-flex justify-content-end align-items-center pr-4'}>
            <span className={'pr-2'}>Step 1 of 3</span>
            <div className={'d-flex justify-space-around'}>
              <span className={'step active'}/>
              <span className={'step'}/>
              <span className={'step'}/>
            </div>
          </div>
          <CreateAccount/>
        </div>
        <div className={'col-sm-4 p-0 section-right'}>
          <div className={'p-4 d-flex justify-content-center align-items-center flex-column'}>
            <div>
              <h1 className={'dummy-heading'}>Dummy Heading</h1>
            </div>
            <div className={'dummy-text mt-5'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
