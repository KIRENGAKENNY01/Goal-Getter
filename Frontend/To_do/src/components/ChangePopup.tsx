import Popup from 'reactjs-popup'
import {FontAwesomeIcon} from   "@fortawesome/react-fontawesome"
import {faEllipsisV} from  "@fortawesome/free-solid-svg-icons"
import {faSync} from "@fortawesome/free-solid-svg-icons"
import Delete from '../assets/icons/delete.png'
import { Link } from 'react-router-dom'




const ChangePopup:React.FC<{Id:number}> = ({Id}) => {

    
   const PopupContent:React.FC<{close:()=>void}> = ({close}) =>{
    return(
        <div className='bg-black flex flex-col gap-3 w-full h-[50%] py-5 px-20 mx-auto'>
        <p className='text-white  font-semibold mt-5 mb-7 ml-5'>Apply Changes</p>
        <Link to={`/delete/${Id}`} className='flex gap-4 bg-light_button p-2'>
          <img src={Delete} alt="trash icon" className='w-[10%]'/>
          <p className='text-white font-semibold'>Delete Task</p>
          </Link>
          <Link to={`/update/${Id}`} className='flex gap-4 bg-light_button p-2'>
          <FontAwesomeIcon icon={faSync}  className='text-white text-[23px]'/>
          <p className='text-white font-semibold'>Upgrade Task</p>
          </Link>
        <div className='flex justify-evenly gap-4 my-5'>
            <button className='bg-button px-8 py-3 text-white font-semibold mr-10' onClick={close}>Cancel</button>
            <button className='bg-reddy px-8 py-3 text-white font-semibold'>Delete</button>
        </div>
    </div>
    )
   }

    return ( 
    <Popup 
    trigger={  <FontAwesomeIcon icon={faEllipsisV} className="text-white text-[23px]"/>}
    modal
    overlayStyle={{background:"#0a0a0a80"}}
    >
    {(close)=><PopupContent close={close}/>}
    </Popup>
     );
}
 
export default ChangePopup;