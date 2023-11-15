import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import TestVariants from "./TestsList/TestVariants/TestVariants";
import TestImages from "./TestsList/TestImages/TestImages";
import TestMultipleChoice from "./TestsList/TestMultipleChoice/TestMultipleChoice";
import TestHistoricMap from "./TestsList/TestHistoricMap/TestHistoricMap";
import TestTimeline from "./TestsList/TestTimeline/TestTimeline";
import TestTrueOrFalse from "./TestsList/TestTrueOrFalse/TestTrueOrFalse";
import Result from "./Result/Result";

const Test = (props) => {
    const [value, setValue] = useState(10);
    const [score, setScore] = useState(0);
    const [id_test, setId_test] = useState(2);

    // Ключ к тесту:
    // 1: 3
    // 2: 2
    // 4: 1,4
    // 5: 3142
    // 6: нет

    return (
        <Routes>
            <Route path={"question1"} element={<TestVariants value={10} id_test={id_test} setId_test={setId_test}
                                                             setValue={setValue} score={score} setScore={setScore}/>}/>
            <Route path={"question2"} element={<TestImages value={20} setValue={setValue}  id_test={id_test} setId_test={setId_test}
                                                           score={score} setScore={setScore}/>}/>
            <Route path={"question3"} element={<TestMultipleChoice value={30} setValue={setValue}  id_test={id_test} setId_test={setId_test}
                                                                   score={score} setScore={setScore}/>}/>
            {/*<Route path={"question4"}*/}
            {/*       element={<TestHistoricMap value={40} setValue={setValue} id_test={id_test} setId_test={setId_test}*/}
            {/*                                 score={score} setScore={setScore}/>}/>*/}
            <Route path={"question4"}
                   element={<TestTimeline value={50} setValue={setValue} id_test={id_test} setId_test={setId_test}
                                          score={score} setScore={setScore}/>}/>
            <Route path={"question5"}
                   element={<TestTrueOrFalse value={60} setValue={setValue}  id_test={id_test} setId_test={setId_test}
                                             score={score} setScore={setScore}/>}/>
            <Route path={"result"}
                   element={<Result value={100} score={score} setScore={setScore}/>}/>
        </Routes>
    );
};

export default Test;
