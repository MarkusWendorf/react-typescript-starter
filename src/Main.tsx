import React, {useCallback, useState} from "react";
import "./main.scss";

interface Props {

}

const Main = (props: Props) => {

    const [greeting, setGreeting] = useState("Hello World");
    const click = useCallback((e: any) => {
        setGreeting("Welcome");
    }, [greeting]);

    return (
      <div className="main-panel" >
        <h1 onClick={click}>{greeting}</h1>
      </div>
    );
};

export default Main;
