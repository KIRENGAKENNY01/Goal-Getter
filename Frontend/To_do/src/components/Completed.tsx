
import background from '../assets/images/background.png'
import logo from '../assets/icons/logo.png'
import user from '../assets/icons/user.png'
import office from '../assets/icons/office.png'
import person from '../assets/icons/person.png'
import approved from '../assets/icons/approved.png'
import email from '../assets/icons/email.png'
import { useNavigate } from 'react-router-dom'
import LogPopup from './LogPopup'

const Completed = () => {
    const navigate=useNavigate();
    const toProfile:React.MouseEventHandler<HTMLButtonElement> = ()=> navigate('/profile')
    const towork:React.MouseEventHandler<HTMLButtonElement> =()=>navigate('/work')
    const toPerson:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/person')
    const toImportant:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/important')
    return (
<div  style={{backgroundImage:`url(${background})`}} className="bg-cover bg-center">
        <div className='flex'>
        <div className='w-[20%] h-screen bg-gradient-to-b from-liblack via-liyellow to-liblack'>
        <div className='flex  sm:gap-1 md:gap-3 lg:gap-5 mt-5 mb-10 ml-5'>
            <img src={logo}
             alt="handle with care"
              className='sm:w-[20%] md:w-[13%] lg:w-[15%]' />
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center'>Goal Getter</p>
        </div>
        <button className='flex  sm:gap-1 md:gap-3 lg:gap-5 mt-5 ml-5' onClick={toProfile}>
            <img src={user}
             alt="handle with care" 
             className='sm:w-[20%] sm:h-[20%] md:w-[20%] h-[20%] lg:w-[15%]' />
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center'>John Kabera</p>
        </button>
        <button className='flex  sm:gap-1 md:gap-3 lg:gap-5 mt-20' onClick={towork}>
            <img src={office}
             alt="handle with care"
              className='sm:w-[18%] md:w-[13%] lg:w-[15%] ml-5'/>
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center ml-2' >Work</p>
        </button>
        <button className='flex  sm:gap-1 md:gap-3 lg:gap-5 mt-5 ml-1' onClick={toPerson} >
            <img src={person}
             alt="handle with care" 
             className='sm:w-[18%] md:w-[17%] lg:w-[20%]  ml-4'/>
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center ml-2'>Personal</p>
        </button>
        <button className='flex  sm:gap-1 md:gap-3 lg:gap-5 mt-5 ml-5' onClick={toImportant}>
            <img src={email} 
            alt="handle with care" 
            className='sm:w-[18%] md:w-[17%] lg:w-[20%] ' />
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center ml-2'>Important</p>
        </button>
        <button className='flex  sm:gap-1 md:gap-3 lg:gap-5 mt-5  bg-button w-full py-2' >
            <img src={approved} 
            alt="handle with care"
             className='sm:w-[18%] md:w-[17%] lg:w-[20%]  ml-4' />
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center '>Completed</p>
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
                <div className='w-[80%] mx-auto flex gap-3  bg-light_button mb-5'> 
                    <div className=' ml-3 w-8 h-8 rounded-full border-4 border-white self-center '></div> 
                     <p  className='w-[80%]  text-white  p-2 outline-none line-through'>Wake up 5:00 am</p>
                    </div>  
                    <div className='w-[80%] mx-auto flex gap-3  bg-light_button mb-5'> 
                    <div className=' ml-3 w-8 h-8 rounded-full border-4 border-white self-center'></div> 
                    <p  className='w-[80%]  text-white  p-2 outline-none line-through'>Pray God</p>
                    </div> 
                    <div className='w-[80%] mx-auto flex gap-3  bg-light_button mb-5'> 
                    <div className=' ml-3 w-8 h-8 rounded-full border-4 border-white self-center'></div> 
                    <p  className='w-[80%]  text-white   p-2 outline-none line-through'>Pray God</p>
                    </div> 
                    <div className='w-[80%] mx-auto flex gap-3  bg-light_button mb-5'> 
                    <div className=' ml-3 w-8 h-8 rounded-full border-4 border-white self-center'></div> 
                    <p  className='w-[80%]  text-white   p-2 outline-none line-through'>Eat breakfast</p>
                    </div> 
                    <div className='w-[80%] mx-auto flex gap-3  bg-light_button mb-5'> 
                    <div className=' ml-3 w-8 h-8 rounded-full border-4 border-white self-center'></div> 
                    <p  className='w-[80%]  text-white  p-2 outline-none line-through'>Prepare my self</p>
                    </div>  
            
        </div>
        </div>
        </div>
      );
}
 
export default Completed;