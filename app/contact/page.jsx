'use client';
import { useActionState } from 'react';
import { contactAction } from '../lib/actions';

export default function page() {
  const initialState = { message: null, errors: {} }
  const [ state, formAction ] = useActionState(contactAction, initialState)

  return (
    <main className="flex flex-col items-center justify-center rounded-4xl h-[90vh] w-[90vw] p-8 lg:p-20 mt-40">
      <h1 className="text-5xl mb-8 text-shadow-blue-950 text-shadow-lg text-blue-900 font-black">Get In Touch</h1>
      <section className="flex flex-col items-center justify-center w-[45%] h-fit text-center">
        <p className="text-lg text-neutral-800 font-light italic mb-4">If you're interested in working together, or looking to discuss one of my projects in more detail, then I'd love to hear from you.</p>
        <p className="text-lg text-neutral-800 font-light">Feel free to send me an email on <a href="mailto:nj@njtd.xyz?subject=Website%20Contact%20Email" className="no-underline font-semibold text-xl hover:font-bold text-neutral-700 hover:text-neutral-500">nj@njtd.xyz</a> or fill in the form below with your contact details if you'd prefer me to give you a call.</p>
      </section>
      <form action={formAction} className="w-fit border rounded-2xl m-8">
        <div className="flex">
          <div className="m-4 flex whitespace-nowrap">
            <label htmlFor="name" className="font-semibold text-neutral-800">
              Name: <span className="font-extralight text-neutral-400 italic text-sm">(required)</span>
            </label>
            <input type="text" id="name" minLength="3" required className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100  text-neutral-700" />
          </div>

          <div className="m-4 flex whitespace-nowrap">
            <label htmlFor="contactNumber" className="font-semibold text-neutral-800">
              Contact Number: <span className="font-extralight text-neutral-400 italic text-sm">(required)</span>
            </label>
            <input type="tel" id="contactNumber" required className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100  text-neutral-700"/>
          </div>
        </div>

        <div className="flex">
          <div className="m-4 flex whitespace-nowrap">
            <label htmlFor="email" className="font-semibold text-neutral-800">
              Email: <span className="font-extralight text-neutral-400 italic text-sm">(optional)</span>
            </label>
            <input type="email" id="email" className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100  text-neutral-700"/>
          </div>

          <div className="m-4 flex whitespace-nowrap">
            <label htmlFor="bestTime" className="font-semibold text-neutral-800">
              Best time to call: <span className="font-extralight text-neutral-400 italic text-sm">(required)</span>
            </label>
            <input type="text" id="datetime-local" required className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100  text-neutral-700"/>
          </div>
        </div>
        
        <div className="ml-6 flex whitespace-nowrap">
          <label htmlFor="query" className="font-semibold text-neutral-800">
            Query: <span className="font-extralight text-neutral-400 italic text-sm">(required)</span>
          </label>
          <textarea id="query" rows="5" cols="60" required className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100  text-neutral-700"></textarea>
        </div>
        <input type="submit" className="rounded-4xl w-[100px] h-[30px] shadow-2xl drop-shadow-lg drop-shadow-amber-950 transition-all duration-100 scale-125 hover:drop-shadow-2xl hover:drop-shadow-amber-950 hover:scale-150 active:scale-75 active:bg-neutral-800 bg-linear-to-tr from-neutral-700 to-neutral-400 to=40% text-amber-600 hover:text-amber-700 active:text-amber-950 active:drop-shadow-lg active:drop-shadow-amber-950 flex justify-self-center mt-8 mb-4" value="Submit!" />
      </form>

    </main>
  )
};