import { Route, Routes } from "react-router";
import MonsterList from "./MonsterList";
import PartyList from "./PartyList";

const PageController = () => {
    return (
        <Routes>
            <Route index={true} path="/" element={<PartyList />} />
            <Route path="/monsters" element={<MonsterList/>}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
    )
}

export default PageController;