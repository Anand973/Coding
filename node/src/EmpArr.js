const Dis=(data)=>{
    var arr=[];
    var List=[];
    arr=data.Emp.map((v)=>{
        for(let k in v)
        {
            List.push(<li>{v[k]}</li>); 
        }
       
      return (
        <ol>
            {List}
        </ol>
      )
    return List;
    })
    
    return (
     <>
    <ol>
       {arr}
    </ol>
    </> 
    
    )
    }
    export default Dis;