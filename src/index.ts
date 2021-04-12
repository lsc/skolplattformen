export interface Subject {
  code: string
  category: string
  name: string
  comment?: string
}

type Repo = { [key: string]: string | undefined }

const subjects: Repo = {
  BL: 'Bild',
  EN: 'Engelska',
  HKK: 'Hem & Konsumentkunskap',
  IDH: 'Idrott & Hälsa',
  MA: 'Matematik',
  MU: 'Musik',
  NO: 'Naturorienterande ämnen',
  BI: 'Biologi',
  FY: 'Fysik',
  KE: 'Kemi',
  SO: 'Samhällsorienterande ämnen',
  GE: 'Geografi',
  HI: 'Historia',
  RE: 'Religionskunskap',
  SH: 'Samhällskunskap',
  SL: 'Slöjd',
  SV: 'Svenska',
  SVA: 'Svenska som andraspråk',
  TN: 'Teckenspråk',
  TK: 'Teknik',
  DA: 'Förberedande dansarutbildning',
  JU: 'Judiska studier',
  ES: 'Estetisk verksamhet',
}
const traningsskolaSubjects: Repo = {
  KOM: 'Kommunikation',
  MOT: 'Motorik',
  VAA: 'Vardagsaktiviteter',
  VEU: 'Verklighetsuppfattning',
}
const specialLanguages: Repo = {
  EN: 'Engelska',
  FR: 'Franska',
  FI: 'Finska',
  IT: 'Italienska',
  JAP: 'Japanska',
  KI: 'Kinesiska',
  PO: 'Portugisiska',
  RY: 'Ryska',
  SAM: 'Samiska',
  SP: 'Spanska',
  SV: 'Svenska',
  SVA: 'Svenska som andraspråk',
  TN: 'Teckenspråk',
  TY: 'Tyska',
}
const languages: Repo = {
  ...specialLanguages,

  ACE: 'Acehnesiska',
  ACH: 'Acoli',
  AAR: 'Afar, Danakil ',
  AFR: 'Afrikaans',
  AKA: 'Akan, Asante, Fante',
  SQI: 'Albanska',
  AMH: 'Amhariska',
  ARA: 'Arabiska',
  HYE: 'Armeniska',
  AII: 'Assyriska, Nyarameiska',
  AYM: 'Aymara',
  AZE: 'Azerbadjanska',
  BAL: 'Baluchi, Baloci, Baluci, Makrani',
  BAM: 'Bambara',
  BAI: 'Bamileke',
  EUS: 'Baskiska',
  BEM: 'Bemba, Chibemba, Chiwemba, Ichibemba, Wemba',
  BEN: 'Bengaliska',
  BER: 'Berbiska',
  BIL: 'Bile',
  BYN: 'Bilen, Bilein, Bileno, Bilin',
  BOS: 'Bosniska',
  BUL: 'Bulgariska',
  MYA: 'Burmesiska',
  CEB: 'Cebuanska, Binisaya, Sebuano, Sugbuanon, Sugbuhanon, Visayan',
  DAN: 'Danska',
  DAR: 'Darginska, Dargi, Dargin, Dargintsy, Khiurkilinskii, Uslar',
  PRS: 'Dari, Parsi, Persian',
  DMQ: 'Dimli',
  DIV: 'Divehi',
  ENG: 'Engelska',
  EST: 'Estniska',
  EWE: 'Ewe',
  FIJ: 'Fijianska',
  FIN: 'Finska',
  VLS: 'Flamländska',
  FRA: 'Franska',
  FAO: 'Färöiska',
  GAA: 'Ga',
  KAT: 'Georgiska',
  GRE: 'Grekiska',
  KAL: 'Grönländska',
  GUJ: 'Gujarati',
  HEB: 'Hebreiska',
  HIN: 'Hindi',
  IBO: 'Ibo',
  IND: 'Indonesiska',
  ISL: 'Isländska',
  ITA: 'Italienska',
  JPN: 'Japanska',
  YID: 'Jiddisch',
  KAM: 'Kamba, Kekamba, Kikamba',
  KHM: 'Khmer',
  KAN: 'Kannada',
  KAR: 'Karenska',
  CAT: 'Katalanska',
  KAZ: 'Kazakiska',
  KIK: 'Kikuyu',
  ZHO: 'Kinesiska',
  CMN: 'Kinesiska, Mandarin',
  HAK: 'Kinesiska, Hakka',
  YUE: 'Kinesiska, Kantonesiska',
  NAN: 'Kinesiska, Min Nan',
  KIN: 'Kinyarwanda',
  KIR: 'Kirgisiska',
  RUN: 'Kirundi',
  KON: 'Kongo',
  KOR: 'Koreanska',
  ROP: 'Kreolska',
  HRV: 'Kroatiska',
  KRO: 'Kru',
  KUR: 'Kurdiska',
  CKB: 'Kurdiska, centr.',
  KMR: 'Kurdiska, norra',
  SDH: 'Kurdiska, södra',
  LAO: 'Laotiska',
  LAV: 'Lettiska',
  LMA: 'Limba',
  LIN: 'Lingala',
  LIT: 'Litauiska',
  LUG: 'Luganda/Ganda',
  LUO: 'Luo',
  MKD: 'Makedonska',
  MLG: 'Malagaskiska',
  MSA: 'Malajiska',
  MAL: 'Malayalami',
  MLT: 'Maltesiska',
  MNK: 'Mandinka',
  MRI: 'Maori',
  MAR: 'Marathi',
  MYX: 'Masaaba, Gisu, Gugisu, Lumasaaba, Masaba',
  FIT: 'Meänkieli',
  MON: 'Mongoliska',
  NLD: 'Nederländska',
  NEP: 'Nepalesiska',
  NOR: 'Norska',
  NYA: 'Nyanja',
  ORM: 'Oromo',
  PUS: 'Pashto',
  PTN: 'Patani',
  FAS: 'Persiska',
  POL: 'Polska',
  POR: 'Portugisiska',
  PAN: 'Punjabi',
  ROM: 'Romani',
  RMC: 'Romani, Karpaterna',
  RML: 'Romani, Baltisk',
  RMN: 'Romani, Arli',
  RMF: 'Romani, Kalé',
  RMO: 'Romani, Sinti',
  RMU: 'Romani, Tavringer',
  RMY: 'Romani, Lovari, Kalderari',
  RON: 'Rumänska',
  RUS: 'Ryska',
  SSY: 'Saho',
  NSM: 'Samiska, (norra)',
  SMI: 'Samiska',
  SMJ: 'Samiska, Lulesamiska',
  SJE: 'Samiska, Pitesamiska',
  SMA: 'Samiska, Sydsamiska',
  SJU: 'Samiska, Umesamiska',
  SMO: 'Samoanska',
  SRP: 'Serbiska',
  HBS: 'Serbokroatiska',
  SOT: 'Sesotho, Sisutho, Souto, Suthu, Suto',
  SNA: 'Shona',
  SIN: 'Singalesiska',
  SLK: 'Slovakiska',
  SLV: 'Slovenska',
  SOM: 'Somaliska',
  SPA: 'Spanska',
  SWA: 'Swahili',
  SYC: 'Syrianska/assyriska, suryaya, suryoyo',
  SYR: 'Syriska',
  TRU: 'Syriska, Turoyo',
  TLG: 'Tagalog',
  TAM: 'Tamil',
  TAT: 'Tatariska',
  TEL: 'Telugu',
  THA: 'Thai',
  TIB: 'Tibetanska',
  TIG: 'Tigre',
  TIR: 'Tigrinja',
  CES: 'Tjeckiska',
  TON: 'Tonganska',
  TSN: 'Tswana, Setswana',
  TUR: 'Turkiska',
  DEU: 'Tyska',
  UIG: 'Uiguriska',
  UKR: 'Ukrainska',
  HUN: 'Ungerska',
  URD: 'Urdu',
  UZB: 'Uzbekiska',
  VIE: 'Vietnamesiska',
  WOL: 'Wolof',
  YOR: 'Yoruba, Yariba, Yooba',
  ZUL: 'Zulu',
  SPK: 'Övriga språk',
}

