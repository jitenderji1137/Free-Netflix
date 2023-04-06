import "./NoPage.css"
export default function NoPage(){ 
    return(
        <>
        <div id="mainC">
        <div className="message">
            <h1>404</h1>
            <h3>the page you seek does not exist</h3>
        </div>
        <div className="footer">
            <a href="/" title="home" target="_blank">Home Page<span></span></a>
        </div>
        </div>
        </>
    )
}