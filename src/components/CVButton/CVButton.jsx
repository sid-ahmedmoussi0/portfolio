import React from 'react';

const CVButton = () => {
    return (
        <>
            <a href='CV_MOUSSI_SID-AHMED.pdf' download="CV_MOUSSI_SID-AHMED.pdf">
                <button className='bg-teal-500 w-[160px] rounded-md my-6 mx-auto py-3 text-white font-bold italic lg:w-[200px]'>
                    Télécharger mon CV
                </button>
            </a>
        </>
    );
};

export default CVButton;
