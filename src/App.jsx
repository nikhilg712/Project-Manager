import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import FallBackContent from "./components/FallBackContent";
import { useState } from "react";
import OnProjectClick from "./components/OnProjectClick";
function App() {
  const [projectState, setProjectState] = useState({
    projectAdded: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    if(text.trim()!==""){
      setProjectState((prevState) => {
        const taskId = Math.random();
        let newTask = {
          taskId:taskId,
          text: text,
          projectid : projectState.projectAdded
        }  
        return {
          ...prevState,
          tasks: [...prevState.tasks, newTask],
        };
      });
      
    }
  }

  function handleDeleteTask(taskId){
    setProjectState((prevState) => {
      const updatedTasks = [...prevState.tasks];
      updatedTasks.splice(taskId, 1);
      return updatedTasks;
    });
  }

  function projectContainer(projectData) {
    setProjectState((prevState) => {
      const newProject = { ...projectData, id: Math.random()};

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        projectAdded: undefined,
      };
    });
  }

  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectAdded: null,
      };
    });
  }
  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectAdded: undefined,
      };
    });
  }

  function handleProjectClick(id) {
    setProjectState((prevState) => {
      return { ...prevState, projectAdded: id };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.projectAdded
  );

  console.log(projectState.projects);
  let content;
  if (projectState.projectAdded === undefined) {
    content = <FallBackContent onClickAdd={handleAddProject} />;
  } else if (projectState.projectAdded === null) {
    content = <NewProject onSave={projectContainer} onCancel={handleCancel} />;
  } else if(projectState.projectAdded) content = <OnProjectClick project={selectedProject} tasks={projectState.tasks} onAddTask={handleAddTask} onDelete={handleDeleteTask}/>;

  return (
    <div className=" h-screen w-full mt-12 flex gap-8">
      <Sidebar
        projects={projectState.projects}
        projectClick={handleProjectClick}
        onClickAdd={handleAddProject}
        projectAdded={projectState.projectAdded}
      />
      {content}
    </div>
  );
}

export default App;
