import background from '../assets/images/background.png'
import logo from '../assets/icons/logo.png'
import user from '../assets/icons/user.png'
import office from '../assets/icons/office.png'
import person from '../assets/icons/person.png'
import approved from '../assets/icons/approved.png'
import email from '../assets/icons/email.png'
import userProfile from '../assets/icons/user_profile.png'
import { useNavigate } from 'react-router-dom'
import LogPopup from './LogPopup'
const Profile = () => {
    const navigate=useNavigate();
    const toPerson:React.MouseEventHandler<HTMLButtonElement> = ()=> navigate('/person')
    const towork:React.MouseEventHandler<HTMLButtonElement> =()=>navigate('/work')
    const toImportant:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/important')
    const toCompleted:React.MouseEventHandler<HTMLButtonElement> = ()=>navigate('/completed')
    return ( 
        <div  style={{backgroundImage:`url(${background})`}} className="bg-cover bg-center">
        <div className='flex'>
        <div className='w-[20%] h-screen bg-gradient-to-b from-liblack via-liyellow to-liblack'>
        <div className='flex gap-5 mt-5 mb-10 ml-5'>
            <img src={logo} alt="handle with care" className='w-[20%]'/>
             <p className='text-white font-semibold text-[1.3rem] self-center'>Goal Getter</p>
        </div>
        <button className='flex gap-5 mt-5 bg-button w-full py-2 ' >
            <img src={user} alt="handle with care" className='w-[15%] ml-4' />
             <p className='text-white font-semibold text-[1.3rem] self-center'>John Kabera</p>
        </button>
        <button className='flex gap-5 mt-20 ml-5' onClick={towork}>
            <img src={office} alt="handle with care" className=' w-[20%]'/>
             <p className='text-white font-semibold text-[1.3rem] self-center ml-2' >Work</p>
        </button>
        <button className='flex gap-5 mt-5 ml-5' onClick={toPerson}>
            <img src={person} alt="handle with care" className='w-[15%]  '/>
             <p className='text-white font-semibold text-[1.3rem] self-center ml-2'>Personal</p>
        </button>
        <button className='flex gap-5 mt-5 ml-5 ' onClick={toImportant}>
            <img src={email} alt="handle with care" className='w-[15%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center ml-2'>Important</p>
        </button>
        <button className='flex gap-5 mt-5 ml-5 ' onClick={toCompleted}>
            <img src={approved} alt="handle with care" className='w-[15%]' />
             <p className='text-white font-semibold text-[1.3rem] self-center ml-2'>Completed</p>
        </button>
        <LogPopup/>

        </div>
        <div className=' w-[80%] flex flex-col items-start mt-10'>
         <img src={userProfile} alt="user" className='self-center mt-5 w-[10%]' />
         <form className='w-full mt-20 '>
            <div className='ml-10 flex items-center'>
                <label htmlFor="name" className='text-white ml-12 font-bold text-[20px]'>Names</label>
                <input type="text" value='KIRENGA Kenny' className='outline-none  px-5 py-3 mx-5 bg-button text-white' />
                <button className='bg-button w-[15%] py-2 text-white '>Change Name</button>
            </div>
            <div className='ml-10 flex gap-4 items-center mt-10'>
                <label htmlFor="name" className='text-white ml-12 font-bold text-[20px]'>Email</label>
                <div className='w-full'>
                    <input type="text" value='kennykirenga72@gmail.com' className='outline-none  px-5 py-3 mx-5 bg-button text-white ' />
                    <button className='bg-button w-[15%] py-2 text-white '>Change Email</button>
                </div>
            </div>
            <div className='ml-10 flex items-center mt-10'>
                <label htmlFor="name" className='text-white ml-12 font-bold text-[20px]'>Password</label>
                <input type="text" value='KIRENGA Kenny' className='outline-none  px-5 py-3 mx-5 bg-button text-white' />
                <button className='bg-button w-[15%] py-2 text-white '>Change Password</button>
            </div>
         </form>
       
        </div>
        </div>
        </div>
     );
}
 
export default Profile;