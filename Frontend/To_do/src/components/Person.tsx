import background from '../assets/images/background.png'
import logo from '../assets/icons/logo.png'
import user from '../assets/icons/user.png'
import office from '../assets/icons/office.png'
import person from '../assets/icons/person.png'
import approved from '../assets/icons/approved.png'
import skate from '../assets/images/skate.png'
import plus from '../assets/icons/plus.png'
import email from '../assets/icons/email.png'
import { useNavigate } from 'react-router-dom'
import LogPopup from './LogPopup'
import axios from 'axios'
import {useState} from 'react'

interface Description{
    Description:string
}
const Person = () => {
    const navigate=useNavigate();
    const toProfile:React.MouseEventHandler<HTMLButtonElement> = ()=> navigate('/profile')
    const towork:React.MouseEventHandler<HTMLButtonElement> =()=>navigate('/work')
    const toImportant:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/important')
    const toCompleted:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/completed')

    const[data,setData]=useState<Description>({
        Description:""
    });
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })

    }

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/task/person",data)
    .then((res)=>{
        console.log(res);
    })
    .then(()=>{
        navigate('/personedit')
    })
    .catch((err)=>{
        if(err.request){
            console.log("Err request ",err.request.data);
        }
        else if(err.response){
            console.log("Err response ",err.response.data)
        }
        else{
            console.log("Err message:",err.message);
        }
    })
  }

  
    return ( 
        <div  style={{backgroundImage:`url(${background})`}} className="bg-cover bg-center">
        <div className='flex'>
        <div className='w-[20%] h-screen bg-gradient-to-b from-liblack via-liyellow to-liblack'>
        <div className='flex gap-5 mt-5 mb-10 ml-5'>
            <img src={logo} alt="handle with care" className='w-[20%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center'>Goal Getter</p>
        </div>
        <button className='flex gap-5 mt-5 ml-5' onClick={toProfile}>
            <img src={user} alt="handle with care" className='w-[20%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center'>John Kabera</p>
        </button>
        <button className='flex gap-5 mt-20 ml-5' onClick={towork}>
            <img src={office} alt="handle with care" className=' w-[20%]'/>
             <p className='text-white font-semibold text-[1.3rem] self-center ml-2' >Work</p>
        </button>
        <button className='flex gap-5 mt-5 bg-button w-full py-2' >
            <img src={person} alt="handle with care" className='w-[15%] ml-4'/>
             <p className='text-white font-semibold text-[1.3rem] self-center '>Personal</p>
        </button>
        <button className='flex gap-5 mt-5 ml-5 ' onClick={toImportant}>
            <img src={email} alt="handle with care" className='w-[15%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center ml-3'>Important</p>
        </button>
        <button className='flex gap-5 mt-5 ml-5 ' onClick={toCompleted}>
            <img src={approved} alt="handle with care" className='w-[15%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center ml-3'>Completed</p>
        </button>
 
        <LogPopup/>

        </div>
        <div className=' w-[80%] flex flex-col items-center mt-10'>
        <div className='flex flex-col'>
            <h1 className='text-white font-bold text-[3rem] self-center'>Person Task</h1>
             <div className='self-center'>
                 <p className='text-white text-[2rem] font-semibold ml-15'>Daily Task</p>
                 <small className='text-white'>List refreshes everyday</small>
             </div>
             <img src={skate} alt="a person using computer" className='w-[75%] ml-10'/>  
        </div>
        <form onSubmit={handleSubmit}  className='w-[80%] mx-auto flex justify-center  bg-light_button mb-5'> 
                    <img src={plus} alt="plus sign"/>
                    <input 
                    type="text" 
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
 
export default Person;