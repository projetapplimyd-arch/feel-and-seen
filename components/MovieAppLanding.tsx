import { Film, Users, Sparkles, Zap, Play, Star, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import logo from '../public/feelandseen_logo_v2.png';
import gifdemo from '../public/seenandfeel.gif';


export default function MovieAppLandingWithAssets() {
  const features = [
    {
      icon: <Sparkles className="w-7 h-7 text-gray-900" />,
      title: "IA Intelligente",
      description: "Notre IA analyse les goûts de tous les membres pour trouver le film parfait.",
      color: "bg-purple-100"
    },
    {
      icon: <Users className="w-7 h-7 text-gray-900" />,
      title: "Décision en Groupe",
      description: "Votez rapidement et trouvez un consensus sans discussions interminables.",
      color: "bg-blue-100"
    },
    {
      icon: <Play className="w-7 h-7 text-gray-900" />,
      title: "Streaming Direct",
      description: "Accédez directement à votre plateforme préférée : Netflix, Prime, Disney+.",
      color: "bg-pink-100"
    }
  ];

  const benefits = [
    "Fini les disputes pour choisir un film",
    "Recommandations personnalisées pour tout le groupe",
    "Compatible avec toutes les plateformes de streaming",
    "Interface simple et rapide",
    "Mode gratuit + fonctionnalités premium"
  ];

  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      features: [
        "Groupes jusqu'à 4 personnes",
        "5 recommandations par jour",
        "Plateformes principales",
        "Historique 7 jours"
      ],
      color: "bg-gray-50",
      popular: false
    },
    {
      name: "Premium",
      price: "4,99€",
      period: "/mois",
      features: [
        "Groupes illimités",
        "Recommandations illimitées",
        "Toutes les plateformes",
        "Historique complet",
        "Filtres avancés",
        "Sans publicité"
      ],
      color: "bg-yellow-100",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-16 md:py-24">
        
        {/* Hero Section with Logo and GIF */}
        <div className="mb-20 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div>
              {/* Logo Badge */}
             <div className="flex gap-1 mb-4">
            <div className="relative w-6 h-6">
              <Image 
                src={logo} 
                alt="Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-gray-900">FeelAndSeen</span>
          </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-7 tracking-tight text-gray-900">
                Le Film Parfait<br />
                Pour{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-gray-900">Tout le Groupe</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-pink-300 -rotate-1"></span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
                Fini les disputes ! Notre IA trouve le film qui plaira à tout le monde en quelques secondes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group px-8 py-4 bg-black text-white rounded-full font-semibold 
                text-lg hover:scale-105 hover:shadow-xl transition-all 
                inline-flex items-center gap-2 justify-center">
                  Télécharger Gratuitement
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-black text-black 
                rounded-full font-semibold text-lg hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all justify-center">
                  Voir la Démo
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex gap-4 items-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8/5</span>
                </div>
                <span>•</span>
                <span>iOS & Android</span>
              </div>
            </div>

            {/* Right Column - Demo GIF */}
            <div className="relative">
              <div className="border-2 border-black rounded-3xl overflow-hidden bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <Image 
                  src={gifdemo}
                  alt="Démo de l'application"
                  width={600}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full -z-10 opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300 rounded-full -z-10 opacity-50"></div>
            </div>

          </div>
        </div>

        {/* Problem/Solution Section */}
        <div className="mb-20 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="border-2 border-black rounded-3xl p-8 bg-red-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">😓 Le Problème</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-xl">❌</span>
                  <span className="text-gray-800">30 minutes perdues à choisir</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">❌</span>
                  <span className="text-gray-800">Disputes dans le groupe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">❌</span>
                  <span className="text-gray-800">Personne n'est satisfait</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="border-2 border-black rounded-3xl p-8 bg-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ La Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span className="text-gray-800">Recommandation en 30 secondes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span className="text-gray-800">Consensus automatique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span className="text-gray-800">Tout le monde est content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14 tracking-tight text-center">
            Comment Ça Marche ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group border-2 border-black p-7 bg-white rounded-3xl hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className={`${feature.color} border-2 border-black w-14 h-14 flex items-center justify-center mb-5 rounded-2xl group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section with Logo */}
        <div className="mb-20 md:mb-32">
          <div className="border-2 border-black rounded-3xl p-10 md:p-12 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
            {/* Logo Watermark */}
            <div className="absolute top-8 right-8 opacity-10">
              <div className="relative w-24 h-24">
                <Image 
                  src={logo}
                  alt="Logo"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center relative z-10">
              Pourquoi FeelAndSeen ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto relative z-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight text-center">
            Tarifs Simples
          </h2>
          <p className="text-xl text-gray-600 text-center mb-14">
            Commencez gratuitement, passez en premium quand vous voulez
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`border-2 border-black p-8 ${plan.color} rounded-3xl ${plan.popular ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:scale-105' : ''} transition-all relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-bold">
                    ⭐ Populaire
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-700">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-black text-white hover:scale-105' 
                    : 'bg-white text-gray-900 border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }`}>
                  {plan.popular ? 'Essayer Premium' : 'Télécharger'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-2 border-black bg-black text-white p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 w-20 h-20 bg-pink-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight text-white tracking-tight">
              Prêt à Profiter de<br />Vos Soirées Cinéma ?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui ont déjà dit adieu aux disputes de groupe.
            </p>
            
            <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all inline-flex items-center gap-2">
              Télécharger Maintenant
              <Film className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Footer with Logo */}
      <footer className="border-t-2 border-gray-200 py-10 bg-gray-50">
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
            <span className="font-bold text-gray-900">FeelAndSeen</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Le film parfait pour tout le groupe, à chaque fois.
          </p>
          <div className="flex gap-6 justify-center text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-900">Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}