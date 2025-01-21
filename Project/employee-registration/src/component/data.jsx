import TestSkills from "./TestSkills";
import JobSearch from "./JobSearch";
import About from "./About";
import Setting from "./Setting";
import UserInfo from "./UserInfo";

export const Pages = [
  { id: "1", txt: "Dashboard", page: <UserInfo /> },
  { id: "2", txt: "Test Skill's", page: <TestSkills /> },
  { id: "3", txt: "Job Search", page: <JobSearch /> },
  { id: "4", txt: "About", page: <About /> },
  { id: "5", txt: "Setting", page: <Setting /> },
];