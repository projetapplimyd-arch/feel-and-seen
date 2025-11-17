import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/seenandfeel_logo_v2.png';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <Link href="/" className="flex gap-1 items-center hover:opacity-80 transition-opacity">
            <div className="relative w-6 h-6">
              <Image 
                src={logo} 
                alt="Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-gray-900">SeenAndFeel</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Mentions Légales
          </h1>
          <div className="w-24 h-1 bg-pink-300"></div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-gray-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Éditeur du site
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Les sites <span className="font-semibold">seenandfeel.fr</span> et <span className="font-semibold">seenandfeel.app</span> sont édités par un particulier ayant choisi de ne pas rendre publiques ses informations personnelles conformément à l&apos;article 6-III de la loi n°2004-575 du 21 juin 2004.
              </p>
              <p>
                Les informations permettant son identification ont été communiquées à l&apos;hébergeur.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-blue-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Hébergement
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-3">Les sites sont hébergés par :</p>
              <div className="bg-white border-2 border-black rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">OVH SAS</p>
                <p>2 rue Kellermann</p>
                <p>59100 Roubaix – France</p>
                <p>Téléphone : 1007</p>
                <p>
                  Site web : <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ovh.com</a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-purple-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                L&apos;ensemble du contenu présent sur les sites <span className="font-semibold">seenandfeel.fr</span> et <span className="font-semibold">seenandfeel.app</span> (textes, images, graphismes, logo, vidéos, etc.) est protégé par le droit d&apos;auteur.
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                Toute reproduction, représentation ou utilisation, totale ou partielle, sans autorisation préalable, est interdite.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-pink-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Données personnelles
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de suppression de vos données.
              </p>
              <p>
                Vous pouvez exercer ces droits en écrivant à : <a href="mailto:contact@seenandfeel.fr" className="font-semibold text-blue-600 hover:underline">contact@seenandfeel.fr</a>
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-yellow-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Cookies
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Les sites peuvent utiliser des cookies nécessaires à leur fonctionnement et, si vous en installez, des cookies de mesure d&apos;audience.
              </p>
              <p>
                Lors de la première visite, l&apos;utilisateur peut accepter ou refuser l&apos;utilisation des cookies non essentiels.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-green-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Limitation de responsabilité
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                L&apos;éditeur ne pourra être tenu responsable d&apos;éventuelles erreurs, interruptions ou indisponibilités du site.
              </p>
              <p>
                L&apos;utilisateur reconnaît naviguer sous sa propre responsabilité.
              </p>
            </div>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t-2 border-gray-200 py-10 bg-gray-50 mt-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-6 h-6">
              <Image 
                src={logo} 
                alt="Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-gray-900">SeenAndFeel</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Le film parfait pour tout le groupe, à chaque fois.
          </p>
          <div className="flex gap-6 justify-center text-sm text-gray-600">
            <Link href="/confidentialite" className="hover:text-gray-900">Confidentialité</Link>
            <span>•</span>
            <Link href="/cgu" className="hover:text-gray-900">Conditions</Link>
            <span>•</span>
            <Link href="/mentions-legales" className="hover:text-gray-900 font-semibold">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}