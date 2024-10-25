import approved from '../../assets/icons/tick.png'
import { useNavigate } from 'react-router-dom';

const SuccessPerson = () => {
    const navigate=useNavigate();
    const toPersonEdit:React.MouseEventHandler<HTMLButtonElement> = () => navigate('/personedit')
  

    return ( 
        <div className='bg-[#333435] w-[100%] h-screen flex justify-center items-center p-2'>
        <div className='bg-[#010101] w-[40%] h-[50%] flex  flex-col items-center p-2  rounded-l'>
            <img src={approved} alt="green tick" className='w-[20%] mt-2'/>
             <div className='flex flex-col justify-center items-center mt-4'>
                 <h1 className='text-white font-bold text-[30px]'>Success !!</h1>
                 <small className='text-white '>The note was deleted successfully</small>
             </div>
             <button className="text-white bg-button py-3 px-10 rounded-xl   mt-4" onClick={toPersonEdit} >Cancel</button>
        </div>
     </div>
     );
}
 
export default SuccessPerson;