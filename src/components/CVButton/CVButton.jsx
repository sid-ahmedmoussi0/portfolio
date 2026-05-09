import React from 'react';
import { FiDownload } from 'react-icons/fi';

const CVButton = () => {
  return (
    <a href="/CV_SID-AHMED_MOUSSI.pdf" download="CV_SID-AHMED_MOUSSI.pdf">
      <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-violet-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-teal-500/20">
        <FiDownload className="text-base" />
        Télécharger mon CV
      </button>
    </a>
  );
};

export default CVButton;
