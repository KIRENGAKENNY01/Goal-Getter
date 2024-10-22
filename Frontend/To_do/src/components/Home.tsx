
import background from '../assets/images/background.png'
import logo from '../assets/icons/logo.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const toSignup:React.MouseEventHandler<HTMLButtonElement> = () => navigate('/signup')
    return (
        <div style={{backgroundImage:`url(${background})`}} className='h-screen bg-cover bg-center '>
        <div className='w-full h-[80%] flex justify-center items-center'>
               <div className='flex justify-center align-center w-[30%]  sm:h-[20%] md:h-[30%] lg:h-[50%] rounded-full bg-gradient-to-b from-liblack via-liyellow to-liblack flex justify-center gap-4'>
                 <img src={logo} alt="Hands with a cube" className='sm:w-5 sm:h-5   md:w-10 md:h-10 lg:w-30 lg:h-20 object-scale-down self-center'/>
                 <div className='self-center'>
                   <h1 className='text-white font-bold sm:text-[10px] lg:text-[30px] md:text-[20px]'>Goal Getter</h1>
                   <p className='text-white md:text-[20px] sm:text-[10px] lg:text-[20px]'>Future in your hands</p>
                 </div>
             </div>
        </div>
        <div className='flex justify-center align-center '>
          <button className='bg-button text-white sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-bold sm:w-[150px] md:w-[180px] lg:w-[200px] mx-auto h-[60px] rounded-full hover:bg-hover hover:underline ' onClick={toSignup}>Get Started</button>
          </div>
        </div> 
      );
}
 
export default Home;