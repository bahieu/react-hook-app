const Todo = (props)=> {
    const {todos,deleteTodo} = props
    const handleDelete = index =>{        
        deleteTodo(index)
    }
    return (
        <div>
            <ul>
            {todos.map((todo,index)=>(
                <li key = {index}>{todo}
                <span onClick={()=>handleDelete(index)}>&times;</span>                
                </li>                
            ))}
            <hr/>
            </ul>
        </div>
    )
}
export default Todo