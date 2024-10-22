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
<Popup trigger={<button className='flex gap-5 mt-20 ml-5 sm:w-[30%] md:w-[50%] lg:w-[70%] '>
            <img src={logout} alt="handle with care" className='sm:w-[15%] md:[18%] lg:w-[20%]'/>
             <p className='text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center'>Log out</p>
        </button>} modal overlayStyle={{backgroundColor :`#0a0a0a80`}}>
        
    {(close: () =>void)=><PopupContent close={close}/>}


</Popup>
    )
}

export default LogPopup;