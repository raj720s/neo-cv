import React, { useEffect, useRef, useState } from 'react'
import './dashboard.scss'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import UserResume from './UserResume'
import UserResume from '../../components/Resume/UserResume'
import ReactToPrint from 'react-to-print'
import { ArrowDown } from 'react-feather'
import axiosIntance from '../../utils/Axios'
import { toast } from 'react-toastify'
import Resume from '../../components/Resume/Resume'

function Dashboard(props) {
  const [resuemData, setResumeData] = useState([])
  const [resumeInfo, setResumeInfo] = useState([])

  const [error, setError] = useState('')

  useEffect(() => {
    // fetch  user resume data 
    fetchdata()
    if (resuemData.length) {
      let dataResume = resuemData.map(resume => {
        let userData = JSON.parse(resume.userData)
        let parsed = JSON.parse(userData)
        return parsed
      })
      setResumeInfo(dataResume)
    }
  }, [resumeInfo.length])

  function fetchdata() {
    try {
      axiosIntance.get('/resume/fetch-resume').then(res => {
        setResumeData(res.data.data)

      })
    } catch (error) {
      setError(e.message || e || 'register error')
      toast.error(e.message || 'login failed', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }


  console.log({ resumeInfo })


  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    // skills: "skills",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const [activeColor, setActiveColor] = useState(colors[0]);
  // const [resumeInformation, setResumeInformation] = useState({
  //   [sections.basicInfo]: {
  //     id: sections.basicInfo,
  //     sectionTitle: sections.basicInfo,
  //     detail: {},
  //   },
  //   // [sections.skills]: {
  //   //   id: sections.skills,
  //   //   sectionTitle: sections.skills,
  //   //   details: [],
  //   // },
  //   [sections.workExp]: {
  //     id: sections.workExp,
  //     sectionTitle: sections.workExp,
  //     details: [],
  //   },
  //   [sections.project]: {
  //     id: sections.project,
  //     sectionTitle: sections.project,
  //     details: [],
  //   },
  //   [sections.education]: {
  //     id: sections.education,
  //     sectionTitle: sections.education,
  //     details: [],
  //   },
  //   [sections.achievement]: {
  //     id: sections.achievement,
  //     sectionTitle: sections.achievement,
  //     points: [],
  //   },
  //   [sections.summary]: {
  //     id: sections.summary,
  //     sectionTitle: sections.summary,
  //     detail: "",
  //   },
  //   [sections.other]: {
  //     id: sections.other,
  //     sectionTitle: sections.other,
  //     detail: "",
  //   },
  // });
  // fetch list of already downloaded cvs and Templates
  // show as preview in my cvs sections
  // give option to download share edit and delete ..
  //-------------if not available --------//
  // show no cvs section and lets create ..

  // const resumeRef = useRef();
  return (
    <div className='dashboard-container'>
      <div className='intoduction-container h1'>Hi User</div>
      <div className='h3'>Select your resume.</div>
      <div className='resume-container'>
        {/* <UserResume /> */}


        {resumeInfo.length ? resumeInfo.map(info => {
          return (
            <div className='user-resume-card'>
              <UserResume
                // ref={resumeRef}
                sections={sections}
                information={info}
                activeColor={activeColor} />
            </div>
          )
        }) : (
          <div>
            you have not created any resume yet.
          </div>
        )}



        {/* <div className="container">

          <UserResume ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor} />
        </div> */}
      </div>
      <span>or</span>
      <div className='create-new-btn mb-3'>

        <Link to={'/user/templates'} className='btn 
        btn-secondary text-white text-decoration-none'>
          Create New
        </Link>

      </div>
    </div>
  )
}

export default Dashboard