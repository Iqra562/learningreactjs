import {BrowserRouter} from "react-router-dom";
import './App.css';
import {QueryClientProvider , QueryClient} from 'react-query';
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";
import {ConfigProvider} from "antd";
const queryClient = new QueryClient({
defaultOptions : {
  queries : {
    refetchOnwindowFocus : false,
    refetchOnmount:false,
    refetchOnReconnect : false,
    retry: 0,
    staleTime : 5 * 1000,
  },
},
});
const antDesignConfig = {
  token: { colorPrimary: "#00b96b"},
};
function App() {
  const authenticated = false;
  return (
    <ConfigProvider theme={antDesignConfig}>
  <QueryClientProvider client = {queryClient}>
<BrowserRouter>
{authenticated ? (<AuthenticatedRoutes/>):(<UnAuthenticatedRoutes/>) }
</BrowserRouter>
  </QueryClientProvider>
  </ConfigProvider>
  );
}

export default App;
