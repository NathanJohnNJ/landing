'use client';
import { useState } from 'react';
import { addToDB } from '../lib/contact/mongodb';
import { sendEmail } from '../lib/contact/resend';

export default function page() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    bestTime: '',
    anyTime: false,
    query:'',
    queryTime: ''
  });
  const [showForm, setShowForm] = useState(true);
  
  function handleChange(e){
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  async function handleSubmit(e){
    e.preventDefault();
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2,'0');
    const day = new Date().getDate().toString().padStart(2,'0');
    const date = `${year}-${month}-${day}`;
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const time = `${hours}:${minutes}`;
    const now = `${date}T${time}`;
    const formForReq = { ...form, ['queryTime']: now };
    try {
      sendEmail(formForReq);
      addToDB(formForReq);
      setForm({
        name: '',
        phone: '',
        email: '',
        bestTime: '',
        query:'',
        queryTime: ''
      });
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  function checkFunction(){
    const checkBox = document.getElementById("anyTime");
    if (checkBox.checked === true){
      setForm({...form, anyTime: true})
    } else{
      setForm({...form, anyTime: false})
    }
  }
  return (
    <main className="flex flex-col items-center justify-center rounded-4xl h-[90vh] w-[90vw] p-8 lg:p-20 mt-40">
      <h1 className="text-5xl mb-8 text-shadow-blue-950 text-shadow-lg text-blue-900 font-black">Get In Touch</h1>
      <section className="flex flex-col items-center justify-center w-[45%] h-fit text-center">
        <p className="text-lg text-neutral-500 font-light italic mb-4">If you're interested in working together, or looking to discuss one of my projects in more detail, then I'd love to hear from you.</p>
        <p className="text-lg text-neutral-500 font-light">Feel free to send me an email on <a href="mailto:nj@njtd.xyz?subject=Website%20Contact%20Email" className="no-underline font-semibold text-xl hover:font-bold text-neutral-500 hover:text-neutral-300">nj@njtd.xyz</a> or fill in the form below with your contact details if you'd prefer me to give you a call.</p>
      </section>
      {showForm ?(
      <form id="queryForm" onSubmit={handleSubmit} className="w-fit border rounded-2xl m-8 bg-linear-to-tr from-cyan-950 to-25% to-zinc-600">
        <div className="flex">
          <div className="m-4 flex whitespace-nowrap">
            <label htmlFor="name" className="font-semibold text-neutral-800">
              Name: <span className="font-extralight text-neutral-400 italic text-[13px]">(required)</span>
            </label>
            <input type="text" id="name" name="name" value={form.name} minLength="3" required className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100  text-neutral-700 bg-linear-to-r from-neutral-500/35 to-20% to-slate-100/35" autoComplete="true" onChange={handleChange} />
          </div>

          <div className="m-4 flex whitespace-nowrap">
            <label htmlFor="phone" className="font-semibold text-neutral-800">
              Contact Number: <span className="font-extralight text-neutral-400 italic text-[13px]">(required)</span>
            </label>
            <input type="tel" id="phone" name="phone" value={form.phone} required className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100  text-neutral-700 bg-linear-to-r from-neutral-500/35 to-20% to-slate-100/35" autoComplete="true" onChange={handleChange} />
          </div>
        </div> 

        <div className="flex h-min items-center">
          <div className="m-4 flex whitespace-nowrap -mt-4">
            <label htmlFor="email" className="font-semibold text-neutral-800">
              Email: <span className="font-extralight text-neutral-400 italic text-[13px] h-min">(optional)</span>
            </label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100 text-neutral-700 bg-linear-to-r from-neutral-500/35 to-20% to-slate-100/35 h-min w-55" autoComplete="true" />
          </div>

          <div className="mt-4 mb-4 mr-4 -ml-4 flex whitespace-nowrap h-min items-center">
            <div className="flex flex-col items-center">
                
                {!form.anyTime ?
                  <div className="m-4 flex whitespace-nowrap h-min">
                    <div className="-mt-2">
                      <label htmlFor="bestTime" className="font-semibold text-neutral-800 -mt-2">
                        Best time to call: <span className="font-extralight text-neutral-400 italic text-[13px]">(optional)</span>
                      </label>
                      <input id="bestTime" name="bestTime" value={form.bestTime} onChange={handleChange} type="datetime-local" className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100 text-neutral-700 bg-linear-to-r from-neutral-500/35 to-20% to-slate-100/35"/>
                      <div className="flex ml-34 mt-2">
                        <label htmlFor="anyTime" className="font-semibold text-neutral-800">Any time?&nbsp;</label>
                        <input type="checkbox" name="anyTime" id="anyTime" checked={form.anyTime} onChange={checkFunction} />
                      </div>
                    </div>
                  </div>
                :
                  <div className="m-4 flex whitespace-nowrap h-min">
                    <div className="flex -mt-4">
                      <label htmlFor="bestTime" className="font-semibold text-neutral-800 -mt-4">
                        Best time to call: <span className="font-extralight text-neutral-400 italic text-[13px]">(optional)</span>
                      </label>
                      <div className="-mt-4 ml-4">
                        <label htmlFor="anyTime" className="font-semibold text-neutral-800">Any time?&nbsp;</label>
                        <input type="checkbox" name="anyTime" id="anyTime" checked={form.anyTime} onChange={checkFunction} />
                      </div>
                    </div>
                  </div>
                }
              
            </div>
          </div>
        </div>
        
        <div className="ml-6 flex whitespace-nowrap">
          <label htmlFor="query" className="font-semibold text-neutral-800">
            Query: <span className="font-extralight text-neutral-400 italic text-[13px]">(required)</span>
          </label>
          <textarea id="query" name="query" value={form.query} onChange={handleChange} rows="5" cols="60" required className="font-light border rounded-md border-neutral-300 ml-2 bg-grey-100 text-neutral-700 bg-linear-to-r from-neutral-500/35 to-20% to-slate-100/35"></textarea>
        </div>

        <input type="submit" className="rounded-4xl w-[100px] h-[30px] shadow-2xl drop-shadow-lg drop-shadow-amber-950 transition-all duration-100 scale-125 hover:drop-shadow-2xl hover:drop-shadow-amber-950 hover:scale-150 active:scale-75 active:bg-neutral-800 bg-linear-to-tr from-neutral-700 to-neutral-400 to=40% text-amber-600 hover:text-amber-700 active:text-amber-950 active:drop-shadow-lg active:drop-shadow-amber-950 flex justify-self-center mt-8 mb-4" value="Submit!" />
      </form>)
       : (
        <div className="flex flex-col items-center justify-center">
          <div className="text-lg">
            <p>Enquiry sent!</p>
            <p>I'll look forward to speaking with you soon!</p>
          </div>
          <button onClick={()=>setShowForm(true)} className="flex items-center justify-center rounded-4xl w-[100px] h-[30px] shadow-2xl drop-shadow-lg drop-shadow-amber-950 transition-all duration-100 scale-125 hover:drop-shadow-2xl hover:drop-shadow-amber-950 hover:scale-150 active:scale-75 active:bg-neutral-800 bg-linear-to-tr from-neutral-700 to-neutral-400 to=40% text-amber-600 hover:text-amber-700 active:text-amber-950 active:drop-shadow-lg active:drop-shadow-amber-950 justify-self-center mt-8 mb-4">Reset</button>
        </div>
      )}

    </main>
  )
};