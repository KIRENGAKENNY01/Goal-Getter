import background from '../assets/images/background.png';
import { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// defining the blueprint of our form data
interface FormData {
  username: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });
   
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/user', formData)
      .then(() => console.log("Signup was successfull"))
      .then(()=>{
        navigate('/signin')})
      .catch((err) => {
      if(err.response){
        console.log("Error response: ",err.response.data);
      }
      else if(err.request){
        console.log("Error request :",err.request.data);
      }
      else{
        console.log("error message: ",err.message);
      }
  })
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover bg-center">
      <div className="flex justify-center items-center w-full h-full">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="bg-gradient-to-b from-liyellow via-liblack to-liyellow sm:w-[50%] sm:h-[45%] md:h-[50%] md:w-[40%] lg:w-[30%] lg:h-[70%] mt-10 flex flex-col items-center"
        >
          <h1 className="font-bold text-white sm:text-[1.3rem] md:text-[1.5rem] text-[1.7rem] my-5">Create account</h1>
          <div className="self-start ml-10 mb-5">
            <label htmlFor="username" className="block text-white mb-4 sm:text-[70%] md:text-[85%] lg:text-[100%]">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="rounded-xl sm:px-2 md:px-5 lg:px-7 bg-input_color focus:outline-none border-liyellow hover:border-2 border-liyellow text-black"
              required
            />
          </div>
          <div className="self-start ml-10 mb-5">
            <label htmlFor="email" className="block text-white mb-4  sm:text-[70%] md:text-[85%] lg:text-[100%]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="rounded-xl  sm:px-2 md:px-5 lg:px-7 bg-input_color focus:outline-none border-liyellow hover:border-2 border-liyellow"
              required
            />
          </div>
          <div className="self-start ml-10 w-full mb-8">
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-white mb-4  sm:text-[70%] md:text-[85%] lg:text-[100%]">Password</label>
              <Link to="/signin"> <a href="#" className="text-link_color sm:text-[9px] lg:text-[13px] underline mr-12 hover:text-hover">
                Already have an account?
              </a></Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="rounded-xl  sm:px-2 md:px-5 lg:px-7 bg-input_color focus:outline-none border-liyellow hover:border-2 border-liyellow"
              required
            />
          </div>
          <button
            className="bg-button text-white font-bold mb-5  mx-auto rounded-full hover:bg-hover hover:underline sm:text-[0.8rem] sm:w-[110px] sm:h-[40px] md:text-[1.1rem] md:w-[130px] md:h-[43px] lg:text-[1.4rem] lg:w-[150px] lg:h-[55px]  "
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
