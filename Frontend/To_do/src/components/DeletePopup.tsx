import Popup from 'reactjs-popup';
import deleteIcon from '../assets/icons/delete.png'


const PopupContent:React.FC<{close:()=>void}> = ({close})=>{
    return (
        <div className='bg-black w-full py-5 px-20 mx-auto'>
            <p className='text-white font-semibold mt-5 mb-7 ml-5'>Do you want to delete this note?</p>
            <div className='flex justify-evenly gap-4 my-5'>
                <button className='bg-button px-8 py-3 text-white font-semibold mr-10' onClick={close}>Cancel</button>
                <button className='bg-reddy px-8 py-3 text-white font-semibold'>Delete</button>
            </div>
        </div>
    )
}
const DeletePop= () => {
  return (
    <Popup
      trigger={<button><img src={deleteIcon} alt=" a trash bin" className='w-[50%]'/></button>}
      modal
      overlayStyle={{ backgroundColor: '#0a0a0a80' }}
    >
     {(close)=><PopupContent close={close}/>} 
    </Popup>
  );
};

export default DeletePop;
