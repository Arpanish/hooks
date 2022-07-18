
import Hookstate from './Component/Counter';
import Counterprev from './Component/Counterprev';
import Counterobject from './Component/Counterobject';
import Counterarray from './Component/Counterarray';
import Useeffect from './Component/Useeffect';
import Useeffectruneffectonlyonce from './Component/Useeffectruneffectonlyonce';
import Useeffectmousecontainer from './Component/Useeffectmousecontainer';
import Useeffectinterval from './Component/Useeffectinterval';
import UseeffectDataFetching from './Component/UseeffectDataFetching';
import UseeffectDataFetchingbyid from './Component/Useeffectdatafetchbyid';
import UseeffectDataFetchingdataonbutton from './Component/Useeffectfetchdataonbutton';
import Usereinputfocus from './Component/Usereinputfocus';
import Usereftimer from './Component/Usereftimer';


function App() {
  return (
    <div className="App">
      <Hookstate />
      <br></br>
      <Counterprev />
      <br></br>
      <Counterobject />
      <br></br>
      <Counterarray />
      <br></br>
      <Useeffect />
      <br></br>
      <Useeffectruneffectonlyonce />
      <br></br>
      <Useeffectmousecontainer />
      <br></br>
      <Useeffectinterval />
      <br></br>
      <UseeffectDataFetching />
      <br></br>
      <UseeffectDataFetchingbyid />
      <br></br>
      <UseeffectDataFetchingdataonbutton />
      <br></br>
      {/* <ContextcomponentE /> */}
      <br></br>
      <Usereinputfocus ></Usereinputfocus>
      <br></br>
      <Usereftimer />
    </div>

  );
} 

export default App;
