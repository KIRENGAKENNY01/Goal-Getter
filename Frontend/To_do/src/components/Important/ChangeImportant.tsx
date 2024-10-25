import Popup from 'reactjs-popup'
import {FontAwesomeIcon} from   "@fortawesome/react-fontawesome"
import {faEllipsisV} from  "@fortawesome/free-solid-svg-icons"
import {faSync} from "@fortawesome/free-solid-svg-icons"
import Delete from '../../assets/icons/delete.png'
import { Link } from 'react-router-dom'

const ChangeImportant:React.FC<{Id:number}> = ({Id}) => {
    const PopupContent:React.FC<{close:()=>void}> = ({close}) =>{
        return(
            <div className='bg-black flex flex-col gap-4 w-full h-[50%] py-5 px-20 mx-auto'>
            <p className='text-white  font-semibold mt-5 mb-7 ml-5'>Apply Changes</p>
            <Link to={`/deleteImportant/${Id}`} className=' flex gap-4 bg-light_button p-2'>
              <img src={Delete} alt="trash icon" className='w-[20%]'/>
              <p className='text-white font-semibold'>Delete Task</p>
              </Link>
              <Link to={`/updateImportant/${Id}`} className='flex gap-4 bg-light_button p-2'>
              <FontAwesomeIcon icon={faSync}  className='text-white text-[23px]'/>
              <p className='text-white font-semibold'>Upgrade Task</p>
              </Link>
                <button className='bg-reddy px-8 py-3 text-white font-semibold self-end self-center border-2 border-white rounded-xl' onClick={close}>Cancel</button>
           
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


export default ChangeImportant;