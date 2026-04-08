import { BrowserRouter } from "react-router";
import Banner from "./Banner";
import PageController from "./PageController";
import PageProvider from "./PageProvider";


const App = () => {
	return (
		// <PageProvider>
		// 	<Banner />
		// 	<PageController />
		// </PageProvider>

		<BrowserRouter>
		 	<Banner />
		 	<PageController />
		</BrowserRouter>
	);
}

export default App;