type Parser = (code: string) => Subject | null
const parseSubject: Parser = (code) => {
  if (!subjects[code]) return null

  return {
    code,
    category: '',
    name: subjects[code] as string,
  }
}

const parseTrainingSubject: Parser = (code) => {
  if (!traningsskolaSubjects[code]) return null

  return {
    code,
    category: 'Träningsskolans ämnesområden',
    name: traningsskolaSubjects[code] as string,
  }
}

const parseLanguage: Parser = (code) => {
  if (!code.startsWith('M1') && !code.startsWith('M2')) return null
  const category =
    'Moderna språk, ' + (code.startsWith('M1') ? 'elevens val' : 'språkval')
  const language = code.substr(2)

  return {
    code,
    category,
    name: languages[language] || 'Okänt',
  }
}

const parseAltLanguage: Parser = (code) => {
  if (!code.startsWith('ASSV')) return null
  const language = code.substr(4)

  return {
    code,
    category: 'Alt moderna språk, språkval',
    name: languages[language] || 'Okänt',
  }
}

const parseNativeLanguage: Parser = (code) => {
  if (!code.startsWith('ML')) return null
  const language = code.substr(2)

  return {
    code,
    category: 'Modersmål',
    name: languages[language] || 'Okänt',
  }
}

const parse = (code: string): Subject => {
  return (
    parseSubject(code) ||
    parseTrainingSubject(code) ||
    parseLanguage(code) ||
    parseAltLanguage(code) ||
    parseNativeLanguage(code) || { code, category: 'Okänd', name: code }
  )
}

export default parse
