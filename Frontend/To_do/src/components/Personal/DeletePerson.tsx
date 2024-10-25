import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'


const DeletePerson = () => {
    const {Id}=useParams();
    const navigate=useNavigate();
    const toPersonEdit:React.MouseEventHandler<HTMLButtonElement> = () => navigate('/personedit')


    const handleDelete=()=>{
    axios.delete('http://localhost:5000/api/task/person/'+Id)
    .then(()=>{
        navigate('/successPerson')
    })
    .catch((err)=>{
        if(err.response){
            console.log("Err response :",err.response.data)
        }
        else if(err.request){
            console.log("Err request :",err.request.data)
        }
        else{
            console.log("Err message :",err.message)
        }
    })
    }
    return (
        <div className="bg-[#0a0a0a] w-[100%] h-screen flex flex-col gap-6 justify-center items-center" >
        <div className="w-[40%] h-[30%] rounded-xl bg-light_button flex flex-col items-center justify-center gap-10 ">
           <h2 className="text-white font-bold text-[23px]"> Do you want to delete this task ?</h2>
           <div className="flex gap-5">
             <button className="text-white bg-[#0a0a0a] py-3 px-10 rounded-xl border-2 border-white" onClick={toPersonEdit} >Cancel</button>
             <button className="text-white bg-[#ff0000f4] py-3 px-10 rounded-xl border-2 border-white" onClick={()=> handleDelete()} >Delete</button >
           </div>
        </div>
      </div>
      );
}
 
export default DeletePerson;