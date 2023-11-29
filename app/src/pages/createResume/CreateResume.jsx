import React, { useEffect, useRef, useState } from 'react'
import './createresume.scss'
import DynamicForm from '../../components/DetailsForm/DynamicForm'
import Editor from '../../components/Editor/Editor'
import Resume from '../../components/Resume/Resume';
import { ArrowDown } from "react-feather";
import ReactToPrint from "react-to-print";
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosIntance from '../../utils/Axios';

function CreateResume(props) {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const params = useParams()
  const localtion = useLocation()
  // console.log({ params, localtion })


  const [activeColor, setActiveColor] = useState(colors[0]);
  let edit = localtion.pathname.includes('/edit')
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });


  useEffect(() => {
    if (localtion.pathname.includes('edit') && params.resumeID) {
      fetchdata()
    }
  }, [localtion])




  function fetchdata() {
    try {
      axiosIntance.post('/resume/fetch-user-resume', {
        id: params.resumeID
      }).then(res => {
        if (res.data.data) {
          console.log(res.data.data)
          // setResumeData(res.data.data)
          // let dataResume = res.data.data.map(resume => {
          let userData = JSON.parse(res.data.data?.userData)
          let parsed = typeof userData == 'string' ? JSON.parse(userData) : userData
          return parsed
          // })          
        }
      }).then(info => {
        setResumeInformation(info)
      })
    } catch (e) {
      toast.error(e.message || 'login failed', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }



  // const resumeRef = useRef();
  console.log({ resumeInformation })
  return (
    <>
      <div className='resume-layout'>
        <div className='details-container'>

          <Editor sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />

        </div>
        <div className='preview-container'>
          <Resume
            // ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
        </div>
      </div>
      {/* <ReactToPrint
        trigger={() => {
          return (
            <button>
              Download <ArrowDown />
            </button>
          );
        }}
        content={() => resumeRef.current}
      /> */}
    </>
  )
}

export default CreateResume
