
import Home from "./components/Home"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Work from "./components/Work/Work"
import WorkEdit from './components/Work/Work_Edit'
import Person from "./components/Personal/Person"
import PersonEdit from "./components/Personal/Person_Edit"
import Important from "./components/Important/Important"
import ImportantEdit from "./components/Important/Important_edit"
import Completed from "./components/Completed"
import Profile from "./components/User_profile"
import DeletePop from "./components/Work/DeleteWork"
import PageSkeleton  from './components/Skeleton'
import Update from "./components/Work/UpdateWork"
import Error from './components/ErrorPage'
import Success from "./components/Work/SuccessWork"
import UpdatePerson from "./components/Personal/UpdatePerson"
import DeletePerson from "./components/Personal/DeletePerson"
import SuccessPerson from "./components/Personal/SuccessPerson"
import UpdateImportant from "./components/Important/UpdateImportant"
import DeleteImportant from "./components/Important/DeleteImportant"
import SuccessImportant from "./components/Important/SuccessImportant"

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/workedit" element={<WorkEdit/>}/>
        <Route path="/person" element={<Person/>}/>
        <Route path="/personedit" element={<PersonEdit/>}/>
        <Route path="/important" element={<Important/>}/>
        <Route path="/importantedit" element={<ImportantEdit/>}/>
        <Route path="/completed" element={<Completed/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/deleteWork/:Id" element={<DeletePop/>}/>
        <Route path="/skeleton" element={<PageSkeleton/>} />
        <Route path="/error" element={<Error/>}/>
        <Route path="/updateWork/:Id" element={<Update/>}/>
        <Route path="/successWork" element={<Success/>} />
        <Route path="/updatePerson/:Id" element={<UpdatePerson/>}/>
        <Route path="/deletePerson/:Id" element={<DeletePerson/>}/>
        <Route path="/successPerson" element={<SuccessPerson/>}/>
        <Route path="/updateImportant/:Id" element={<UpdateImportant/>}/>
        <Route path="/deleteImportant/:Id" element={<DeleteImportant/>}/>
        <Route path="/successImportant" element={<SuccessImportant/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
