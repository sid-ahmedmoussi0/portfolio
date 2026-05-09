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

        <div className="relative isolate">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-violet-500/30 to-transparent md:-translate-x-1/2 -z-10" />

          <div className="flex flex-col gap-10">
            {timelineElements.map((element, index) => {
              const isWork = element.icon === 'work';
              const isLeft = index % 2 === 0;

              const card = (
                <div className="bg-[#0d1220] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors duration-200">
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
              );

              return (
                <div key={element.id} className="relative flex items-start">
                  <div className="md:hidden flex items-start w-full">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${
                        isWork
                          ? 'bg-[#080b14] border-teal-400/40 text-teal-400'
                          : 'bg-[#080b14] border-violet-400/40 text-violet-400'
                      }`}
                    >
                      {isWork ? <FiBriefcase className="text-lg" /> : <FiBook className="text-lg" />}
                    </div>
                    <div className="ml-4 flex-1 min-w-0">{card}</div>
                  </div>

                  <div className="hidden md:flex w-full items-start">
                    <div className="w-[calc(50%-1.5rem)] pr-6">
                      {isLeft && card}
                    </div>

                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${
                        isWork
                          ? 'bg-[#080b14] border-teal-400/40 text-teal-400'
                          : 'bg-[#080b14] border-violet-400/40 text-violet-400'
                      }`}
                    >
                      {isWork ? <FiBriefcase className="text-lg" /> : <FiBook className="text-lg" />}
                    </div>

                    <div className="w-[calc(50%-1.5rem)] pl-6">
                      {!isLeft && card}
                    </div>
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
