import background from '../../assets/images/background.png'
import logo from '../../assets/icons/logo.png'
import user from '../../assets/icons/user.png'
import office from '../../assets/icons/office.png'
import person from '../../assets/icons/person.png'
import approved from '../../assets/icons/approved.png'
import plus from '../../assets/icons/plus.png'
import star from '../../assets/icons/star.png'
import email from '../../assets/icons/email.png'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import LogPopup from '../LogPopup'
import { FaChevronCircleDown } from 'react-icons/fa'

interface Description{
    Description:string
}

const Important = () => {
    const navigate=useNavigate();
    const toProfile:React.MouseEventHandler<HTMLButtonElement> = ()=> navigate('/profile')
    const towork:React.MouseEventHandler<HTMLButtonElement> =()=>navigate('/work')
    const toPerson:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/person')
    const toCompleted:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/completed')
    const toImportantEdit:React.MouseEventHandler<HTMLButtonElement> = () => navigate('/importantedit')

    const[taskData,setTaskData]=useState<Description>({
        Description:""
    })

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
            console.log("Task has been submitted");
        })
        .then(()=>{
            navigate('/importantedit')
        })
        .catch((err)=>{
            console.log("Err while submitting data",err)
        })
        
    }
    return ( 
        <div  style={{backgroundImage:`url(${background})`}} className=" h-[100%] bg-cover bg-center h-screen overflow-hidden overflow-y-auto">
        <div className='flex'>
        <div className=' relative w-[20%] bg-gradient-to-b from-liblack via-liyellow to-liblack '>
        <div className='flex sm:gap-1 md:gap-3 lg:gap-5  mt-5 mb-10 '>
            <img src={logo} 
            alt="handle with care" 
            className='sm:w-[20%] md:w-[13%] lg:w-[15%] ml-5' />
             <p className='text-white font-semibold  sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center'>Goal Getter</p>
        </div>
        <button className='flex sm:gap-1 md:gap-3 lg:gap-5  mt-5 ' onClick={toProfile}>
            <img src={user}
             alt="handle with care" 
             className='sm:w-[20%] sm:h-[20%] md:w-[20%] h-[20%] lg:w-[15%] ml-5' />
             <p className='text-white font-semibold  sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center'>John Kabera</p>
        </button>
        <button className='flex sm:gap-1 md:gap-3 lg:gap-5  mt-20' onClick={towork}>
            <img src={office}
             alt="handle with care"
              className=' sm:w-[18%] md:w-[13%] lg:w-[15%] ml-5'/>
             <p className='text-white font-semibold  sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center lg:ml-3' >Work</p>
        </button>
        <button className='flex sm:gap-1 md:gap-3 lg:gap-5  mt-5 ml-5' onClick={toPerson}>
            <img src={person}
             alt="handle with care"
              className='sm:w-[18%] md:w-[17%] lg:w-[15%]'/>
             <p className='text-white font-semibold  sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center lg:ml-4'>Personal</p>
        </button>
        <button className='flex sm:gap-1 md:gap-3 lg:gap-5  mt-5 bg-button py-2 w-full' >
            <img src={email} 
            alt="handle with care"
             className='sm:w-[20%] md:w-[13%] lg:w-[15%] ml-5' />
             <p className='text-white font-semibold  sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center lg:ml-2'>Important</p>
        </button>
        <button className='flex sm:gap-1 md:gap-3 lg:gap-5  mt-5 ' onClick={toCompleted}>
            <img src={approved} 
            alt="handle with care" 
            className='sm:w-[20%] md:w-[13%] lg:w-[15%] ml-5' />
             <p className='text-white font-semibold  sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center lg:ml-3'>Completed</p>
        </button>
 
        <LogPopup/>

        </div>
        <div className=' w-[80%] flex justify-between flex-col items-center mt-10'>
        <div className='flex flex-col w-[100%]'>
        <button className='text-white bg-button self-start ml-5  p-2 flex  items-center gap-2  ' onClick={toImportantEdit}>
                <FaChevronCircleDown className='text-white sm:text-[60%] md:text-[80%] lg:text-[100%]  '/>
                <p className='text-white  sm:text-[60%] md:text-[80%] lg:text-[100%]'>Check Task</p>
        </button>
            <div className='flex flex-col items-center'>
                <div className='self-center'>
                    <h1 className='text-white font-bold sm:text-[2.4rem] md:text-[2.7rem] lg:text-[3rem] self-center'>Important Task</h1>
                </div>
                 <div className='self-center'>
                     <p className='text-white sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] font-semibold ml-15'>Daily Task</p>
                     <small className='text-white'>List refreshes everyday</small>
                 </div>
            </div>
             <img src={star} alt="a person using computer" className='sm:w-[80%]  md:w-[80%] lg:w-[50%] ml-10 self-center opacity-70'/>  
        </div>
        <form   onSubmit={handleSubmit}  className='w-[80%] mx-auto flex justify-center self-end bg-light_button mb-20'> 
                    <img src={plus} alt="plus sign"/>
                    <input type="text" 
                    placeholder='Wake up 5:00am'
                    name='Description'
                    onChange={handleChange}
                     className='w-[80%] placeholder-white text-white flex-grow bg-light_button p-2 outline-none' />
                    <button className='bg-hover px-5 text-white ' type='submit'>Save</button>
                    </form>  
        </div>
        </div>
        </div>
     );
}
 
export default Important;