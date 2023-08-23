import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const PrivacyPolicy = () => {
  const router = useRouter();
  const navigateCookiesInfo = () => {
    // router.push(&apos;/our_technology&apos;);
    router.push("https://ico.org.uk/your-data-matters/online/cookies/");
  };
  return (
    <section className="section p-0" id="about-us">
      <div className="container">
        <div className="detailSectn flex gap-4 items-center">
          <div className="detailSecBx p-5 w-full">
            <div className="p-5 pl-0">
              <h1>Privacy Policy</h1>
            </div>

            <div className="text-sm">
              <p className="text-xsm font-small">
                [ We may revise and update this privacy policy from time to
                time, in our sole discretion, without any prior notice to you.
                Changes to the privacy policy are effective immediately when
                posted to the website and apply to all access and use of the
                website thereafter. ]
              </p>
            </div>

            <div className="text-sm mt-5">
              <p className="mb-5">
                This privacy policy aims to give you information on how we
                collect and process your personal data through your use of this
                website, including any data you may provide through this
                website. This privacy policy relates to your use of this website
                and all of our associated web pages (“websites”). This website
                is maintained by Credore Labs (“we”, “us” or “Credore Labs”)
                with its registered office at Bhumkar Chowk, Pune, Maharashtra -
                411057.We are responsible for, and control the processing of,
                any personal information provided to us by individuals when
                operating these websites in accordance with this privacy policy.
                This privacy policy supplements the cookies policy and is not
                intended to override its terms
              </p>
              <p className="mb-5">
                We acknowledge the importance of data security and have created
                this privacy policy in order to demonstrate our commitment to
                your individual privacy. By using this website, our social media
                pages and any other service(s) accessed via this website, you
                acknowledge that we may process your personal information in
                accordance with this privacy policy.
              </p>
              <p className="mb-5">
                We are committed to protecting your privacy. This privacy policy
                explains how we may collect information about you and then use
                it to meet your needs. It also explains some of the security
                measures we take to protect your privacy and tells you certain
                things that we will not do.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Your personal data</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                For this website, and associated services, we are the data
                controller.
              </p>
              <p className="mb-3">
                This privacy policy explains your statutory rights and how we
                collect and use your personal data. It describes the processing
                activities that we carry out in relation to the websites, the
                purposes for which these activities are performed and the legal
                bases that we rely upon for these processing activities.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Personal data we collect</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                We may collect personal information about you when you do the
                following:
              </p>
              <ul className="text-sm">
                <li className="list-disc ml-5">
                  Contact us via the relevant Contact us page of our website.
                </li>
                <li className="list-disc ml-5">
                  Communication you have with us by writing to us, emailing us
                  or calling us.
                </li>
                <li className="list-disc ml-5">
                  How you use our website: we use technology such as cookies
                  (subject to your cookie preferences) when you use our website,
                  and we collect information about the pages you look at and how
                  you use them. For further information please see our{" "}
                  <Link href="/cookies_policy">
                    <a className="text-blue-700 text-sm">cookies policy</a>
                  </Link>
                  .
                </li>
                <li className="list-disc ml-5">
                  Device and machine information: information about the computer
                  hardware and software on your computers and smartphones that
                  is used to connect or communicate with us. For further
                  information please see our{" "}
                  <Link href="/cookies_policy">
                    <a className="text-blue-700 text-sm">cookies policy</a>
                  </Link>
                  .
                </li>
                <li className="list-disc ml-5">
                  Exercising your rights: if you exercise any of your statutory
                  rights under data protection law, we will keep a record of
                  this and how we respond.
                </li>
                <li className="list-disc ml-5">
                  Technical data from analytics providers
                </li>
              </ul>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">
                What we use your personal data for and why?
              </h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                We process the following items of your personal data, with a
                legitimate interest for the improvement of our services to you
                and for the analysis of website performance:
              </p>

              <div className="mb-3">
                <ul className="text-sm">
                  <li className="list-disc ml-5">
                    Your contact details which you provide to us on the Contact
                    us page which may include your first name, surname, email
                    address, company, country and telephone number
                  </li>
                  <li className="list-disc ml-5">
                    Any verbal communications you have with us including
                    voicemail messages and any recorded telephone conversations
                    or recorded video calls. We shall notify you in advance if
                    any telephone calls or video calls are to be recorded.
                  </li>
                  <li className="list-disc ml-5">
                    How you use our website(s). For further information please
                    see our{" "}
                    <Link href="/cookies_policy">
                      <a className="text-blue-700 text-sm">cookies policy</a>
                    </Link>
                    .
                  </li>
                  <li className="list-disc ml-5">
                    Device and machine information. For further information
                    please see our{" "}
                    <Link href="/cookies_policy">
                      <a className="text-blue-700 text-sm">cookies policy</a>
                    </Link>
                    . Marketing and communications data which includes your
                    preferences in receiving marketing from us and your
                    communication preferences.
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                  We may anonymise and aggregate personal data we hold (so that
                  it does not identify you). We may use anonymised and
                  aggregated information only for purposes that include testing
                  our IT systems, research, data analysis, improving our website
                  and in the development of new products and services.
              </div>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">
                Our commitment to information security
              </h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                To protect your information, we have policies and procedures in
                place to ensure that only authorised personnel can access your
                information, that any personal data is handled and stored in a
                secure and sensible manner and all systems that can access the
                information have proportionate and reasonable security measures
                in place.
              </p>
              <p className="mb-3">
                Where cookies are essential for us to provide you with a service
                that you have requested or are required to ensure the
                functionality of this website, please be aware that you may not
                be able to access certain features and functionality of this
                website without them, by refusing cookie permission.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">
                Third party telephone redirection services
              </h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                We may, from time to time, use a third-party telephone
                redirection service. This means that the telephone number which
                is shown on our website may be provided by a third-party who
                will redirect your call to us. The details of any third-parties
                which we currently use for this purpose are set out below. You
                should be aware that by calling that telephone number, your own
                telephone number and call information may be collected by that
                third-party who will share that data with us for the purpose of
                putting you in contact with us. We will be the data controller
                when we receive this information and will only process your data
                in accordance with this policy. The third-party may also be a
                data controller and will process your data in accordance with
                their own privacy policy (a link to which is also set out
                below). Please be aware that we have no control over any
                third-party’s processing of your data in relation to the
                redirection services and if you have any concerns, please revert
                to the third party’s privacy policy.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">
                How long we keep your personal data for
              </h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                We retain your personal data for as long as is necessary to
                achieve the processing purposes, or as required or permitted by
                applicable law
              </p>

              <p className="mb-3">
                We will cease to retain your personal data, or remove the means
                by which the data can be associated with you, as soon as it is
                reasonable to assume that such retention no longer serves the
                purpose for which the personal data was collected, and is no
                longer necessary for legal or business purposes. We can then
                arrange for your personal data to be securely deleted.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">
                Your rights in relation to your personal data
              </h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                You have the following rights in relation to your personal data:
              </p>

              <div className="mb-3">
                <ul className="text-sm">
                  <li className="list-disc ml-5">
                    the right to be informed about the personal data we collect,
                    how your personal data is being used, and from whom we
                    collect your personal data if we obtain it from other
                    sources
                  </li>
                  <li className="list-disc ml-5">
                    the right to access the personal data we hold about you
                  </li>
                  <li className="list-disc ml-5">
                    the right to request the correction of inaccurate personal
                    data we hold about you
                  </li>
                  <li className="list-disc ml-5">
                    the right to request the blocking or deletion of your
                    personal data in some circumstances
                  </li>
                  <li className="list-disc ml-5">
                    the right to request that we port elements of your data
                    either to you or another service provider
                  </li>
                  <li className="list-disc ml-5">
                    the right to object to us processing your personal data
                  </li>
                  <li className="list-disc ml-5">
                    the right to withdraw your consent for us to process your
                    data
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <p className="mb-3">
                  You only have the benefits of some of the above rights in
                  limited circumstances, which is dependent on the legal reason
                  why we collected your personal data.
                </p>
              </div>
              <div className="mb-3">
                  To exercise any of the above rights, or if you have any
                  questions relating to your rights, please{" "}
                  <Link href="/#contact">
                    <a className="text-blue-700 text-sm">contact us</a>
                  </Link>{" "}
                  or email us at{" "}
                  <Link href="mailto:info@credore.xyz">
                    <a className="text-blue-700 text-sm">info@credore.xyz</a>
                  </Link>
                  .
              </div>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Consent</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                We will only collect or use personal data where we require your
                consent to do so or where otherwise permissible by law, and will
                always require your consent prior to sending any third party
                marketing communications to you.
              </p>

              <p className="mb-3">
                In cases where we need your consent to process your information,
                we will ask you to make a positive indication (e.g. to tick a
                box or insert your contact details on the relevant form or web
                page requiring consent). By actively providing us with your
                consent, you would acknowledge the type of personal data that
                will be processed, the reasons for such processing, how it will
                be used, for how long it will be kept, who else will have access
                to it and what your rights are as a data subject. You would also
                acknowledge you have read and understood this privacy policy.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Opting Out</h5>
            </div>

            <div className="text-sm">
                Our website uses cookies. You can set your browser to refuse all
                or some browser cookies, or to alert you when websites set or
                access cookies. If you disable or refuse cookies, please note
                that some parts of this website may become inaccessible or not
                function properly. For further information, please see our{" "}
                <Link href="/cookies_policy">
                  <a className="text-blue-700 text-sm">cookies policy</a>
                </Link>
                .
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Links</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                This website may contain links to other third-party owned
                websites or recommended third party suppliers. Please note that
                we are not responsible for the privacy practices of any other
                websites nor the accuracy of any of the information made
                available on those websites. This privacy policy applies only to
                information collected on or through our websites. When you leave
                our website, we encourage you to read the privacy policy of
                other websites you visit.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Contact us</h5>
            </div>

            <div className="text-sm mb-3">
              If you have any queries about this privacy policy, require further
              information or wish to lodge a complaint, please{" "}
              <Link href="/#contact">
                <a className="text-blue-700 text-sm">contact us</a>
              </Link>{" "}
              or email us at{" "}
              <Link href="mailto:info@credore.xyz">
                <a className="text-blue-700 text-sm">info@credore.xyz</a>
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PrivacyPolicy;
