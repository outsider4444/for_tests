import React from 'react';
import {Route, Routes} from "react-router-dom";
import TestVariants from "./TestVariants/TestVariants";
import TestImages from "./TestImages/TestImages";
import TestComparison from "./Comparison/TestComparison";
import TestMultipleChoice from "./TestMultipleChoice/TestMultipleChoice";
import TestHistoricMap from "./TestHistoricMap/TestHistoricMap";
import TestTimeline from "./TestTimline/TestTimeline";

const Test = () => {
    return (
        <Routes>
            <Route path={"question1"} element={<TestVariants />} />
            <Route path={"question2"} element={<TestImages />} />
            {/*<Route path={"question3"} element={<TestComparison />} />*/}
            <Route path={"question3"} element={<TestMultipleChoice />} />
            {/*<Route path={"question4"} element={<TestHistoricMap/>} />*/}
            <Route path={"question4"} element={<TestTimeline/>} />
        </Routes>
    );
};

export default Test;
