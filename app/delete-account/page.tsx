import { Trash2, AlertCircle, Mail, Database, XCircle } from 'lucide-react';

// Since Next.js components and local image imports are not supported in this environment,
// we will use standard HTML elements (<a>) for navigation and an inline SVG for the logo.

const LogoSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
        {/* Placeholder icon representing the app logo (e.g., eye or shield) */}
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);


export default function DeleteAccount() {
  // Email and Subject for the mailto link, based on user's instruction
  const deletionEmail = 'support@seenaandfeel.com';
  const deletionSubject = 'URGENT Account Deletion Request';
  const mailtoLink = `mailto:${deletionEmail}?subject=${encodeURIComponent(deletionSubject)}&body=${encodeURIComponent("Je souhaite supprimer définitivement mon compte SeenAndFeel et toutes les données associées. Mon adresse e-mail est : [Veuillez confirmer l'adresse email de votre compte ici].")}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header (Adapted to use standard <a> tag and inline SVG logo) */}
      <header className="border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <a href="/" className="flex gap-1 items-center hover:opacity-80 transition-opacity">
            <LogoSVG />
            <span className="font-bold text-gray-900">SeenAndFeel</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        
        {/* Page Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Trash2 className="w-10 h-10 text-red-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Suppression de Compte
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">Processus simple et garanti de vos données personnelles.</p>
          <div className="w-24 h-1 bg-red-300"></div>
        </div>

        {/* Introduction / Warning */}
        <div className="bg-red-50 border-2 border-red-500 rounded-3xl p-8 mb-10 shadow-lg">
            <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed font-semibold">
                    ATTENTION : La suppression de votre compte Seen&Feel est <span className="underline font-extrabold text-red-700">définitive et irréversible.</span> Toutes vos données personnelles et votre historique seront effacés.
                </p>
            </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">

          {/* Section 1: Instructions by Email (The Required Action) */}
          <section className="border-2 border-black rounded-3xl p-8 bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-200 border-2 border-black rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                1. Comment demander la suppression de votre compte
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                Puisque votre identifiant n'est pas directement visible dans l'application, nous utilisons votre adresse e-mail pour confirmer la propriété du compte et traiter la demande de suppression de manière sécurisée.
              </p>

              <div className="bg-green-100 border-2 border-green-500 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-3">
                    Processus de suppression par e-mail
                </h3>
                <ol className="list-decimal list-inside space-y-3 font-semibold">
                    <li>
                        <span className="font-bold">Utilisez l'adresse e-mail associée à votre compte Seen&Feel.</span>
                    </li>
                    <li>
                        Envoyez un e-mail à l'adresse suivante :
                        <p className="mt-2 text-blue-600 font-extrabold text-xl break-words">
                            {deletionEmail}
                        </p>
                    </li>
                    <li>
                        Le sujet de votre e-mail doit être :
                        <p className="mt-2 text-red-600 font-extrabold text-xl break-words">
                            {deletionSubject}
                        </p>
                    </li>
                    <li>
                        Dans le corps de l'e-mail, veuillez confirmer votre identité et votre souhait de suppression.
                    </li>
                </ol>
              </div>

              <div className="text-center mt-6">
                <a 
                  href={mailtoLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold text-lg hover:bg-red-700 hover:scale-105 hover:shadow-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Trash2 className="w-5 h-5" />
                  Envoyer la demande de suppression
                </a>
                <p className="text-sm text-gray-500 mt-3">Cliquez ci-dessus pour ouvrir votre client de messagerie.</p>
              </div>

            </div>
          </section>

          {/* Section 2: Data Deleted/Retained (Google Requirement) */}
          <section className="border-2 border-black rounded-3xl p-8 bg-blue-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-200 border-2 border-black rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                2. Données effacées et conservées
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-6">
              
              <div className="bg-white border-2 border-black rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Trash2 className="w-5 h-5 text-red-600" />
                    Données qui seront effacées :
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nom d'utilisateur et adresse e-mail du compte.</li>
                  <li>Historique de visionnage, notes, listes de films (Wishlist, Vus).</li>
                  <li>Préférences de genre et algorithmes de recommandation personnalisés.</li>
                  <li>Appartenance à tout groupe d'amis ou données de vote de groupe.</li>
                  <li>Jetons (tokens) d'authentification tiers (Apple, Google).</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-2 border-black rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-gray-900" />
                    Données qui peuvent être conservées :
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Données anonymisées et agrégées utilisées pour l'analyse des tendances (qui ne peuvent plus être reliées à votre identité).</li>
                  <li>Données conservées pour des raisons légales ou comptables (ex: factures si vous avez eu un abonnement), conformément à la loi (durée légale maximale).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Subscription Warning (Crucial for Google compliance) */}
          <section className="border-2 border-black rounded-3xl p-8 bg-pink-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-200 border-2 border-black rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                3. Information Importante sur les Abonnements
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="font-extrabold text-red-700">
                La suppression de votre compte Seen&Feel <span className="underline">n'annule pas automatiquement</span> les abonnements souscrits via Google Play ou l'App Store.
              </p>
              <p>
                Vous devez annuler votre abonnement manuellement pour éviter d'être facturé pour les cycles futurs.
              </p>
              
              <div className="bg-white border-2 border-black rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Comment annuler votre abonnement :</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-semibold">Android (Google Play) :</span> Ouvrez l'application Google Play Store → Menu → Paiements et Abonnements → Abonnements.
                  </li>
                  <li>
                    <span className="font-semibold">iOS (App Store) :</span> Allez dans Paramètres de votre appareil → Votre nom → Abonnements.
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Back Button / Link to Policy */}
        <div className="mt-12 text-center flex justify-center gap-6">
          <a 
            href="/confidentialite"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all border-2 border-black"
          >
            ← Retour à la Politique de Confidentialité
          </a>
        </div>

      </div>

      {/* Footer (Simplified) */}
      <footer className="border-t-2 border-gray-200 py-10 bg-gray-50 mt-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <a href="/" className="flex items-center justify-center gap-3 mb-4">
            <LogoSVG />
            <span className="font-bold text-gray-900">SeenAndFeel</span>
          </a>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} SeenAndFeel. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}