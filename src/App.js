import './App.css';
import { ImMobile } from 'react-icons/im';
import { IoMdMail } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"
import { BiLogoLinkedin } from "react-icons/bi"
import { AiFillGithub } from "react-icons/ai"
import Education from './Component/Education';
import Experience from './Component/Experience';
import Project from './Component/Project';
import { useState } from 'react';

function App() {

  const [ card, setCard ] = useState('') 

  const educationData = [
    {
      id: 1,
      name: "Pashchimanchal Campus",
      course: "Bachelors in Engineering",
      board: "Tribhuvan University",
      address: "Lamachaur",
      city: "Pokhara",
      startDate: "November 2018",
      endDate: "June 2023"
    },
    {
      id: 2,
      name: "SOS Hermann Gemeiner School",
      course: "High School",
      board: "Nepal Education Board",
      address: "Rambazar",
      city: "Pokhara",
      startDate: "April 2016",
      endDate: "April 2018"
    }
  ]

  const experienceData = [
    {
      id: 1,
      name: "Inspire Nepal, UVIC",
      post: "Solution Developer",
      city: "Lalitpur",
      startDate: "August 2023",
      endDate: "Present",
      description: "Developed Full Stack Web Applications using React JS andDot Net along with MySQL."
    },
    {
      id: 2,
      name: "Intopros Technologies",
      post: "Frontend Intern",
      city: "Lalitpur",
      startDate: "May 2023",
      endDate: "August 2023",
      description: "Developed dynamic and responsive frontend componentsusing React JS and Tailwind CSS."
    }
  ]

  const projectData = [
    {
      id: 1,
      name: "Decentralized Finance",
      description: "Worked to design and deploy a Decentralized Finance platform that enables users to stake and borrow cryptoassets over the internet.",
      link: "https://defi project.netlify.app/"
    },
    {
      id: 2,
      name: "SmartGK eLearning Platform",
      description: "Designed an e-learning platform that allows users to accessvideo courses, notes and take part in MCQ exams.",
      link: "https://smartgk-webapp.vercel.app/"
    },
    {
      id: 3,
      name: "IoT-based health monitoring system",
      description: "Designed an IoT-based health monitoring system to allow patients to take their vital health parameters regularly andupload it into remote database.",
      link: "https://issuu.com/adh_bibek/docs/minor_project_report"
    }
  ]

  return (
    <div className="flex fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007A] md:py-10 overflow-y-auto">
      <div className="flex flex-col-reverse md:flex-row justify-center w-full xl:w-[65%] h-fit bg-white m-auto">
        <div className='flex flex-col w-full md:w-[35%] bg-gray-600 pl-10 py-4 pr-3 gap-4'>
          <div className='flex flex-col gap-2 pr-4'>
            <p className='font-medium text-2xl text-white '>Contact</p>
            <hr />
            <div className='flex justify-start items-center gap-2'>
              <div className='w-8 h-8 flex items-center justify-center relative bg-white rounded-full'>
                <ImMobile className='absolute text-xl' />
              </div>
              <p className='text-white'>987654321</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
              <div className='w-8 h-8 flex items-center justify-center relative bg-white rounded-full'>
                <IoMdMail className='absolute text-xl' />
              </div>
              <p className='text-white'>adh.bibek@gmail.com</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
              <div className='w-8 h-8 flex items-center justify-center relative bg-white rounded-full'>
                <MdLocationOn className='absolute text-xl' />
              </div>
              <p className='text-white'>Dhapasi, Kathmandu</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
              <div className='w-8 h-8 flex items-center justify-center relative bg-white rounded-full'>
                <BiLogoLinkedin className='absolute text-xl' />
              </div>
              <a href='https://www.linkedin.com/in/bibek-adhikari-5696b6145/'
                target='_blank' rel="noopener noreferrer"
                className='text-white w-[80%]'>
                www.linkedin.com/in/bibek-adhikari-5696b6145/
              </a>
            </div>
            <div className='flex justify-start items-center gap-2'>
              <div className='w-8 h-8 flex items-center justify-center relative bg-white rounded-full'>
                <AiFillGithub className='absolute text-xl' />
              </div>
              <a href='https://github.com/bibek-056'
                target='_blank' rel='noopener noreferrer'
                className='text-white w-[80%]'>github.com/bibek-056
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-medium text-2xl text-white'>Education</p>
            <hr />
            {educationData.map((oneitem) => (
              <div key={oneitem.id}>
                <Education data={oneitem} />
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-2  text-white'>
            <p className='font-medium text-2xl'>Skills</p>
            <hr />
            <ul className='flex flex-col gap-2 list-disc ml-4'>
              <li><p>React JS / Node JS</p></li>
              <li><p>TailwindCSS</p></li>
              <li><p>MySQL</p></li>
              <li><p>Version Control (GIT) </p></li>
              <li><p>Time Management</p></li>
              <li><p>Communication Skills</p></li>
            </ul>
          </div>
        </div>
        <div className='w-full lg:w-[65%] h-full mt-10 px-4 pb-4'>
          <div className='flex flex-col pl-6 gap-8'>
            <div className='flex flex-col gap-4 w-[90%] '>
              <p className='text-3xl font-bold leading-6'>BIBEK ADHIKARI</p>
              <p className='text-lg font-medium leading-5'>Web Developer </p>
              <p className='text-sm font-normal mt-2'> Enthusiastic web developer with a strong foundation in HTML, CSS,and JavaScript, complemented by hands-on experience in creatingdynamic and responsive user interfaces using React and Tailwind.Eager to contribute my technical skills and collaborate within ateam to deliver engaging web solutions. Excited to embark on ajourney of growth and innovation as an entry-level web developer.</p>
            </div>
            <div>
              <p className='font-bold text-2xl leading-6 '>EXPERIENCE</p>
              <hr className='my-4 border-t-2 border-gray-600'></hr>
              <div className='flex gap-4'>
                <div className=' border-l-2 border-gray-800 mt-2 '></div>
                <div className='flex flex-col gap-2'>
                  {experienceData.map((oneData) => (
                    <div key={oneData.id} className='flex items-start'>
                      <Experience data={oneData} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className='font-bold text-2xl leading-6 '>PROJECTS</p>
              <hr className='my-4 border-t-2 border-gray-600'></hr>
              <div className='flex gap-4'>
                <div className=' border-l-2 border-gray-800 mt-2 '></div>
                <div className='flex flex-col gap-2'>
                  {projectData.map((oneData) => (
                    <div key={oneData.id} className='flex items-start'>
                      <Project data={oneData} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
