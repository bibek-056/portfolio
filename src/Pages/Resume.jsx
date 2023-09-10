import { ImMobile } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import Education from "../Component/Education";
import Experience from "../Component/Experience";
import Project from "../Component/Project";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import axios from "axios";
import { readRequest } from "../Axios/Apihandler";

const Resume = () => {
  const [card, setCard] = useState("");
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("UserId"));
    if (storedUser) {
      setUserId(storedUser);
    } else {
      navigate("/");
    }
  }, []);

  const fetchEducation = async (id) => {
    const response = await readRequest(
      `/educations/${id}`
    );
    return response.data;
  };

  const { data: educationData } = useQuery(["education", userId?.userId], () => fetchEducation(userId?.userId));

  const fetchExperience = async (id) => {
    const response = await readRequest(
      `/experiences/${id}`
    );
    return response.data;
  };

  const { data: experienceData } = useQuery(["experience", userId?.userId], () => fetchExperience(userId?.userId));

  const fetchProjects = async (id) => {
    const response = await readRequest(
      `/projects/${id}`
    );
    return response.data;
  };

  const { data: projectsData } = useQuery(["projects", userId?.userId], () => fetchProjects(userId?.userId));

  const fetchSkills = async () => {
    const response = await readRequest(
      `/Skills/${userId?.userId}`
    );
    return response?.data;
  };

  const { data: skills } = useQuery(["skills", userId?.userId], () => fetchSkills(userId?.userId));

  const handleLogOut = () => {
    localStorage.removeItem("UserId")
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center gap-4 fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007A] md:py-10 overflow-y-auto">
      <div className="flex flex-col-reverse md:flex-row justify-center w-full xl:w-[65%] bg-white m-auto">
        <div className="flex flex-col w-full md:w-[35%] bg-gray-600 pl-10 py-4 pr-3 gap-4">
          <div className="flex flex-col gap-2 pr-4">
            <p className="font-medium text-2xl text-white ">Contact</p>
            <hr />
            <div className="flex justify-start items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center relative bg-white rounded-full">
                <ImMobile className="absolute text-xl" />
              </div>
              <p className="text-white">{userId?.phone}</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center relative bg-white rounded-full">
                <IoMdMail className="absolute text-xl" />
              </div>
              <p className="text-white">{userId?.email}</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center relative bg-white rounded-full">
                <MdLocationOn className="absolute text-xl" />
              </div>
              <p className="text-white">{userId?.address}</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center relative bg-white rounded-full">
                <BiLogoLinkedin className="absolute text-xl" />
              </div>
              <a
                href={userId?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white w-[80%] break-all"
              >
                {userId?.linkedin}
              </a>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center relative bg-white rounded-full">
                <AiFillGithub className="absolute text-xl" />
              </div>
              <a
                href={userId?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white w-[80%]"
              >
                {userId?.github}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-2xl text-white">Education</p>
            <hr />
            {educationData?.map((oneitem) => (
              <div key={oneitem.id}>
                <Education data={oneitem} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2  text-white">
            <p className="font-medium text-2xl">Skills</p>
            <hr />
            <ul className="flex flex-col gap-2 list-disc ml-4">
              {skills?.map((oneSkill) => (
                <li>
                  <p>{oneSkill.skill_name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[65%] h-full mt-10 px-4 pb-4">
          <div className="flex flex-col pl-6 gap-8">
            <div className="flex flex-col gap-4 w-[90%] ">
              <p className="text-3xl font-bold leading-6">{userId?.name}</p>
              <p className="text-lg font-medium leading-5">
                {userId?.designation ? userId.designation : ""}
              </p>
              <p className="text-sm font-normal mt-2"> {userId?.summary}</p>
            </div>
            <div>
              <p className="font-bold text-2xl leading-6 ">EXPERIENCE</p>
              <hr className="my-4 border-t-2 border-gray-600"></hr>
              <div className="flex gap-4">
                <div className=" border-l-2 border-gray-800 mt-2 "></div>
                <div className="flex flex-col gap-2">
                  {experienceData?.map((oneData) => (
                    <div key={oneData.id} className="flex items-start">
                      <Experience data={oneData} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-2xl leading-6 ">PROJECTS</p>
              <hr className="my-4 border-t-2 border-gray-600"></hr>
              <div className="flex gap-4">
                <div className=" border-l-2 border-gray-800 mt-2 "></div>
                <div className="flex flex-col gap-2">
                  {projectsData?.map((oneData) => (
                    <div key={oneData.id} className="flex items-start">
                      <Project data={oneData} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className=" flex items-center justify-center border bg-red-500 text-white rounded border-white w-32 h-12" onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Resume;
