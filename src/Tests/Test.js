import React from 'react';
import {Route, Routes} from "react-router-dom";
import TestVariants from "./TestVariants/TestVariants";
import TestImages from "./TestImages/TestImages";
import TestComparison from "./Comparison/TestComparison";

const Test = () => {
    return (
        <Routes>
            {/*<Route path={"question1"} element={<TestVariants />} />*/}
            {/*<Route path={"question2"} element={<TestImages />} />*/}
            <Route path={"question1"} element={<TestComparison />} />
        </Routes>
    );
};

export default Test;
