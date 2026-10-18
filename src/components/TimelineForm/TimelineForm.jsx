import timelineElements from '../../elements/TimelineElements/timelineElements';
import { FiBriefcase, FiBook } from 'react-icons/fi';

const TimelineForm = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/25 bg-teal-400/[0.06] text-teal-400 text-[11px] font-medium tracking-widest uppercase mb-4">
            Parcours
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white">
            Expériences &amp; <span className="text-white">Formations</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/40 via-violet-500/20 to-transparent md:-translate-x-1/2 z-0" />

          <div className="flex flex-col gap-8">
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
                    className={`ml-16 md:ml-0 md:w-[calc(50%-3.5rem)] relative bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-200 ${
                      isLeft ? 'md:mr-14' : 'md:ml-14'
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[3px] ${
                        isWork
                          ? 'bg-gradient-to-b from-teal-400 to-teal-400/0'
                          : 'bg-gradient-to-b from-violet-400 to-violet-400/0'
                      }`}
                    />

                    <div className="p-5 pl-6">
                      <span
                        className={`inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 mono ${
                          isWork
                            ? 'bg-teal-400/[0.08] text-teal-400 border border-teal-400/20'
                            : 'bg-violet-400/[0.08] text-violet-400 border border-violet-400/20'
                        }`}
                      >
                        {element.date}
                      </span>

                      <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                        {element.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-3 mono">{element.location}</p>

                      {isWork && (
                        <ul className="space-y-1.5">
                          {[element.mission, element.secondMission, element.thirdMission, element.fourthMission]
                            .filter(Boolean)
                            .map((mission, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
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
                  </div>

                  <div
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border z-10 ${
                      isWork
                        ? 'bg-[#080b14] border-teal-400/30 text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.15)]'
                        : 'bg-[#080b14] border-violet-400/30 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                    }`}
                  >
                    {isWork ? <FiBriefcase size={17} /> : <FiBook size={17} />}
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
