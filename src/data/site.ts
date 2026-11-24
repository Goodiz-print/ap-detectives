/** Source unique des coordonnées, mentions réglementaires et navigation. */
export const site = {
  url: 'https://ap-detectives.com',
  name: 'AP Détectives & Consulting',
  shortName: 'AP Détectives',
  owner: 'Pauline Gravey',
  tagline:
    "AP Détectives & Consulting est une agence de détectives privés pour particuliers et professionnels sur Bordeaux, dans toute la France et à l'étranger.",
  email: 'contact@ap-detectives.com',
  phone: { display: '06 99 12 16 27', href: 'tel:+33699121627', e164: '+33699121627' },
  address: {
    note: 'uniquement sur RDV',
    street: 'Rue Joséphine',
    postalCode: '33000',
    city: 'Bordeaux',
    country: 'FR',
  },
  linkedin: 'https://www.linkedin.com/in/pauline-gravey-6894a320a/',
  legal: {
    siren: '892 402 900',
    naf: "8030Z (activités d'enquête)",
    agrementDirigeant: '2026-0027784-AGD-ARP-0563572',
    carteProfessionnelle: 'CAR-033-2027-12-01-20220563572',
    autorisationExercice: 'AUT-033-2120-04-27-20210783227',
    rcp: 'Contrat MATMUT PRO — 22 bis avenue des Canadiens, 76470 Le Tréport',
    memberships:
      "Membre de l'Office National des Détectives (OND), de la Confédération Nationale des Enquêteurs Privés (CNEP) et du Réseau d'Enquêteurs Privés (REP).",
  },
} as const;

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Particuliers/Professionnels', href: '/particuliers-professionnels/' },
  { label: "L'Agence", href: '/l-agence/' },
  { label: 'Tarifs', href: '/tarifs/' },
  { label: 'FAQs', href: '/faqs/' },
] as const;

export const contactHref = '/contact/';
