import { FaExclamationTriangle } from 'react-icons/fa';
import background from '../assets/images/background.png'
const Error = () => {
    return (
    <div style={{backgroundImage:`url(${background})`}} className='bg-center bg-cover h-screen'>
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='flex  gap-5 items-center'>
                <FaExclamationTriangle className='text-[#ff0000] text-[200%]'/>
                           <h1 className='font-bold text-[40px] text-white'>Something Went Wrong</h1>
            </div>
           <p className='font-semibold text-white text-[#adadad80]'>Please try again later</p> 

        </div>

    </div>

      );
}
 
export default Error;

