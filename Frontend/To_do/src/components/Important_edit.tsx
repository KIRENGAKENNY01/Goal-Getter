
import background from '../assets/images/background.png'
import logo from '../assets/icons/logo.png'
import user from '../assets/icons/user.png'
import office from '../assets/icons/office.png'
import person from '../assets/icons/person.png'
import approved from '../assets/icons/approved.png'
import email from '../assets/icons/email.png'
import LogPopup from './LogPopup'
import {useState,useEffect} from 'react'
import axios from 'axios'
import PageSkeleton from './Skeleton'
import DeletePop from './DeletePopup'

interface Description{
Description:string
}
interface Task{
Description:string,
id:number
}

const ImportantEdit = () => {


    const[taskData,setTaskData]=useState<Description>({
        Description:""
    })
   const[data,setData]=useState<Task[]>([])
   const[loading,setLoading]=useState<boolean>(false);

   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setTaskData({
        ...taskData,
        [name]:value
    })

   }

   const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/task/important",taskData)
    .then(()=>{
        console.log("Task has been submitted")
        setTaskData({
            Description:""
        })
    })
    .catch((err)=>{
        if(err.request){
            console.log("Err request ",err.request.data);
        }
        else if(err.response){
            console.log("Err request ",err.response.data);
        }
        else{
            console.log("Err message",err.message);
        }
    })
   }
   

   useEffect(()=>{
    setLoading(true);
    const fetchData=async()=>{
    try{
    const response=await fetch('http://localhost:5000/api/task/important')
    console.log(response);
    if(!response){
        throw new Error('http bad request');
    }
    const realData=await response.json();
    console.log(realData)
    setData(realData.data)
    }
    catch(err){
        console.log("Err during fetching",err);
    }
    finally{
        setLoading(false)
    }
    }
    
    fetchData();
   },[])

   if(loading){
    return <PageSkeleton />
   }


    return (  
        <div  style={{backgroundImage:`url(${background})`}} className="bg-cover bg-center">
        <div className='flex'>
        <div className='w-[20%] h-screen bg-gradient-to-b from-liblack via-liyellow to-liblack'>
        <div className='flex gap-5 mt-5 mb-10 ml-5'>
            <img src={logo} alt="handle with care" className='w-[20%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center'>Goal Getter</p>
        </div>
        <div className='flex gap-5 mt-5 ml-5'>
            <img src={user} alt="handle with care" className='w-[20%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center'>John Kabera</p>
        </div>
        <div className='flex gap-5 mt-20 ml-5 bg-'>
            <img src={office} alt="handle with care" className='w-[20%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center'>Work</p>
        </div>
        <div className='flex gap-5 mt-5 ml-5'>
            <img src={person} alt="handle with care" className=' w-[20%]'/>
             <p className='text-white font-semibold text-[1.3rem] self-center '>Personal</p>
        </div>
        <div className='flex gap-5 mt-5 w-full py-2 bg-button  '>
            <img src={email} alt="handle with care" className=' ml-5 w-[20%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center'>Important</p>
        </div>
        <div className='flex gap-5 mt-5 ml-5 bg-'>
            <img src={approved} alt="handle with care" className='w-[20%]'/>
             <p className='text-white font-semibold text-[1.3rem] self-center'>Completed</p>
        </div>
 
       <LogPopup/>

        </div>
        <div className=' w-[80%] flex flex-col items-start mt-10'>
        <div className='flex flex-col'>
             <div className='ml-10 mb-10'>
                 <p className='text-white text-[2rem] font-semibold ml-15'>My Day</p>
                 <small className='text-white'>Monday 9 September</small>
             </div>
              
        </div>
               {data.map((info)=>(
                <div className='w-[80%] mx-auto flex justify-between items-center bg-light_button my-5' key={info.id}>
                 <div className='flex gap-2'>
                     <DeletePop/>
                     <div className='text-white'>{info.Description}</div>
                 </div>
                 <button className='bg-hover text-white px-5 py-2 '>Complete</button>
                </div>
               ))}
                    <form onSubmit={handleSubmit} className='w-[80%] mx-auto flex justify-center  bg-light_button my-5'> 
                    <div className=' ml-3 w-8 h-8 rounded-full border-4 border-white self-center'></div> 
                    <input type="text" 
                     onChange={handleChange}
                     name='Description'
                     value={taskData.Description}
                     className='w-[80%] text-white flex-grow bg-light_button p-2 outline-none' />
                    <button className='bg-hover px-5 py-2 text-white' type='submit'>Save</button>
                    </form>  
            
        </div>
        </div>
        </div>
    );
}
 
export default ImportantEdit;