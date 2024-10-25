import axios from 'axios'
import {useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const UpdatePerson = () => {
    const navigate=useNavigate();
    const {Id} = useParams();
     const[values,setValues]=useState({
        Id:Id,
        Description:''
     })

     useEffect(()=>{
        axios.get('http://localhost:5000/api/task/person/'+Id)
        .then((res)=>{
           setValues({...values,Description:res.data.data.Description})
        })
        .catch((err)=>{
            console.log("Err while fetching a single task",err)
        })
     },[])


     const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        axios.put('http://localhost:5000/api/task/person/'+Id,values)
        .then(()=>{
          navigate('/personedit')
        })
        .catch((err)=>{
            if(err.response){
                console.log("Err response "+err.response.data)
            }
            else if(err.request){
                console.log("Err request "+err.request.data)
            }
            else{
                console.log("Err message "+err.message)
            }
        })
    

     }

    return (  
        <div className="bg-[#0a0a0a] w-[100%] h-screen flex flex-col gap-6 justify-center items-center" >
        <h2 className="text-white font-bold text-[30px]">Update Personal Task</h2>
   <form onSubmit={handleSubmit} className="w-[50%] h-[40%]  rounded-l bg-light_button  flex flex-col gap-5 justify-center items-center ">
      <input type="text" value={values.Description} onChange={e => setValues({...values,Description:e.target.value})} className="rounded-xl w-[70%] mx-auto p-2"/>
      <div className='flex gap-10 w-[100%] justify-center'>
         <button className='text-white bg-[#0a0a0a] py-3 px-10 rounded-xl border-2 border-white'  >Cancel</button>
         <button className='text-white bg-[#0a0a0a] py-3 px-10 rounded-xl border-2 border-white' type='submit'>Update</button>
      </div>
      </form>      
  </div>
    );
}
 
export default UpdatePerson;