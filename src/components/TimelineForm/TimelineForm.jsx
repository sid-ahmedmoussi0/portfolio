import React from 'react';
import timelineElements from '../../elements/TimelineElements/timelineElements';
import { FiBriefcase, FiBook } from 'react-icons/fi';

const TimelineForm = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-xs font-medium tracking-widest uppercase mb-3">
            Expériences & Formations
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Mon{' '}
            <span className="bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
              parcours
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-violet-500/30 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {timelineElements.map((element, index) => {
              const isWork = element.icon === 'work';
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={element.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors duration-200 ${
                      isLeft ? 'md:mr-10' : 'md:ml-10'
                    }`}
                  >
                    <span
                      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${
                        isWork
                          ? 'bg-teal-400/10 text-teal-400 border border-teal-400/20'
                          : 'bg-violet-400/10 text-violet-400 border border-violet-400/20'
                      }`}
                    >
                      {element.date}
                    </span>

                    <h3 className="text-white font-semibold text-sm lg:text-base leading-snug mb-1">
                      {element.title}
                    </h3>
                    <p className="text-gray-500 text-xs mb-3">{element.location}</p>

                    {isWork && (
                      <ul className="space-y-1.5">
                        {[element.mission, element.secondMission, element.thirdMission, element.fourthMission]
                          .filter(Boolean)
                          .map((mission, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-teal-400 shrink-0" />
                              {mission}
                            </li>
                          ))}
                      </ul>
                    )}

                    {!isWork && element.descritpion && (
                      <p className="text-gray-400 text-xs">{element.descritpion}</p>
                    )}
                  </div>

                  <div
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                      isWork
                        ? 'bg-teal-500/10 border-teal-400/30 text-teal-400'
                        : 'bg-violet-500/10 border-violet-400/30 text-violet-400'
                    }`}
                  >
                    {isWork ? <FiBriefcase className="text-lg" /> : <FiBook className="text-lg" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineForm;
