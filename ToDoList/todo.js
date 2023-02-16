function Todo({todo,index,remove}){
  function handle(){
    // console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}>{index + 1}:{todo.text} (-)</div>
}
