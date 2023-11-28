import React, { useState } from "react";
import "./Home.css";
import i18n from "../../Utility/i18n";

export default function Home(){

    const [lang, setLang] = useState('hn')
    const usersCount = 25;

    return(
        <div>
            <h1>{i18n("welcomeMassage")}</h1>
            <p> {i18n("normalMassage")} </p>
            <h3>{i18n("greetingMassage")}</h3>
            <h5>{i18n("endMassage")}</h5>
            <select className="select-container"
            defaultValue={localStorage.getItem("lang")}
            onChange={(e)=>{
                localStorage.setItem("lang", e.target.value)
                window.location.reload();
            }}>
                <option value="en">English</option>
                <option value="mr">Marathi</option>
                <option value="hn">Hindi</option>
            </select>
            <p>{i18n("userStateMassage", "<usersCount>", usersCount)}</p>
        </div>

    )
};