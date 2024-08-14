import React from 'react';

export const Desc = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-serif text-gray-700 sm:text-lg dark:text-gray-300">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-teal-900 dark:text-teal-300">
            We didn’t reinvent the wheel; we refined it.
          </h2>
          <p className="mb-4 text-teal-100">
            We are strategists, designers, and developers—innovators and problem solvers. We offer the agility to deliver simple and fast solutions, combined with the capability to meet your project's scope and timeline.
          </p>
          <p className='text-teal-100'>
            We are strategists, designers, and developers—innovators and problem solvers. We combine simplicity with speed to deliver effective solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};
