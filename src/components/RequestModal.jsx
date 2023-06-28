import { Fragment, useState, createRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import ReCAPTCHA from 'react-google-recaptcha';

function Home() {
  const recaptchaRef = createRef();
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);

  const validateEmail = (data) => {
    return String(data)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const onChangePhone = (e) => {
    const { value } = e.target;
    setPhone(value);
  };
  const onChangeOrg = (e) => {
    const { value } = e.target;
    setOrgName(value);
  };

  const submitData = (value) => {
    fetch(
      'https://eoql7b7hs2.execute-api.us-east-2.amazonaws.com/dev/v1/early-access',
      {
        method: 'POST',
        body: JSON.stringify({
          email: value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.message) {
          setSuccessStatus(data?.message);
        } else {
          setSuccessStatus(
            'Thank you for registration. We will notify you as soon as the app is available.'
          );
        }
      })
      .catch(() => setSuccessStatus('Something Went Wrong'));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!validateEmail(email)) {
      setEmailError('Enter valid Email!');
    } else if (!recaptchaValue) {
      setCaptchaError(true);
    } else {
      setCaptchaError(false);
      setEmailError(null);
      submitData(email);
    }
  };

  const secretKey = '6LctN-cfAAAAABG5jg9iToRqj-IojqOhY5hBltWS';

  return (
    <form onSubmit={onSubmit}>
      <div className="my-3">
        <input
          type="text"
          className="p-2 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
          onChange={onChangeName}
          value={name}
          placeholder="Your Full Name"
        />
        <div className="text-red-500">{emailError}</div>
      </div>
      <div className="my-3">
        <input
          type="text"
          className="p-2 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
          onChange={onChangeEmail}
          value={email}
          placeholder="Enter Your Email"
        />
        <div className="text-red-500">{emailError}</div>
      </div>

      <div className="my-3">
        <input
          type="text"
          className="p-2 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
          onChange={onChangePhone}
          value={phone}
          placeholder="Phone No"
        />
        <div className="text-red-500">{emailError}</div>
      </div>

      <div className="my-3">
        <input
          type="text"
          className="p-2 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
          onChange={onChangeOrg}
          value={orgName}
          placeholder="Organization Name"
        />
        <div className="text-red-500">{emailError}</div>
      </div>

      <div className="my-3">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LctN-cfAAAAAPoMPQhN4xmcxvQ9GmO2gEKzPJqQ"
          onChange={() => captchaError(false)}
        />
      </div>
      <button
        className="px-4 py-1 text-sm flex-shrink-0 text-white bg-[#F15928]"
        type="submit"
      >
        Request
      </button>
      {successStatus === 'Something Went Wrong' ? (
        <div className="text-red-500">{successStatus}</div>
      ) : (
        <div className="text-blue-500">{successStatus}</div>
      )}
    </form>
  );
}

export default function MyModal({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 mb-10"
                  >
                    Request Demo
                  </Dialog.Title>
                  <div className="mt-2">
                    <Home />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
