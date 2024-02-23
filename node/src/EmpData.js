function EmpData(data){
    var arr=[];
    for(let v in data)
    {
        arr.push(<li>{data[v]}</li>)
    }
    
return (
<ul>{arr}</ul>
)
}
export default EmpData;