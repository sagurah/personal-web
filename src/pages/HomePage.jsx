import avatar from "../assets/avatar.png";
import { useState } from "react";
import datas from "../data/data.json";

const HomePage = () => {
  const [projects, setProjects] = useState(datas.projects);
  const [experiences, setExperiences] = useState(datas.experiences);

  const openLink = (link) => {
    window.open(link, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-800">
      <div className="bg-slate-700 border-b-2 border-slate-400">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-xl lg:max-w-5xl">
            <div className="pt-20 pb-14">
              <img
                src={avatar}
                className="w-38 h-40 rounded-xl mb-2 bg-slate-500 hover:opacity-80 transition duration-300 ease-in-out hover:scale-110"
              />
              <h1 className="text-3xl text-slate-100 font-bold sm:text-5xl mb-2">
                <span className="underline text-emerald-500">Satyo</span>
                <span> Gusti Anugrah</span>
              </h1>
              <span className="text-md text-slate-300 opacity-90">
                I'm a final year undergraduate student at Universitas Atma Jaya
                Yogyakarta. Currently working on my final project about
                "Decision Support System".
              </span>
              <div className="mt-4">
                <div className="flex gap-2">
                  <div className="border-2 rounded-lg border-slate-400 bg-slate-600 px-2 hover:opacity-50">
                    <a
                      className="flex gap-2"
                      href="https://drive.google.com/file/d/1gsbvDo5VU1EK4kjJ9Lw3AHrSuoEldepz/view?usp=sharing"
                      target="_blank"
                    >
                      <i className="fas fa-file text-2xl text-slate-300"></i>
                      <span className="text-slate-300 font-bold flex items-center">
                        CV
                      </span>
                    </a>
                  </div>
                  <div className="border-2 rounded-lg border-slate-400 bg-slate-600 px-2 hover:opacity-50">
                    <a
                      className="flex gap-2"
                      href="https://github.com/sagurah"
                      target="_blank"
                    >
                      <i className="fab fa-github text-2xl text-slate-300"></i>
                      <span className="text-slate-300 font-bold flex items-center">
                        Github
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-4 pt-7">
                <span className="text-md text-slate-300 opacity-90 mb-3">
                  Reach me here:
                </span>
                <div className="flex gap-6">
                  <a
                    className="-m-1 p-1"
                    href="https://instagram.com/s4tyo"
                    target="_blank"
                  >
                    <i className="fab fa-instagram text-2xl text-slate-300 hover:text-slate-100"></i>
                  </a>
                  <a
                    className="-m-1 p-1"
                    href="https://linkedin.com/in/satyogustianugrah"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin text-2xl text-slate-300 hover:text-slate-100"></i>
                  </a>
                  <a
                    className="-m-1 p-1"
                    href="https://facebook.com/Nangid0"
                    target="_blank"
                  >
                    <i className="fab fa-facebook text-2xl text-slate-300 hover:text-slate-100"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-xl lg:max-w-5xl -mt-12 bg-slate-700 border-t-2 border-x-2 border-slate-400">
          <div className="max-w-3xl pt-12 pb-14 mx-auto">
            <h2 className="font-bold lg:px-0 px-10 text-emerald-200 text-2xl type-motivation italic"></h2>
            <div className="lg:px-0 px-10 text-slate-300 opacity-90 text-md">
              These are the projects and experiences that I've been working on.
            </div>
            <div className="flex flex-col items-center lg:flex-row mt-6 gap-4 lg:items-start">
            <div className="border-2 sm:min-w-[50%] min-w-[100%] border-slate-400 px-5 py-2 rounded-md">
                <h4 className="font-bold text-slate-100 text-xl underline my-4 text-center">Projects</h4>
                {
                  projects && projects.map((proj, i) => {
                    return (
                      <div className="group hover:bg-slate-600 transition-all ease-in-out mb-3 rounded-lg px-1 py-4 cursor-pointer" onClick={() => openLink(proj.link)} key={i}>
                        <h5 className=" text-slate-100 text-md font-bold">
                          {proj.title}
                          <span class="invisible group-hover:visible transition ease-in-out duration-500 text-lg font-bold text-slate-300">  &rarr;</span>
                        </h5>
                        <p className="text-slate-300 text-sm mb-2">{proj.description}</p>
                        <div className="flex gap-5 justify-between ">
                          <div className="flex flex-row">
                            {
                              proj.techstack.map((exp, i) => {
                                return (
                                  <div className="bg-slate-800 text-slate-100 text-sm rounded-md mr-1 p-2">{exp}</div>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="border-2 sm:min-w-[50%] min-w-[100%] border-slate-400 px-5 py-2 rounded-md">
                <h4 className="font-bold text-slate-100 text-xl underline my-4 text-center">Experiences</h4>
                {
                  experiences && experiences.map((exp, i) => {
                    return (
                      <div className="group transition-all ease-in-out mb-3 rounded-lg px-1 py-4" key={i}>
                        <h5 className=" text-slate-100 text-md font-bold">
                          {exp.title}
                          <span class="invisible group-hover:visible transition ease-in-out duration-500 text-lg font-bold text-slate-300">  &rarr;</span>
                        </h5>
                        <span className="text-slate-100 text-sm font-medium">{exp.company} - <span className="opacity-80">({exp.date})</span></span>
                        <p className="text-slate-300 text-sm mt-1">{exp.description}</p>
                        <span className="font-bold text-slate-300 text-sm"></span>
                        <div className="flex mt-3 gap-5 justify-between">
                          <div className="flex flex-row">
                            {
                              exp.techstack.map((tech, i) => {
                                return (
                                  <div className="bg-slate-800 text-slate-100 text-sm rounded-md mr-1 p-2">{tech}</div>
                                )
                              })
                            }
                          </div>
                          <div className="bg-emerald-800 text-slate-100 text-sm rounded-md p-2 font-bold">{exp.role}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-slate-700 px-4 sm:px-8 lg:px-12 border-t-2 -mt-1 border-slate-400">
        <div className="px-2 py-2 text-center">
          <span className="text-slate-100 opacity-70">&copy; {new Date().getFullYear()} Satyo Gusti Anugrah</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
