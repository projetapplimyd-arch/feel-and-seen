import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/seenandfeel_logo_v2.png';
import { Shield, Lock, Eye, Users, Database, Check, Trash2, AlertCircle, FileText } from 'lucide-react';

export default function Confidentialite() {
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
            <Shield className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Politique de Confidentialité
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">Dernière mise à jour : 14/11/2025</p>
          <div className="w-24 h-1 bg-pink-300"></div>
        </div>

        {/* Intro */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-black rounded-3xl p-8 mb-10">
          <p className="text-gray-700 leading-relaxed">
            La présente politique de confidentialité décrit la manière dont l&apos;application <span className="font-bold">Seen&Feel</span> collecte, utilise et protège les données personnelles de ses utilisateurs, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
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
                1. Responsable du traitement
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                L&apos;application Seen&Feel est éditée par un particulier qui a choisi de ne pas rendre publiques ses informations personnelles conformément à l&apos;article 6-III de la loi n°2004-575 du 21 juin 2004.
              </p>
              <p>
                Les informations permettant son identification ont été transmises à l&apos;hébergeur.
              </p>
              <p>
                Contact pour toute demande relative aux données personnelles : <a href="mailto:contact@seenandfeel.fr" className="font-semibold text-blue-600 hover:underline">contact@seenandfeel.fr</a>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-purple-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-200 border-2 border-black rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                2. Données personnelles collectées
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-6">
              
              {/* 2.1 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">2.1. Données fournies directement par l&apos;utilisateur</h3>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Nom ou pseudonyme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Adresse e-mail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Préférences de films/séries (genres, notes, favoris…)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Participation à un groupe (amis, invitations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Contenus que vous aimez, que vous avez vus ou que vous souhaitez voir</span>
                  </li>
                </ul>
              </div>

              {/* 2.2 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">2.2. Données collectées automatiquement</h3>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Identifiant unique de l&apos;appareil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Statistiques d&apos;utilisation de l&apos;application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Paramètres linguistiques et régionaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Cookies ou technologies similaires (si version web)</span>
                  </li>
                </ul>
              </div>

              {/* 2.3 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">2.3. Données tierces</h3>
                <p className="mb-3">Si vous connectez l&apos;application à un service tiers (ex : Google, Apple), nous pouvons recevoir :</p>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">→</span>
                    <span>votre e-mail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">→</span>
                    <span>votre nom d&apos;utilisateur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">→</span>
                    <span>votre identifiant du service tiers</span>
                  </li>
                </ul>
                <p className="mt-3 font-semibold text-gray-900">Aucune donnée n&apos;est récupérée sans votre consentement.</p>
              </div>

            </div>
          </section>

          {/* Section 3 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-pink-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-200 border-2 border-black rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                3. Finalités du traitement
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-6">
              
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Fonctionnement du service</h3>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Création et gestion du compte utilisateur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Recommandation de films et séries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Création et gestion des groupes d&apos;amis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Calculs de préférences et votes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sauvegarde de l&apos;historique de visionnage</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Amélioration du service</h3>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Statistiques anonymisées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Correction des bugs et optimisation de l&apos;application</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Communication</h3>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Envoi d&apos;alertes ou notifications (paramétrables)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Réponse aux demandes des utilisateurs</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Section 4 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-yellow-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Base légale des traitements
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">Vos données sont collectées et traitées sur la base :</p>
              <ul className="space-y-3 ml-5">
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">📝</span>
                  <span><span className="font-semibold">Du consentement</span> (création de compte, cookies, connexion via services tiers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">📋</span>
                  <span><span className="font-semibold">De l&apos;exécution du contrat</span> (utilisation de l&apos;application et de ses fonctionnalités)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">⚖️</span>
                  <span><span className="font-semibold">De l&apos;intérêt légitime</span> (amélioration de l&apos;application, sécurité)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-blue-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Destinataires des données
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Les données peuvent être accessibles uniquement à :</p>
              <ul className="space-y-2 ml-5">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>L&apos;éditeur de Seen&Feel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Les prestataires d&apos;hébergement (OVH)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Les éventuels sous-traitants strictement nécessaires au fonctionnement de l&apos;application (si applicable)</span>
                </li>
              </ul>
              <div className="bg-white border-2 border-black rounded-2xl p-5 mt-4">
                <p className="font-bold text-gray-900">
                  ⚠️ Aucune donnée n&apos;est vendue ni transmise à des tiers pour des finalités commerciales.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-green-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Stockage et durée de conservation
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">Les données sont conservées pour les durées suivantes :</p>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">Données de compte :</span> tant que le compte est actif
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">Données liées aux préférences, votes, groupes :</span> jusqu&apos;à suppression du compte
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">Données techniques et statistiques :</span> jusqu&apos;à 12 mois
                </div>
              </div>
              <p className="mt-4 font-semibold text-gray-900">
                Vous pouvez supprimer vos données à tout moment (voir section 8).
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-purple-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-200 border-2 border-black rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                7. Sécurité des données
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Nous mettons en place des mesures de sécurité pour protéger vos données contre :</p>
              <ul className="space-y-2 ml-5">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">🛡️</span>
                  <span>l&apos;accès non autorisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">🛡️</span>
                  <span>la modification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">🛡️</span>
                  <span>la divulgation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">🛡️</span>
                  <span>la suppression</span>
                </li>
              </ul>
              <p className="mt-4">
                Cela inclut le chiffrement, la sécurisation des serveurs OVH et la limitation d&apos;accès.
              </p>
            </div>
          </section>

          {/* NEW: Privacy Policy Access Locations */}
          <section className="border-2 border-black rounded-3xl p-8 bg-blue-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-200 border-2 border-black rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                7.5. Accès à cette Politique de Confidentialité
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="font-semibold text-gray-900">
                Cette Politique de Confidentialité est accessible à tout moment depuis :
              </p>
              <div className="space-y-3">
                <div className="bg-white border-2 border-black rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold text-gray-900">Dans l&apos;application :</p>
                    <p className="text-sm mt-1">Paramètres → Confidentialité & Données</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-semibold text-gray-900">Sur notre site web :</p>
                    <p className="text-sm mt-1">
                      <a href="https://seenandfeel.app/confidentialite" className="text-blue-600 hover:underline">
                        seenandfeel.app/confidentialite
                      </a>
                    </p>
                  </div>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-2xl">🏪</span>
                  <div>
                    <p className="font-semibold text-gray-900">Sur l&apos;App Store / Google Play :</p>
                    <p className="text-sm mt-1">Page de l&apos;application (avant téléchargement)</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Vous pouvez consulter cette politique avant de télécharger l&apos;application et à tout moment pendant son utilisation.
              </p>
            </div>
          </section>

          {/* Section 8 - UPDATED */}
          <section className="border-2 border-black rounded-3xl p-8 bg-gradient-to-br from-green-100 to-blue-100 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Vos droits
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">✓ Droit d&apos;accès</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">✓ Droit de rectification</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">✓ Droit d&apos;effacement (droit à l&apos;oubli)</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">✓ Droit d&apos;opposition</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">✓ Droit à la limitation du traitement</span>
                </div>
                <div className="bg-white border-2 border-black rounded-2xl p-4">
                  <span className="font-semibold text-gray-900">✓ Droit à la portabilité</span>
                </div>
              </div>

              {/* NEW: In-App Account Deletion */}
              <div className="bg-red-50 border-2 border-black rounded-2xl p-6 mt-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-red-600" />
                  Suppression de compte et de données (depuis l&apos;application)
                </h3>
                <div className="space-y-3">
                  <p className="font-semibold text-gray-900">Option 1 : Suppression directe dans l&apos;application (recommandé)</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Ouvrez l&apos;application Seen&Feel</li>
                    <li>Allez dans <span className="font-semibold">Paramètres → Compte</span></li>
                    <li>Appuyez sur <span className="font-semibold">&quot;Supprimer mon compte&quot;</span></li>
                    <li>Confirmez votre identité (code par email ou SMS)</li>
                    <li>Choisissez : suppression immédiate ou programmée</li>
                  </ol>
                  
                  <div className="bg-white border-2 border-black rounded-xl p-4 mt-3">
                    <p className="font-semibold text-gray-900 mb-2">⏱️ Délai de suppression :</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Suppression immédiate : sous 48 heures</li>
                      <li>• Suppression programmée : à la date choisie</li>
                      <li>• Confirmation par email une fois terminée</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-gray-900 mt-4">Option 2 : Par email</p>
                  <p>Envoyez votre demande à <a href="mailto:contact@seenandfeel.fr" className="text-blue-600 hover:underline font-semibold">contact@seenandfeel.fr</a></p>
                  <p className="text-sm">(Réponse sous 30 jours maximum)</p>
                </div>
              </div>

              {/* NEW: Important Warnings */}
              <div className="bg-yellow-100 border-2 border-black rounded-2xl p-5 mt-4">
                <p className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  ⚠️ Important à savoir :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>La suppression du compte est <span className="font-semibold">définitive et irréversible</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Toutes vos données seront supprimées (préférences, historique, groupes, votes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><span className="font-semibold">Abonnements App Store/Google Play :</span> La suppression de votre compte n&apos;annule PAS automatiquement votre abonnement. Vous devez l&apos;annuler séparément dans les Paramètres de l&apos;App Store ou Google Play</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Certaines données peuvent être conservées si la loi l&apos;exige (facturation, conformité légale)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Si vous utilisez &quot;Se connecter avec Apple&quot;, tous les tokens d&apos;authentification seront révoqués</span>
                  </li>
                </ul>
              </div>

              {/* Subscription Management */}
              <div className="bg-purple-50 border-2 border-black rounded-2xl p-5 mt-4">
                <p className="font-bold text-gray-900 mb-3">📱 Gestion de votre abonnement (si applicable) :</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">iOS :</span> Paramètres → Votre nom → Abonnements</p>
                  <p>Ou visitez : <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">apps.apple.com/account/subscriptions</a></p>
                  <p className="mt-3"><span className="font-semibold">Android :</span> Google Play Store → Menu → Abonnements</p>
                </div>
              </div>

              {/* Other Rights */}
              <div className="bg-white border-2 border-black rounded-2xl p-5 mt-4">
                <p className="font-bold text-gray-900 mb-2">Pour exercer vos autres droits (accès, rectification, portabilité) :</p>
                <p><a href="mailto:contact@seenandfeel.fr" className="text-blue-600 hover:underline font-semibold">contact@seenandfeel.fr</a></p>
                <p className="mt-2 text-sm">Une réponse vous sera apportée dans un délai maximum de 30 jours.</p>
              </div>
            </div>
          </section>

          {/* Sections 9-11 */}
          <section className="border-2 border-black rounded-3xl p-8 bg-gray-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Transfert hors Union européenne
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="font-semibold">Aucun transfert hors UE n&apos;est prévu.</p>
              <p>
                Si cela devait changer, vous en seriez informé et les garanties appropriées seraient mises en place.
              </p>
            </div>
          </section>

          <section className="border-2 border-black rounded-3xl p-8 bg-pink-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Cookies et technologies similaires
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Si l&apos;application dispose d&apos;une version web ou utilise des outils comme Google Analytics :</p>
              <ul className="space-y-2 ml-5">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🍪</span>
                  <span>Un bandeau de consentement sera affiché</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🍪</span>
                  <span>Vous pourrez accepter ou refuser les cookies de mesure d&apos;audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🍪</span>
                  <span>Les cookies nécessaires au fonctionnement ne peuvent pas être désactivés.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="border-2 border-black rounded-3xl p-8 bg-yellow-50 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Modifications
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                La présente politique de confidentialité peut être mise à jour en cas d&apos;évolution de l&apos;application ou de la réglementation.
              </p>
              <p className="font-semibold text-gray-900">
                En cas de changement majeur, les utilisateurs seront informés.
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
            <Link href="/confidentialite" className="hover:text-gray-900 font-semibold">Confidentialité</Link>
            <span>•</span>
            <Link href="/cgu" className="hover:text-gray-900">Conditions</Link>
            <span>•</span>
            <Link href="/mentions-legales" className="hover:text-gray-900">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}