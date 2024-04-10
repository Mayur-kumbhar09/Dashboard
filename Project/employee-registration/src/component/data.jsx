import TestSkills from "./TestSkills";
import Application from "./Application";
import JobSearch from "./JobSearch";
import Summery from "./Summery";
import About from "./About";
import Setting from "./Setting";
import UserInfo from "./UserInfo";

export const Pages =[
    { id: "1", txt: "Dashboard", page: <UserInfo /> },
    { id: "2", txt: "Test Skill's", page: <TestSkills /> },
    { id: "3", txt: "Application", page: <Application /> },
    { id: "4", txt: "Job Search", page: <JobSearch /> },
    { id: "5", txt: "Summery", page: <Summery /> },
    { id: "6", txt: "About", page: <About /> },
    { id: "7", txt: "Setting", page: <Setting /> },
  ];