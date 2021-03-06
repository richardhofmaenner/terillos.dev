import PageLayout from "@/layouts/pageLayout";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

function Imprint() {
  return (
    <PageLayout>
      <Head>
        <title>Imprint | terillos.dev</title>
      </Head>
      <section className="mb-10">
        <Link href="/"><a><FontAwesomeIcon icon={faArrowLeft} /> Back Home</a></Link>
      </section>
      <section>
        <h1>Imprint (on German)</h1>
        <h2>Kontakt</h2>
        <p>Richard Hofmänner</p>
        <p>Email: hello@terillos.dev</p>
        <h2>Haftungsausschluss</h2>
        <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</p>
        <p>Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>
        <p>Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
        <h2>Haftungsausschluss für Links</h2>
        <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.</p>
        <p>Quelle: <a href="https://www.swissanwalt.ch/"  target="_blank" rel="noreferrer">SwissAnwalt</a></p>
      </section>
    </PageLayout>
  );
}

export default Imprint;
