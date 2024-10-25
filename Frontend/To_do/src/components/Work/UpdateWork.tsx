import {useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'


const UpdateWork = () => {
    const navigate=useNavigate(); 
    const toWorkEdit:React.MouseEventHandler<HTMLButtonElement> = () => navigate('/workedit')

    const {Id} = useParams();
    console.log(Id);
  const[values,setValues]=useState({
    Id:Id,
    Description:''
  })
    useEffect(()=>{
   axios.get('http://localhost:5000/api/task/work/'+Id)
   .then((res)=>{
    setValues({...values,Description:res.data.data.Description})
    console.log(res.data.data.Description)
   })
   .catch((err)=>{
     if(err.request){
        console.log("Err request:",err.request.data)
     }
     else if(err.response){
        console.log("Err response",err.response.data)
     }
     else{
        console.log("Err message: ",err.message)
     }
   })
    
    },[])


    const handleSubmit=(e:React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    
    axios.put('http://localhost:5000/api/task/work/'+Id,values)
    .then(()=>{
        navigate('/workedit')
    })
    .catch((err)=>{
       if(err.response){
        console.log("Err response :",err.response.data);
       }
       else if(err.request){
        console.log("Err request ",err.request.data)
       }
       else{
        console.log("Err message ",err.message);
       }
    })
    }


    return ( 
        <div className="bg-[#0a0a0a] w-[100%] h-screen flex flex-col gap-6 justify-center items-center" >
              <h2 className="text-white font-bold text-[30px]">Update Work Task</h2>
         <form onSubmit={handleSubmit} className="w-[50%] h-[40%]  rounded-l bg-light_button  flex flex-col gap-5 justify-center items-center ">
            <input type="text" value={values.Description} onChange={e => setValues({...values,Description:e.target.value})} className="rounded-xl w-[70%] mx-auto p-2"/>
            <div className='flex gap-10 w-[100%] justify-center'>
               <button className='text-white bg-[#0a0a0a] py-3 px-10 rounded-xl border-2 border-white' onClick={toWorkEdit}>Cancel</button>
               <button className='text-white bg-[#0a0a0a] py-3 px-10 rounded-xl border-2 border-white' >Update</button>
            </div>
            </form>      
        </div>
     );
}
 
export default UpdateWork;