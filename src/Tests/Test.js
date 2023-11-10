import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import TestVariants from "./TestVariants/TestVariants";
import TestImages from "./TestImages/TestImages";
import TestComparison from "./Comparison/TestComparison";
import TestMultipleChoice from "./TestMultipleChoice/TestMultipleChoice";
import TestHistoricMap from "./TestHistoricMap/TestHistoricMap";
import TestTimeline from "./TestTimline/TestTimeline";
import TestTrueOrFalse from "./TestTrueOrFalse/TestTrueOrFalse";

const Test = () => {
    const [value, setValue] = useState(10);

    return (
        <Routes>
            <Route path={"question1"} element={<TestVariants value={10} setValue={setValue} />} />
            <Route path={"question2"} element={<TestImages value={20} setValue={setValue}  />} />
            {/*<Route path={"question3"} element={<TestComparison />} />*/}
            <Route path={"question3"} element={<TestMultipleChoice value={30} setValue={setValue} />} />
            <Route path={"question4"} element={<TestHistoricMap value={40} setValue={setValue}/>} />
            <Route path={"question5"} element={<TestTimeline value={50} setValue={setValue}/>} />
            <Route path={"question6"} element={<TestTrueOrFalse value={60} setValue={setValue}/>} />
        </Routes>
    );
};

export default Test;
