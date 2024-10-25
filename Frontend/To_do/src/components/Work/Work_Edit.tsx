import background from "../../assets/images/background.png";
import logo from "../../assets/icons/logo.png";
import user from "../../assets/icons/user.png";
import office from "../../assets/icons/office.png";
import person from "../../assets/icons/person.png";
import approved from "../../assets/icons/approved.png";

import email from "../../assets/icons/email.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LogPopup from "../LogPopup";
import axios from "axios";
import PageSkeleton from "../Skeleton";
import ErrorPage from "../ErrorPage"

import ChangePopup from "./ChangeWork";


interface Description {
  Description: string;
}

interface Tasks {
  Completed: string;
  Description: string;
  _id: number;
  Id:number;
}

const WorkEdit: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Tasks[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();
  const [taskData, setTaskData] = useState<Description>({
    Description: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/task/work", taskData)
      .then(() => {
        console.log("Task has been handled");
        setTaskData({ Description: "" });
      })
      .catch((err) => {
        if (err.response) {
          console.log("Err response:", err.response.data);
        } else if (err.request) {
          console.log("Err request :", err.request.data);
        } else {
          console.log("Err message :", err.message);
        }
      });
  };

  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);

      try {
        const getData = await fetch("http://localhost:5000/api/task/work");
        console.log(getData);
        if (!getData) {
          throw new Error(`HTTP error `);
        }
        const realData = await getData.json();
        console.log("Fetched Data:", realData);
        setData(realData.data);
      } catch (err: any) {
        console.log("Err during fetching data", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchedData();
  }, []);

 

  if (loading) {
    return <PageSkeleton />;
  }
  if(error){
    return <ErrorPage />
  }

  const toProfile: React.MouseEventHandler<HTMLButtonElement> = () =>
    navigate("/profile");
  const toPerson: React.MouseEventHandler<HTMLButtonElement> = () =>
    navigate("/person");
  const toImportant: React.MouseEventHandler<HTMLButtonElement> = () =>
    navigate("/important");
  const toCompleted: React.MouseEventHandler<HTMLButtonElement> = () =>
    navigate("/completed");

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className=" bg-cover bg-center h-screen overflow-hidden overflow-y-auto"
    >
      <div className="flex ">
        <div className="relative w-[20%]  bg-gradient-to-b from-liblack via-liyellow to-liblack overflow-y-auto">
          <div className="flex sm:gap-1 md:gap-3 lg:gap-5 mt-5 mb-10 ml-5">
            <img src={logo} alt="handle with care" className="sm:w-[20%] md:w-[13%] lg:w-[15%]" />
            <p className="text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center">
              Goal Getter
            </p>
          </div>
          <button className="flex sm:gap-1 md:gap-3 lg:gap-5 mt-5 ml-5" onClick={toProfile}>
            <img src={user} alt="handle with care" className="sm:w-[20%] sm:h-[20%] md:w-[20%] h-[20%] lg:w-[15%]" />
            <p className="text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center">
              John Kabera
            </p>
          </button>
          <button className="flex sm:gap-1 md:gap-3 lg:gap-5 mt-20 bg-button w-full py-2">
            <img
              src={office}
              alt="handle with care"
              className="sm:w-[18%] md:w-[13%] lg:w-[15%] ml-5"
            />
            <p className="text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center">
              Work
            </p>
          </button>
          <button className="flex sm:gap-1 md:gap-3 lg:gap-5  mt-5 ml-5 " onClick={toPerson}>
            <img src={person} 
            alt="handle with care"
             className="sm:w-[18%] md:w-[17%] lg:w-[15%]" />
            <p className="text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center ml-2">
              Personal
            </p>
          </button>
          <button className="flex sm:gap-1 md:gap-3 lg:gap-5 mt-5 ml-5 " onClick={toImportant}>
            <img src={email}
             alt="handle with care"
             className="'sm:w-[20%] md:w-[13%] lg:w-[15%]" />
            <p className="text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center ml-3">
              Important
            </p>
          </button>
          <button className="flex sm:gap-1 md:gap-3 lg:gap-5 mt-5 ml-5 " onClick={toCompleted}>
            <img src={approved} 
            alt="handle with care"
             className="sm:w-[20%] md:w-[13%] lg:w-[15%]" />
            <p className="text-white font-semibold sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] self-center ml-3">
              Completed
            </p>
          </button>

          <LogPopup />
        </div>
        <div className=" w-[80%] flex flex-col items-start mt-10 overflow-y-auto">
          <div className="flex flex-col w-[100%]">
            <div className="ml-10 mb-10">
              <p className="text-white text-[2rem] font-semibold ml-15">
                My Day
              </p>
              <small className="text-white">Monday 9 September</small>
            </div>
            <h2 className="text-white self-center text-[120%] font-semibold">Today's Tasks</h2>
          </div>
          {data.map((info) => (
            <div
              className="w-[80%] mx-auto bg-light_button my-5  p-2 flex  justify-between items-center"
              key={info._id}
            >
              <div className="flex items-center gap-2">
               <ChangePopup Id={info.Id}/>
                <div className="text-white">{info.Description}</div>
              </div>
              <button className="bg-hover px-5 py-2 text-white" type="submit" >
              Completed
            </button>
            </div>
          ))} 
          <form
            onSubmit={handleSubmit}
            className="w-[80%] mx-auto flex justify-center  bg-light_button  my-10"
          >
            <div className=" ml-3 w-8 h-8 rounded-full border-4 border-white self-center"></div>
            <input
              type="text"
              onChange={handleChange}
              name="Description"
              value={taskData.Description}
              className="w-[80%] text-white flex-grow bg-light_button p-3 outline-none"
            />
            <button className="bg-hover px-5 text-white" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkEdit;

//  className='w-[80%] placeholder-white text-white flex-grow bg-light_button p-2 outline-none'
