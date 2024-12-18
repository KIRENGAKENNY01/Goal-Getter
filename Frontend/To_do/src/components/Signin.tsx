import background from '../assets/images/background.png'
import { Link, useNavigate } from 'react-router-dom';
import{useState} from 'react'
import axios from 'axios'
interface FormData{
    email:string,
    password:string
}

const Signin:React.FC = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState<FormData>({
     email:'',
     password:''
    })
    // const[error,setError]=useState(null);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const{name,value}=e.target;
      setFormData({
        ...formData,
         [name]:value

      })
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/user/valid',formData)
        .then(()=>{
            navigate('/work')
        }) 
        .catch((err)=>{
            // this will help us in debugging steps 
            // if err is either on the response,request or is another random error
            if(err.response){
               console.log(err.response.data)

            }
            else if(err.request){
                console.log("Error  request :",err.request.data)
            }
            else{
                console.log("Error message :",err.message)
            }
        
        })
       }

    return ( 
        <div style={{backgroundImage : `url(${background})`}} className='h-screen bg-cover bg-center'>
        <div className='flex justify-center items-center w-full h-full'>
            <form onSubmit={handleSubmit} className='bg-gradient-to-b from-liyellow via-liblack to-liyellow  sm:w-[50%] sm:h-[50%] md:h-[50%] md:w-[40%] lg:w-[30%] lg:h-[70%] mt-10 flex flex-col items-center '>
               <h1 className='font-bold text-white sm:text-[1.3rem] md:text-[1.5rem] text-[1.7rem] my-10 '>Log in</h1>
                 {/* {error && <div className='text-reddy'>{error}</div>} */}
               
               <div className='self-start ml-10 mb-5'>
                   <label htmlFor="name" className='block text-white sm:text-[70%] md:text-[85%] lg:text-[100%] mb-4'>Email</label>
                   <input type="email"
                    id='name'
                     name='email' 
                     onChange={handleChange}
                      className='rounded-xl sm:px-2 md:px-5 lg:px-7 bg-input_color focus:outline-none  border-2 focus:border-liyellow '/>
               </div>
               <div className='self-start ml-10 w-full mb-10'>
                   <label htmlFor="name" className='block text-white sm:text-[70%] md:text-[85%] lg:text-[100%] mb-4'>Password</label>
                   <input type="password"
                    id='name' 
                    name='password' 
                    onChange={handleChange}
                     className='rounded-xl sm:px-2 md:px-5 lg:px-7 bg-input_color focus:outline-none border-2 focus:border-liyellow   '/>
               </div>
               <Link to='/signup'><a href='' className='text-link_color text-[13px] underline mr-12 mb-5 hover:text-hover'>Don't have an account?Create one</a></Link> 
              
               <button className='bg-button text-white sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-bold sm:w-[110px] md:w-[130px] lg:w-[150px] mx-auto h-[55px] rounded-full hover:bg-hover hover:underline mt-3' type='submit'>Sign in</button>
            </form>
        </div>

       </div>
     );
}
 
export default Signin;