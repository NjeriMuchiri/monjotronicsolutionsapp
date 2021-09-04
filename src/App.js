import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import {Networking, LanWlan,StructuredCabling} from "./pages/Networking" ;                                        
import { Security,Cctv,AccessControl, ElectricFence,CleanPowerInstallation} from "./pages/Security";
import{Serviceandmaintenance,ICTEquipment,PreventiveMaintenance,Service} from "./pages/Serviceandmaintenance"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

import Navigationbar from "./components/Navbar";

function App() {
return(
	
   <Router>
	   <Navigationbar />
	<Switch>
		<Route path="/home" exact component={Home} />
		<Route path="/Networking" component={Networking}/>
        <Route path="/networking/lanwlan"  component={LanWlan} />
		<Route path="/networking/structuredcabling"  component={StructuredCabling} />
		<Route path="/security"  component={Security} />
		<Route path="/security/cctv"  component={Cctv} />
		<Route path="/security/accesscontrol"  component={AccessControl} />
		<Route path="/security/electricfence"  component={ElectricFence} />
		<Route path="/security/cleanpowerinstallation"  component={CleanPowerInstallation} />
		<Route path="/serviceandmaintenance"  component={Serviceandmaintenance} />
		<Route path="/serviceandmaintenance/ICTEquipment"  component={ICTEquipment} />
		<Route path="/serviceandmaintenance/preventivemaintenance"  component={PreventiveMaintenance} />
        <Route path="/serviceandmaintenance/service" component={Service} />
		<Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
		
	</Switch>
	</Router>

);
};


export default App;