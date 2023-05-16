import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import { PATH_NAME } from "../../constants/routes";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ij4xrg3",
        "template_dlsqrmp",
        e.target as HTMLFormElement,
        "PgG_ksv_uaP6SyPG7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensagge send");
        },
        (error) => {
          console.log(error.text);
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section id={PATH_NAME.CONTACT} className="container-fluid mt-5 w-75" style={{height:"580px"}}>
        <h1 className="text-white text-center fw-bold">Contact US</h1>
      
          <form
            ref={form}
            onSubmit={sendEmail}
            className="container-fluid"
          >
            <div className="mb-4">
              <label className="form-label text-white">Name</label>
              <input
                type="text"
                className="form-control bg-darkblue text-white h"
                id="formGroupExampleInput"
                placeholder="Example input placeholder"
                name="user_name"
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-white">Email address</label>
              <input
                type="email"
                className="form-control bg-darkblue text-white"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="user_email"
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-white">Mensaje</label>
              <textarea
                className="form-control bg-darkblue text-white"
                id="exampleFormControlTextarea1"
                rows={3}
                name="message"
              ></textarea>
            </div>
            <div className="col-12 d-flex justify-content-center mx-auto">
              <button type="submit" className="btn btn-textdark">
                Send
              </button>
            </div>
          </form>
     
      </section>
    </>
  );
};
export default Contact;
