import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CookiesPolicy = () => {
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
              <h1>Cookies Policy</h1>
            </div>

            <div className="text-sm">
              <p className="mb-5">
                This cookie policy contains important information on who we are,
                our use of cookies and similar technologies on our website.
              </p>
              <p className="mb-5">
                This cookie policy should be read together with our privacy
                policy which sets out how and why we collect, store, use and
                share personal information. It also details your rights in
                relation to your personal information, & details of how to
                contact us in the event you have a complaint.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Who we are</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                This website is maintained by Credore Labs (“we”, “us” or
                “Credore Labs”) with its registered office at Bhumkar Chowk,
                Pune, Maharashtra - 411057.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Our website</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                This cookie policy relates to your use of this website. Our
                website uses cookies to distinguish you from other users of our
                website. This helps us to provide you with a better user
                experience when you browse our website, and also allows us to
                improve our website. You can set your browser to refuse all or
                some browser cookies, or to alert you when websites set or
                access cookies.
              </p>
              <p className="mb-3">
                Throughout this website, we may occasionally link you to other
                websites owned and operated by third parties. These third party
                websites may also use cookies in accordance with their own
                separate cookie polices, which we accept no responsibility for
                and have no control over. When you leave our website, we
                encourage you to read the cookie policy of other websites that
                you visit.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">What are cookies?</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                A cookie is a small text file which is placed onto your device
                (e.g., computer, smartphone, or another electronic device) when
                you use our website. We use cookies on our website. These help
                us recognise you and your device and store information about
                your preferences or past actions.
              </p>
              <div className="mb-3">
                You can find out more general information about{" "}
                <a
                  onClick={navigateCookiesInfo}
                  className="italic font-medium text-blue-600 cursor-pointer underline"
                >
                  cookies
                </a>
                . For further information on our specific use of cookies, please
                see the relevant section below entitled &apos;Our use of cookies&apos;.
              </div>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Cookie Consent</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                We will always ask you for your permission to place cookies on
                your device. The first time you access this website, you will be
                asked to accept our use of cookies to improve your website
                experience.
              </p>
              <p className="mb-3">
                Where cookies are essential for us to provide you with a service
                that you have requested or are required to ensure the
                functionality of this website, please be aware that you may not
                be able to access certain features and functionality of this
                website without them, by refusing cookie permission.
              </p>
              <p className="mb-3">
                There is a notice banner on our homepage which describes how we
                use cookies and requests your consent to place cookies on your
                device. You can also amend your cookie preferences on your
                browser. Please read the “How you can control cookies on your
                browser” section below.
              </p>
            </div>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Our use of cookies</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">We use cookies on this website to:</p>
            </div>

            <ul className="text-sm">
              <li className="list-disc ml-5">
                recognise you whenever you visit this website
              </li>
              <li className="list-disc ml-5">
                obtain information about your preferences and use of our website
              </li>
              <li className="list-disc ml-5">
                carry out research and statistical analysis to help improve our
                content, products, and services and to help us better understand
                user requirements and
              </li>
              <li className="list-disc ml-5">
                make your online experience more efficient and enjoyable
              </li>
            </ul>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">How you can control cookies on your browser</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                Your browser allows you to choose whether you wish to accept
                cookies generally or not. Different browsers make different
                controls available to you and so we have provided links below to
                popular website browsers and relevant provider instructions on
                how you can do this.
              </p>
            </div>

            <ul className="text-sm">
              <li className="list-disc ml-5">
                <Link href="https://policies.google.com/technologies/cookies?hl=en-US#managing-cookies">
                  <a className="text-blue-700 text-sm">
                    Google Chrome
                  </a>
                </Link>
              </li>
              <li className="list-disc ml-5">
                <Link href="https://support.microsoft.com/en-US/search/results?query=cookies&isEnrichedQuery=false">
                  <a className="text-blue-700 text-sm">
                    Internet Explorer
                  </a>
                </Link>
              </li>
              <li className="list-disc ml-5">
                <Link href="https://support.mozilla.org/en-US/kb/websites-say-cookies-are-blocked-unblock-them#w_check-cookie-settings">
                  <a className="text-blue-700 text-sm">Firefox</a>
                </Link>
              </li>
              <li className="list-disc ml-5">
                <Link href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
                  <a className="text-blue-700 text-sm">Safari</a>
                </Link>
              </li>
              <li className="list-disc ml-5">
                <Link href="https://support.apple.com/en-gb/HT201265">
                  <a className="text-blue-700 text-sm">
                    Safari Mobile
                  </a>
                </Link>
              </li>
            </ul>

            <div className="p-2 pl-0">
              <h5 className="text-xl mt-2">Types of cookies</h5>
            </div>

            <div className="text-sm">
              <p className="mb-3">
                The cookies we place on your device fall into the following
                categories:
              </p>

              <p className="mb-5">
                <span className="font-medium text-sm">Session cookies</span> - these
                allow our website to link your actions during a particular
                browser session. These expire each time you close your browser
                and do not remain on your device afterwards.
              </p>

              <p className="mb-5">
                <span className="font-medium text-sm">Persistent cookies</span> - these
                are stored on your device in between browser sessions. These
                allow your preferences or actions across our website to be
                remembered. These will remain on your device until they expire,
                or you delete them from your cache.
              </p>

              <p className="mb-5">
                <span className="font-medium text-sm">Strictly necessary cookies</span>{" "}
                - these cookies are essential for you to be able to navigate our
                website and use its features. Without these cookies, the
                services you ask for cannot be provided.
              </p>

              <p className="mb-5">
                <span className="font-medium text-sm">Performance cookies</span> - these
                cookies collect information about how you use our website, e.g.
                which pages you go to most often. These cookies do not collect
                personally identifiable information. All information collected
                by these cookies is aggregated, anonymous, and is only used to
                improve how our website works.
              </p>

              <div className="p-2 pl-0">
                <h5 className="text-xl mt-2">The cookies we use</h5>
              </div>

              <div className="text-sm">
                <p className="mb-3">
                  We use cookies to personalise content and to analyse our
                  website traffic. We also share information about your use of
                  our website with our advertising and analytics partners who
                  may combine it with other information that you&apos;ve provided to
                  them or that they&apos;ve collected from your use of their
                  services.
                </p>
                <p className="mb-3">
                  The table below provides more information about the cookies we
                  use and why:
                </p>
              </div>

              <div className="p-2 pl-0">
                <table>
                  <tr>
                    <th>The cookies we use</th>
                    <th>What they do</th>
                  </tr>
                  <tr>
                    <td>Google Analytics</td>
                    <td>
                      <p>
                        This is a web analytics service provided by Google Inc.
                        and is a tool that we use for tracking and analytics on
                        our website. We use it for tracking and analytics to
                        better understand how you use our website in order to
                        improve our service. Tracking and analytics are not used
                        for any direct marketing purposes.
                      </p>
                      <p>
                        View{" "}
                        <Link href="https://policies.google.com/privacy?hl=en">
                          Google privacy policy.
                        </Link>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>Google Tag Manager</td>
                    <td>
                      <p>
                        This is a web analytics service provided by Google Inc.
                        which uses cookies to show us how visitors found and
                        explored our website, and how we can enhance their
                        experience. It provides us with information about the
                        behaviour of our visitors (e.g., how long they stayed on
                        the website, the average number of pages viewed, etc.).
                        It also tells us how many visitors we have had.
                      </p>
                      <p>
                        View{" "}
                        <Link href="https://policies.google.com/privacy?hl=en">
                          Google privacy policy.
                        </Link>
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <div className="p-2 pl-0">
                <h5 className="text-xl mt-2">How to contact us</h5>
              </div>

              <div className="text-sm">
                <div className="mb-3 ">
                  Please {/* <Link href="/contact"> */}
                  <Link href="/work_in_progress">
                    <a className="text-blue-500 text-sm font-medium underline">
                      contact us
                    </a>
                  </Link>{" "}
                  if you have any questions about this cookie policy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CookiesPolicy;
