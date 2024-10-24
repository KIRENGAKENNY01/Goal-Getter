import Popup from "reactjs-popup";
import logout from '../assets/icons/logout.png';
import { useNavigate } from "react-router-dom";

const PopupContent:React.FC<{close:()=> void}> = ({close})=>{
    const navigate=useNavigate();
    const toHome:React.MouseEventHandler<HTMLButtonElement> = () => navigate('/')
    return (
        <div className='bg-black w-full py-5 px-20 mx-auto'>
        <p className='text-white font-semibold mt-5 mb-7 ml-20 text-[20px]'>Are you sure?</p>
        <div className='flex justify-evenly gap-4 my-5'>
            <button className='bg-button px-8 py-3 text-white font-semibold mr-10' onClick={close}>Cancel</button>
            <button className='bg-reddy px-8 py-3 text-white font-semibold' onClick={toHome}>Log out</button>
        </div>
    </div>
    )

}


const LogPopup:React.FC = ()=>{
    return (
<Popup trigger={<button className='absolute bottom-[20px] flex items-center sm:gap-1 md:gap-3 lg:gap-5 mt-5 ml-5 mt-10 '>
            <img src={logout} alt="handle with care" className='sm:w-[20%] sm:h-[20%] md:w-[20%] h-[20%] lg:w-[20%]'/>
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center'>Log out</p>
        </button>} modal overlayStyle={{backgroundColor :`#0a0a0a80`}}>
        
    {(close: () =>void)=><PopupContent close={close}/>}


</Popup>
    )
}

export default LogPopup;