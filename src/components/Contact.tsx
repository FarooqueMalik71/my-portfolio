import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <>
      <section id='contact' className="relative z-10 overflow-hidden bg-gradient-dark py-20 lg:py-[120px]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent2 to-accent9 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            {/* Contact Information */}
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div data-aos="fade-right">
                  <Heading title='Contact Me' />
                </div>
                <h2 className="mb-6 text-[32px] font-bold text-white sm:text-[40px] lg:text-[36px] xl:text-[40px] bg-gradient-accent bg-clip-text text-transparent" data-aos="fade-right" data-aos-delay="200">
                  Let's Build Something Amazing Together
                </h2>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  <div className="flex w-full max-w-[370px] group" data-aos="fade-right" data-aos-delay="300">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-xl bg-gradient-accent text-white sm:h-[70px] sm:max-w-[70px] group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-white" data-aos="fade-right" data-aos-delay="400">
                        Location
                      </h4>
                      <p className="text-gray-300" data-aos="fade-right" data-aos-delay="500">
                        Karachi, Sindh, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex w-full max-w-[370px] group" data-aos="fade-right" data-aos-delay="400">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-accent2 to-accent6 text-white sm:h-[70px] sm:max-w-[70px] group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_941_17577)">
                          <path
                            d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-white" data-aos="fade-right" data-aos-delay="500">
                        Phone
                      </h4>
                      <p className="text-gray-300" data-aos="fade-right" data-aos-delay="600">
                        (+92) 313-385-0871
                      </p>
                    </div>
                  </div>

                  <div className="flex w-full max-w-[370px] group" data-aos="fade-right" data-aos-delay="500">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-accent4 to-accent7 text-white sm:h-[70px] sm:max-w-[70px] group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-white" data-aos="fade-right" data-aos-delay="600">
                        Email
                      </h4>
                      <p className="text-gray-300" data-aos="fade-right" data-aos-delay="700">
                        farooquemalik50871@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-2xl bg-secondary/50 backdrop-blur-sm p-8 shadow-2xl border border-accent/20 sm:p-12" data-aos="fade-left">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />

                  <ContactInputBox
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />

                  <ContactInputBox
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                  />

                  <ContactTextArea
                    rows={6}  
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-xl border border-accent bg-gradient-accent p-4 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                
                {/* Decorative elements */}
                <div>
                  <span className="absolute -right-9 -top-10 z-[-1]">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#00D4FF"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg
                      width={34}
                      height={134}
                      viewBox="0 0 34 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="31.9993"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.33325"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.33325)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.33325"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.33325)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#00D4FF"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.33325"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.33325)"
                        fill="#00D4FF"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

type ContactTextAreaProps = {
  rows: number;             
  placeholder: string;       
  name: string;             
  defaultValue?: string;     
};

const ContactTextArea: React.FC<ContactTextAreaProps> = ({
  rows,
  placeholder,
  name,
  defaultValue,
}) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={rows}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded-xl border border-accent/20 bg-secondary/30 px-6 py-4 text-base text-white placeholder-gray-400 outline-none focus:border-accent focus:shadow-input"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

type ContactInputBoxProps = {
  type: string;             
  placeholder: string;      
  name: string;             
};

const ContactInputBox: React.FC<ContactInputBoxProps> = ({
  type,
  placeholder,
  name,
}) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded-xl border border-accent/20 bg-secondary/30 px-6 py-4 text-base text-white placeholder-gray-400 outline-none focus:border-accent focus:shadow-input"
        />
      </div>
    </>
  );
};

export default Contact;
