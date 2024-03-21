import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import FallBackContent from "./components/FallBackContent";
import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    projectAdded: undefined,
    projects: [],
  });

  function handleAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        projectAdded: null
      }
    })
  }
  function handleCancel(){
    setProjectState(prevState => {
      return {
        ...prevState,
        projectAdded: undefined
      }
    })
  }

  let content
  if(projectState.projectAdded===undefined)
  {
    content = <FallBackContent onClickAdd = {handleAddProject}/>
  }
  else if(projectState.projectAdded===null){
    content = <NewProject onCancel = {handleCancel}/>
  }

  return (
    <div className=" h-screen w-full mt-12 flex gap-8">
      <Sidebar onClickAdd = {handleAddProject} />
      {content}
    </div>
  );
}

export default App;
