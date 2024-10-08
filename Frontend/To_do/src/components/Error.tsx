import background from '../assets/images/background.png'
const Error = () => {
    return (
    <div style={{backgroundImage:`url(${background})`}} className='bg-center bg-cover'>
        <div className='flex justify-center'>
           <h1 className='font-bold text-[120px]'>Something Went Wrong</h1>
           <p className='font-semibold '>Please try again later</p> 

        </div>

    </div>

      );
}
 
export default Error;

