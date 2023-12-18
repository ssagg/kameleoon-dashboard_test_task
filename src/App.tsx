import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Site, Test } from "./models/models";

import Dashboard from "./pages/Dashboard/Dashboard";
import Finalize from "./pages/Finalize/Finalize";
import Layout from "./components/Layout/Layout";
import Results from "./pages/Results/Results";
import { useState } from "react";

function App() {
  const [data, setData] = useState<Test[]>([]);
  const [sitesData, setSitesData] = useState<Site[]>([]);

  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route
              // path='/'
              index
              element={
                <Dashboard
                  data={data}
                  setData={setData}
                  sitesData={sitesData}
                  setSitesData={setSitesData}
                />
              }
            />
            <Route path='/results/:testId' element={<Results data={data} />} />
            <Route
              path='/finalize/:testId'
              element={<Finalize data={data} />}
            />
          </Route>
        </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
