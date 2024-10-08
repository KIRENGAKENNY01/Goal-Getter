
import Home from "./components/Home"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Work from "./components/Work"
import WorkEdit from './components/Work_Edit'
import Person from "./components/Person"
import PersonEdit from "./components/Person_Edit"
import Important from "./components/Important"
import ImportantEdit from "./components/Important_edit"
import Completed from "./components/Completed"
import Profile from "./components/User_profile"
import DeletePop from "./components/DeletePopup"
import PageSkeleton  from './components/Skeleton'
import Error from './components/Error'

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
        <Route path="/deletepop" element={<DeletePop/>}/>
        <Route path="/skeleton" element={<PageSkeleton/>} />
        <Route path="/error" element={<Error/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
