import background from '../assets/images/background.png'
import logo from '../assets/icons/logo.png'
import user from '../assets/icons/user.png'
import office from '../assets/icons/office.png'
import person from '../assets/icons/person.png'
import approved from '../assets/icons/approved.png'
import email from '../assets/icons/email.png'
import DeletePop from './DeletePopup'
import {  useNavigate } from 'react-router-dom'
import LogPopup from './LogPopup'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
interface Description{
    Description:string,
}
interface Task{
    Description:string,
    id:number
}

const PersonEdit = () => {
    const navigate=useNavigate();
    const toProfile:React.MouseEventHandler<HTMLButtonElement> = ()=> navigate('/profile')
    const towork:React.MouseEventHandler<HTMLButtonElement> =()=>navigate('/work')
    const toImportant:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/important')
    const toCompleted:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/completed')

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
        axios.post("http://localhost:5000/api/task/person",taskData)
        .then(()=>{
            console.log("Data has been submitted ");
            setTaskData({
                Description:""
            })
        })
        .catch((err)=>{
            if(err.request){
                console.log("Err request ",err.request.data);
            }
            else if(err.response){
                console.log("Err response ",err.response.data)
            }
            else{
                console.log("Err message",err.message);
            }
        })


    }

    useEffect(()=>{
    const fetchData=async()=>{
        setLoading(true);
    try{
    const response=await fetch("http://localhost:5000/api/task/person")
    console.log(response);
    if(!response){
        throw new Error('HTTP Error')
    }
    const realData=await response.json();
    console.log(realData)
    setData(realData.data)
    }
    catch(err){
        console.log("Err while fetching",err)
    }
    finally{
    setLoading(false)
    }
    }
    fetchData();
    },[])

    if(loading) return <Skeleton />

    return ( 
        <div  style={{backgroundImage:`url(${background})`}} className="bg-cover bg-center h-screen overflow-hidden overflow-y-auto">
        <div className='flex'>
        <div className='relative w-[20%] h-screen bg-gradient-to-b from-liblack via-liyellow to-liblack '>
        <div className='flex sm:gap-1 md:gap-3 lg:gap-5  mt-5 mb-10 ml-5'>
            <img src={logo}
             alt="handle with care
             " className='sm:w-[20%] md:w-[13%] lg:w-[15%]' />
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center'>Goal Getter</p>
        </div>
        <button className='flex sm:gap-1 md:gap-3 lg:gap-5 mt-5 ml-5' onClick={toProfile}>
            <img src={user} 
            alt="handle with care" 
            className='sm:w-[20%] sm:h-[20%] md:w-[20%] h-[20%] lg:w-[15%]' />
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center'>John Kabera</p>
        </button>
        <button className='flex gap-5 mt-20 ' onClick={towork}>
            <img src={office}
            alt="handle with care"
             className=' sm:w-[18%] md:w-[13%] lg:w-[15%] ml-5'/>
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center' >Work</p>
        </button>
        <button className='flex  sm:gap-1 md:gap-3 lg:gap-5  mt-5 bg-button w-full py-2' >
            <img src={person}
             alt="handle with care"
              className='sm:w-[18%] md:w-[17%] lg:w-[15%] ml-4'/>
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem]  self-center '>Personal</p>
        </button>
        <button className='flex  sm:gap-1 md:gap-3 lg:gap-5  mt-5 ml-5 ' onClick={toImportant}>
            <img src={email}
             alt="handle with care" 
             className='sm:w-[20%] md:w-[13%] lg:w-[15%]' />
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center ml-3'>Important</p>
        </button>
        <button className='flex  sm:gap-1 md:gap-3 lg:gap-5  mt-5 ml-5 ' onClick={toCompleted}>
            <img src={approved} 
            alt="handle with care" 
            className='sm:w-[20%] md:w-[13%] lg:w-[15%]' />
             <p className='text-white font-semibold  sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem]  self-center ml-3'>Completed</p>
        </button>
 
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
            <div className='w-[80%] mx-auto my-5 p-2 flex justify-between items-center bg-light_button justify-between items-center' key={info.id}>
              <div className='flex gap-2'>
                  <DeletePop />
                  <p className='text-white'>{info.Description}</p>
              </div>
              <button className='bg-hover px-5 py-2 text-white'>Complete</button>
                </div>
         ))}
        
               
                    <form onSubmit={handleSubmit}  className='w-[80%] mx-auto flex justify-center  bg-light_button h-18'> 
                    <div className=' ml-3 w-8 h-8 rounded-full border-4 border-white self-center'></div> 
                    <input  
                    type="text"
                    onChange={handleChange}
                    value={taskData.Description}
                    className='w-[80%] text-white flex-grow bg-light_button p-3 outline-none' />
                    <button className='bg-hover py-2 px-5 text-[#fff]' type='submit'>Save</button>
                    </form>  
        </div>
        </div>
        </div>
     );
}
 
export default PersonEdit;