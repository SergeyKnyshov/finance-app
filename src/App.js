import React, {useState} from "react";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Head from "./components/views/global/Head";

function App() {

    const [showPage, setShowPage] = useState('main');
    const [data, setData] = useState([])


    return (
    <React.Fragment>
        <Head action={setShowPage}></Head>
        {showPage === 'main'
            ? <Main action={setData}></Main>
            : <Stat statData={data}></Stat>}
    </React.Fragment>
  );
}

export default App;
