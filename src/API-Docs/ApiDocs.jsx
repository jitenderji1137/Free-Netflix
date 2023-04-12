import "./ApiDocs.css"
import WebFont from 'webfontloader';
import { useEffect } from "react";
export default function APIDocs(){
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Piedra', 'Alkatra']
          }
        });
       }, []);
    return(
        <>
        <h1 id="h1">Welcome to <span>Free Netflix</span> API Docs</h1>
        <h2 id="h2" ><span>1. API Endpoint</span> = <a href={process.env.REACT_APP_Free_NetFlix}>{process.env.REACT_APP_Free_NetFlix}</a></h2>
        </>
    )
}