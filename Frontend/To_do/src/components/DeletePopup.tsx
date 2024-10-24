

const DeletePopup= () => {

  return ( 
    <div className="bg-[#0a0a0a] w-[100%] h-screen flex flex-col gap-6 justify-center items-center" >
      <div className="w-[40%] h-[30%] rounded-xl bg-light_button flex flex-col items-center justify-center gap-10 ">
         <h2 className="text-white font-bold text-[23px]"> Do you want to delete this task ?</h2>
         <div className="flex gap-5">
           <button className="text-white bg-[#0a0a0a] py-3 px-10 rounded-xl border-2 border-white">Cancel</button>
           <button className="text-white bg-[#ff0000f4] py-3 px-10 rounded-xl border-2 border-white">Delete</button>
         </div>
      </div>
    </div>
   );
}
 
export default DeletePopup;