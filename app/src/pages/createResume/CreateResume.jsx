import React, { useRef, useState } from 'react'
import './createresume.scss'
import DynamicForm from '../../components/DetailsForm/DynamicForm'
import Editor from '../../components/Editor/Editor'
import Resume from '../../components/Resume/Resume';
import { ArrowDown } from "react-feather";
import ReactToPrint from "react-to-print";
function CreateResume() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    // skills: "skills",
    // skills: "skills",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },

    // [sections.skills]: {
    //   id: sections.skills,
    //   sectionTitle: sections.skills,
    //   details: [],
    // },
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

  // const resumeRef = useRef();
  // console.log({ resumeInformation })
  return (
    <>
      <div className='resume-layout'>
        <div className='details-container'>
          <Editor sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation} />
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
