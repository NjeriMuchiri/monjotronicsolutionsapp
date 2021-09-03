import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import {Networking, LanWlan,StructuredCabling} from "./pages/Networking" ;                                        
import { Security,Cctv,AccessControl, ElectricFence,CleanPowerInstallation} from "./pages/Security";
import{Serviceandmaintenance,ICTEquipment,PreventiveMaintenance,Service} from "./pages/Serviceandmaintenance"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

import Navbar from "./components/Navbar";

function App() {
return(
   <Router>
	   <Navbar/>
	<Switch>
		<Route path="/Home" exact component={Home} />
		<Route path="/Networking" exact component={Networking} />
        <Route path="/networking/lanwlan" exact component={LanWlan} /> 
		<Route path="/networking/structuredcabling" exact component={StructuredCabling} />
		<Route path="/security" exact component={Security} />
		<Route path="/security/cctv" exact component={Cctv} />
		<Route path="/security/accesscontrol"  exact component={AccessControl} />
		<Route path="/security/electricfence" exact component={ElectricFence} />
		<Route path="/security/cleanpowerinstallation" exact  component={CleanPowerInstallation} />
		<Route path="/serviceandmaintenance" exact  component={Serviceandmaintenance} />
		<Route path="/serviceandmaintenance/ICTEquipment" exact component={ICTEquipment} />
		<Route path="/serviceandmaintenance/preventivemaintenance" exact component={PreventiveMaintenance} />
        <Route path="/serviceandmaintenance/service" exact component={Service} />
		<Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contactus" exact component={ContactUs} />
	</Switch>
	</Router>
);
}

export default App;

