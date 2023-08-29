// context.js

const { useState , useEffect, useContext, createContext} = React;
const Route        = ReactRouterDOM.Route;
const Link         = ReactRouterDOM.Link;
const HashRouter   = ReactRouterDOM.HashRouter;
var UserContext    = createContext(null);



function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "24rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        <br></br>
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}
