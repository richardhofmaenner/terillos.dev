import Head from "next/head";
import Line from "../components/Line";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | terillos.dev</title>
        <meta name="description" content="The digital business card of Richard Hofmänner / terillos." />
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <main className="w-10/12 sm:w-8/12 lg:w-6/12 xl:w-4/12">
          <section className="text-center">
            <Line />
            <div className="my-10 block">
              <Image src="/images/profile.jpg" alt="Profile Image Richard" width={200} height={200} className="rounded-full w-2/12" />
            </div>
            <h1 className="mb-5">Richard Hofmänner</h1>
            <h2 className="mb-10">Full Stack Developer</h2>
          </section>
          <section className="text-center">
            <Line />
            <div className="flex justify-evenly mt-5">
              <a target="_blank" aria-label="Github" rel="noreferrer" href="https://github.com/richardhofmaenner">
                <FontAwesomeIcon className="text-xl" icon={faGithub} />
              </a>
              <a target="_blank" rel="noreferrer" aria-label="Email" href="mailto:hello@terillos.dev">
                <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
              </a>
              <a target="_blank" rel="noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/in/richard-hofm%C3%A4nner-343308135/">
                <FontAwesomeIcon className="text-xl" icon={faLinkedinIn} />
              </a>
              <a target="_blank" rel="noreferrer" aria-label="Twitter" href="https://twitter.com/terillos">
                <FontAwesomeIcon className="text-xl" icon={faTwitter} />
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
