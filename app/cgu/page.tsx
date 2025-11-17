import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/seenandfeel_logo_v2.png';
import { FileText, Users, Shield, AlertCircle, Trash2, Check } from 'lucide-react';

export default function CGU() {
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
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Conditions Générales d&apos;Utilisation
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">Dernière mise à jour : 14/11/2025</p>
          <div className="w-24 h-1 bg-pink-300"></div>
        </div>

        {/* Intro */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-black rounded-3xl p-8 mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            Les présentes Conditions Générales d&apos;Utilisation (ci-après « CGU ») ont pour objet d&apos;encadrer l&apos;accès et l&apos;utilisation de l&apos;application <span className="font-bold">Seen&Feel</span> (ci-après « l&apos;Application »).
          </p>
          <p className="text-gray-900 font-bold">
            En utilisant l&apos;Application, l&apos;utilisateur accepte sans réserve les présentes CGU.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-gray-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-200 border-2 border-black rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                1. Présentation de l&apos;éditeur
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                L&apos;Application Seen&Feel est éditée par un particulier ayant choisi de ne pas rendre publiques ses informations personnelles conformément à la loi n°2004-575 du 21 juin 2004.
              </p>
              <p>
                Les informations permettant son identification ont été transmises à l&apos;hébergeur.
              </p>
              <p>
                Contact : <a href="mailto:contact@seenandfeel.fr" className="font-semibold text-blue-600 hover:underline">contact@seenandfeel.fr</a>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-purple-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Objet de l&apos;Application
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                Seen&Feel permet à un groupe d&apos;amis d&apos;indiquer leurs préférences en matière de films et séries, de voter et de déterminer quelles œuvres ils souhaitent regarder ensemble.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-pink-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Inscription et création de compte
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Pour accéder à certaines fonctionnalités, l&apos;utilisateur peut être amené à créer un compte.
              </p>
              <p>Lors de l&apos;inscription, il s&apos;engage à fournir :</p>
              <div className="bg-white border-2 border-black rounded-2xl p-5">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>des informations exactes, complètes et à jour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>un e-mail valide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>un pseudonyme ne portant pas atteinte à autrui</span>
                  </li>
                </ul>
              </div>
              <p className="font-semibold text-gray-900">
                L&apos;utilisateur est responsable de la confidentialité de ses identifiants.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-blue-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Fonctionnement de l&apos;Application
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Seen&Feel propose notamment :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">👥 Création de groupes d&apos;amis</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">🗳️ Votes et préférences</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">💡 Suggestions de contenus</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">📜 Historique de visionnage</span>
                </div>
              </div>
              <div className="bg-yellow-100 border-2 border-black rounded-2xl p-5 mt-4">
                <p className="font-bold text-gray-900">
                  ⚠️ L&apos;Application ne fournit pas de films ou séries : elle ne sert qu&apos;à proposer des choix.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-yellow-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-200 border-2 border-black rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                5. Obligations de l&apos;utilisateur
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>L&apos;utilisateur s&apos;engage à :</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-white border-2 border-black rounded-2xl p-4">
                  <span className="text-xl flex-shrink-0">🔒</span>
                  <span>ne pas tenter d&apos;accéder aux données d&apos;autres utilisateurs</span>
                </li>
                <li className="flex items-start gap-3 bg-white border-2 border-black rounded-2xl p-4">
                  <span className="text-xl flex-shrink-0">⚖️</span>
                  <span>ne pas utiliser l&apos;Application à des fins illégales</span>
                </li>
                <li className="flex items-start gap-3 bg-white border-2 border-black rounded-2xl p-4">
                  <span className="text-xl flex-shrink-0">©️</span>
                  <span>respecter les droits d&apos;auteur des contenus référencés (pochettes, images, titres)</span>
                </li>
              </ul>
              <div className="bg-red-100 border-2 border-black rounded-2xl p-5 mt-4">
                <p className="font-bold text-gray-900">
                  ❌ Tout comportement abusif pourra entraîner la suspension ou la suppression du compte.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-green-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-200 border-2 border-black rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                6. Propriété intellectuelle
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Seen&Feel (nom, logo, interface, textes…) est protégé par le droit d&apos;auteur.
              </p>
              <p className="font-semibold text-gray-900">
                Toute reproduction est interdite sans autorisation.
              </p>
              <p>
                Les fiches films/séries proviennent éventuellement de bases partenaires et restent leur propriété respective.
              </p>
            </div>
          </section>

          {/* Section 7 - UPDATED */}
          <section className="border-2 border-black rounded-3xl p-8 bg-purple-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Données personnelles
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Les traitements de données sont décrits dans la <Link href="/confidentialite" className="font-semibold text-blue-600 hover:underline">Politique de Confidentialité</Link>.
              </p>
              
              <div className="bg-white border-2 border-black rounded-2xl p-5 mt-4">
                <p className="font-bold text-gray-900 mb-3">📄 La Politique de Confidentialité complète est accessible depuis :</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><span className="font-semibold">Dans l&apos;application :</span> Paramètres → Confidentialité & Données</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><span className="font-semibold">Sur notre site :</span> <a href="https://seenandfeel.app/confidentialite" className="text-blue-600 hover:underline">seenandfeel.app/confidentialite</a></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><span className="font-semibold">Sur l&apos;App Store / Google Play :</span> Page de l&apos;application (avant téléchargement)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-blue-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Disponibilité du service
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Seen&Feel s&apos;engage à assurer un accès continu à l&apos;Application mais ne garantit pas :
              </p>
              <ul className="space-y-2 ml-5">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>l&apos;absence totale d&apos;erreurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>l&apos;indisponibilité temporaire (maintenance, mises à jour…)</span>
                </li>
              </ul>
              <p className="font-semibold text-gray-900">
                Aucune indemnité ne pourra être réclamée.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-pink-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Responsabilité
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>L&apos;éditeur ne peut être tenu responsable :</p>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span>d&apos;une mauvaise utilisation de l&apos;Application</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span>d&apos;un dysfonctionnement lié à l&apos;appareil de l&apos;utilisateur</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span>de données ou informations erronées fournies par les utilisateurs</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10 - UPDATED */}
          <section className="border-2 border-black rounded-3xl p-8 bg-red-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-200 border-2 border-black rounded-xl flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                10. Suppression du compte
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              
              {/* In-App Deletion Process */}
              <div className="bg-white border-2 border-black rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-3">🔴 Comment supprimer votre compte :</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">Option 1 : Directement depuis l&apos;application (recommandé)</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4 mt-2 text-sm">
                      <li>Ouvrez l&apos;application Seen&Feel</li>
                      <li>Accédez à <span className="font-semibold">Paramètres → Compte</span></li>
                      <li>Appuyez sur <span className="font-semibold">&quot;Supprimer mon compte&quot;</span></li>
                      <li>Confirmez votre identité (vérification par email ou SMS)</li>
                      <li>Choisissez : suppression immédiate ou programmée</li>
                      <li>Confirmez définitivement la suppression</li>
                    </ol>
                    <p className="text-sm mt-2 text-gray-600">
                      ⏱️ Délai : Le compte sera supprimé sous 48 heures (ou à la date programmée)
                    </p>
                  </div>

                  <div className="pt-3 border-t-2 border-gray-200">
                    <p className="font-semibold text-gray-900">Option 2 : Par email</p>
                    <p className="text-sm mt-1">
                      Envoyez votre demande à <a href="mailto:contact@seenandfeel.fr" className="text-blue-600 hover:underline font-semibold">contact@seenandfeel.fr</a>
                    </p>
                    <p className="text-sm text-gray-600">(Réponse et traitement sous 30 jours maximum)</p>
                  </div>
                </div>
              </div>

              {/* What Gets Deleted */}
              <div className="bg-white border-2 border-black rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-3">🗑️ La suppression entraîne :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Effacement de vos données personnelles (nom, email, préférences)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Perte de l&apos;historique de visionnage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Suppression de vos votes et préférences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Retrait de tous les groupes auxquels vous appartenez</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">ℹ️</span>
                    <span>Révocation des tokens d&apos;authentification (si connexion avec Apple/Google)</span>
                  </li>
                </ul>
              </div>

              {/* Critical Warnings */}
              <div className="bg-yellow-100 border-2 border-black rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  ⚠️ IMPORTANT - À lire avant de supprimer votre compte
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">1.</span>
                    <div>
                      <p className="font-semibold">La suppression est DÉFINITIVE et IRRÉVERSIBLE</p>
                      <p className="text-gray-600">Vous ne pourrez pas récupérer vos données après la suppression</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">2.</span>
                    <div>
                      <p className="font-semibold">Votre abonnement n&apos;est PAS annulé automatiquement</p>
                      <p className="text-gray-600">
                        La suppression de votre compte Seen&Feel <span className="font-bold">n&apos;annule PAS</span> votre abonnement App Store ou Google Play. 
                        Vous devez gérer votre abonnement séparément :
                      </p>
                      <div className="mt-2 ml-4 space-y-1">
                        <p><span className="font-semibold">iOS :</span> Paramètres → [Votre nom] → Abonnements</p>
                        <p className="text-xs">
                          Ou : <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">apps.apple.com/account/subscriptions</a>
                        </p>
                        <p className="mt-2"><span className="font-semibold">Android :</span> Google Play Store → Menu → Abonnements</p>
                      </div>
                      <p className="text-red-600 font-semibold mt-2">
                        → Si vous ne l&apos;annulez pas, vous continuerez à être facturé même après la suppression du compte
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">3.</span>
                    <div>
                      <p className="font-semibold">Option de suppression programmée (pour les abonnés)</p>
                      <p className="text-gray-600">
                        Vous pouvez choisir de programmer la suppression à l&apos;expiration de votre abonnement actuel, 
                        ou de supprimer immédiatement (mais l&apos;abonnement continuera jusqu&apos;à son terme)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">4.</span>
                    <div>
                      <p className="font-semibold">Données conservées pour obligations légales</p>
                      <p className="text-gray-600">
                        Certaines données peuvent être conservées si la loi l&apos;exige (données de facturation, conformité fiscale, prévention de fraude)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Confirmation Process */}
              <div className="bg-green-50 border-2 border-black rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">✅ Après la suppression :</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Vous recevrez un email de confirmation une fois la suppression terminée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Vous ne pourrez plus vous connecter à l&apos;application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Vous pourrez créer un nouveau compte à tout moment avec la même adresse email</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Section 11 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-gray-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Modifications des CGU
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Les CGU peuvent être modifiées à tout moment.
              </p>
              <p className="font-semibold text-gray-900">
                L&apos;utilisateur sera informé en cas de changements majeurs.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-yellow-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Droit applicable
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900">
                Les présentes CGU sont soumises au droit français.
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
            <Link href="/cgu" className="hover:text-gray-900 font-semibold">Conditions</Link>
            <span>•</span>
            <Link href="/mentions-legales" className="hover:text-gray-900">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}