import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import {Networking,LanWlan,StructuredCabling }from "./pages/Networking" ;                                        
import { Security,Cctv,AccessControl, ElectricFence,CleanPowerInstallation} from "./pages/Security";
import{Serviceandmaintenance,ICTEquipment,PreventiveMaintenance,Service} from "./pages/Serviceandmaintenance"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import NavigationBar from "./components/Navbar";


function App() {
return(
	
   <Router>
	   <NavigationBar/>
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/Networking" exact component={Networking}/>
        <Route path="/Networking/LanWlan"  component={LanWlan} />
		<Route path="/Networking/StructuredCabling"  component={StructuredCabling} />
		<Route path="/Security"  exact component={Security} />
		<Route path="/Security/Cctv"  component={Cctv} />
		<Route path="/Security/AccessControl"  component={AccessControl} />
		<Route path="/Security/ElectricFence"  component={ElectricFence} />
		<Route path="/Security/CleanPowerInstallation"  component={CleanPowerInstallation} />
		<Route path="/Serviceandmaintenance" exact component={Serviceandmaintenance} />
		<Route path="/Serviceandmaintenance/ICTEquipment"  component={ICTEquipment} />
		<Route path="/Serviceandmaintenance/PreventiveMaintenance"  component={PreventiveMaintenance} />
        <Route path="/Serviceandmaintenance/Service" component={Service} />
		<Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/ContactUs" exact component={ContactUs} />
		
	</Switch>
	</Router>

);
};
   
export default App;