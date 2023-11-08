import React from 'react';
import {Route, Routes} from "react-router-dom";
import TestVariants from "./TestVariants/TestVariants";
import TestImages from "./TestImages/TestImages";
import TestComparison from "./Comparison/TestComparison";
import TestMultipleChoice from "./TestMultipleChoice/TestMultipleChoice";

const Test = () => {
    return (
        <Routes>
            {/*<Route path={"question1"} element={<TestVariants />} />*/}
            {/*<Route path={"question2"} element={<TestImages />} />*/}
            <Route path={"question1"} element={<TestComparison />} />
            <Route path={"question4"} element={<TestMultipleChoice />} />
        </Routes>
    );
};

export default Test;
