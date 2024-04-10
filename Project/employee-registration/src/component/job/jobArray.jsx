import accenture from "../../image/company_logo/Accenture-logo.png"
import ibm from "../../image/company_logo/IBM_logo.jpg"
import amazon from "../../image/company_logo/amazon_logo.png"
import tata from "../../image/company_logo/tata-logo.png"
import oracle from "../../image/company_logo/Oracle_logo.png"
const jobData = [
    {
        id: "1",
        companyLogo: <img src={accenture} alt="" srcset="" height="130px" width="100%" style={{ margin: "auto", padding: "4px" }} />,
        companyName: "Accenture",
        dop: `${new Date().toLocaleString()}`,
    },
    {
        id: "2",
        companyLogo: <img src={ibm} alt="" height="130px" width="100%" style={{ margin: "auto", padding: "4px" }} />,
        companyName: "IBM",
        dop: `${new Date().toLocaleString()}`
    },
    {
        id: "3",
        companyLogo: <img src={amazon} alt="" srcset="" height="100px" width="100%" style={{ margin: "auto", padding: "4px" }} />,
        companyName: "Amazon",
        dop: `${new Date().toLocaleString()}`,
    },
    {
        id: "4",
        companyLogo: <img src={tata} alt="" srcset="" height="130px" width="100%" style={{ margin: "auto", padding: "4px", }} />,
        companyName: "Tata Technologies",
        dop: `${new Date().toLocaleString()}`,
    },
    {
        id: "5",
        companyLogo: <img src={oracle} alt="" srcset="" height="30px" width="100%" style={{ margin: "auto", padding: "4px" }} />,
        companyName: "Oracle",
        dop: `${new Date().toLocaleString()}`,
    },
]

export default jobData;