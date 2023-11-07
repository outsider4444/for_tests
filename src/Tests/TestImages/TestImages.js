import React, {useState} from 'react';
import HeaderTest from "../HeaderTest/HeaderTest";
import classes from "./TestImages.module.css";

const TestImages = () => {
    const [answer, clicking] = useState("none");

    function onClickDivs(valueDiv, ans){
        clicking(ans)

        let div1 = document.getElementById("text1");
        let div2 = document.getElementById("text2");
        let div3 = document.getElementById("text3");
        let div4 = document.getElementById("text4");

        if (valueDiv === "first"){
            div1.style = "font-weight: bold; background: #4b99d2; color: white"
            div2.style = "none"
            div3.style = "none"
            div4.style = "none"
        } else if (valueDiv === "second"){
            div1.style = "none"
            div2.style = "font-weight: bold; background: #4b99d2; color: white"
            div3.style = "none"
            div4.style = "none"
        } else if (valueDiv === "third"){
            div1.style = "none"
            div2.style = "none"
            div3.style = "font-weight: bold; background: #4b99d2; color: white"
            div4.style = "none"
        } else if (valueDiv === "fourth"){
            div1.style = "none"
            div2.style = "none"
            div3.style = "none"
            div4.style = "font-weight: bold; background: #4b99d2; color: white"
        }
    }
    function BtnToMainLink(){
        window.location = "/"
    }

    function BtnNextLink(){
        window.location = "/test/question3"
    }

    return (
        <div>
            <HeaderTest/>
            <h1>Ответьте на следуйщий вопрос: Вы абоба?</h1>
            <div className={classes.buttonsLine}>
                <div className={classes.text1} id={"text1"} onClick={() => onClickDivs("first", "One")}>
                    <img src="../TestImages/5-44.jpg" width={"300px"} height={"300px"}  alt=""/>
                </div>
                <div className={classes.text1} id={"text2"} onClick={() => onClickDivs("second", "Two")}>
                    <img src="../TestImages/5-44.jpg" width={"300px"} height={"300px"}  alt=""/>
                </div>
            </div>
            <div className={classes.buttonsLine}>
                <div className={classes.text1} id={"text3"} onClick={() => onClickDivs("third", "Three")}>
                    <img src="../TestImages/5-44.jpg" width={"300px"} height={"300px"}  alt=""/>
                </div>
                <div className={classes.text1} id={"text4"} onClick={() => onClickDivs("fourth", "Fourth")}>
                    <img src="../TestImages/5-44.jpg" width={"300px"} height={"300px"}  alt=""/>
                </div>
            </div>
            <button onClick={BtnToMainLink} className={classes.skipButton}>Пропустить</button>
            <button onClick={BtnNextLink} className={classes.nextButton}>Далее</button>
        </div>
    );
};

export default TestImages;