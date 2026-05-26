import annaMueller from "@/assets/attorneys/anna-mueller.jpg";
import thomasWeber from "@/assets/attorneys/thomas-weber.jpg";
import katrinSchmidt from "@/assets/attorneys/katrin-schmidt.jpg";
import markusHoffmann from "@/assets/attorneys/markus-hoffmann.jpg";
import christinaBauer from "@/assets/attorneys/christina-bauer.jpg";
import stefanKlein from "@/assets/attorneys/stefan-klein.jpg";
import lisaFischer from "@/assets/attorneys/lisa-fischer.jpg";
import janSchneider from "@/assets/attorneys/jan-schneider.jpg";

export interface Attorney {
  id: string;
  name: string;
  title: string;
  practiceAreas: string[];
  email: string;
  bio: string;
  education: string[];
  admissions: string[];
  image: string;
  location: string;
  featured: boolean;
  notableCases?: string[];
  awards?: string[];
}

export const attorneys: Attorney[] = [
  {
    id: "anna-mueller",
    name: "Dr. Anna Müller",
    title: "Managing Partner",
    practiceAreas: ["Corporate Law", "Mergers & Acquisitions"],
    email: "a.mueller@accelawchambers.com",
    bio: "Dr. Anna Müller is the Managing Partner of Acce Law Chambers and a nationally recognized authority in corporate law and mergers & acquisitions. With over 25 years of distinguished practice, she has advised on transactions totaling more than $40 billion, establishing herself as one of Australia's most sought-after corporate attorneys. Dr. Müller founded the firm's M&A practice in 1998 and has since grown it into one of the most respected teams in the Sydney legal market. Her expertise spans cross-border acquisitions, joint ventures, corporate restructurings, and private equity transactions. She is known for her strategic thinking, meticulous attention to detail, and ability to navigate complex multi-jurisdictional deals. Dr. Müller regularly advises ASX 200 companies, major private equity funds, and international corporations on their most critical transactions. She is frequently invited to speak at international legal conferences and has authored numerous publications on Australian corporate law reforms.",
    education: ["Dr. jur., University of Sydney (summa cum laude)", "LL.M., Harvard Law School"],
    admissions: ["Australia (1994)", "New York (1996)"],
    image: annaMueller,
    location: "Level 5/101 Sussex Street\nSydney NSW 2000, Australia",
    featured: true,
    notableCases: [
      "Lead counsel in the $8.2 billion acquisition of Pacific Industries Ltd by a US industrial conglomerate (2023)",
      "Advised on the $4.5 billion merger of two leading Australian pharmaceutical companies (2022)",
      "Successfully represented a major mining supplier in a contested $2.1 billion takeover defence (2021)",
      "Lead advisor on the $6.3 billion cross-border restructuring of an Asia-Pacific logistics group (2020)",
      "Counsel in the landmark $3.8 billion private equity buyout of an Australian technology company (2019)"
    ],
    awards: [
      "JUVE Leading Practitioner in M&A (2018-2024)",
      "Chambers Europe Band 1 Corporate/M&A (2015-2024)",
      "Legal 500 Hall of Fame - Corporate Law",
      "Best Lawyers Australia - Mergers & Acquisitions (2012-2024)"
    ]
  },
  {
    id: "thomas-weber",
    name: "Thomas Weber",
    title: "Senior Partner",
    practiceAreas: ["Finance Law", "Cryptocurrency & Blockchain"],
    email: "t.weber@accelawchambers.com",
    bio: "Thomas Weber is a Senior Partner and head of the Finance and Cryptocurrency practice at Acce Law Chambers. With over 25 years of experience in financial regulations and an exceptional track record in emerging digital asset law, he has established himself as Australia's foremost authority on cryptocurrency and blockchain legal matters. Thomas has won landmark cases that have shaped the regulatory landscape for digital assets across the Asia-Pacific region, earning him a reputation as the go-to attorney for crypto exchanges, DeFi platforms, and institutional investors entering the digital asset space. His practice spans complex financial litigation, cryptocurrency regulatory defense, ICO and token structuring, and cross-border compliance for fintech companies. Thomas has successfully defended clients in over 50 cryptocurrency-related disputes, achieving favorable outcomes in cases involving exchange hacks, smart contract disputes, and regulatory enforcement actions by ASIC and Australian authorities. He regularly advises major Australian banks, international hedge funds, and leading cryptocurrency exchanges on regulatory compliance and litigation strategy. Thomas is a sought-after speaker at global fintech conferences and has authored influential publications on the intersection of traditional finance law and blockchain technology.",
    education: ["Staatsexamen, Ludwig-Maximilians-Universität München (distinction)", "LL.M., Cambridge University", "Certified Blockchain Expert (CBE)"],
    admissions: ["Australia (1996)"],
    image: thomasWeber,
    location: "Level 5/101 Sussex Street\nSydney NSW 2000, Australia",
    featured: true,
    notableCases: [
      "Won a $245 million recovery case for investors in Australia's largest cryptocurrency fraud prosecution (2024)",
      "Successfully defended a major crypto exchange against $180 million in regulatory penalties - all charges dismissed (2023)",
      "Landmark victory establishing legal precedent for DeFi protocol governance in Australian courts (2023)",
      "Secured $95 million settlement for institutional investors in a cross-border smart contract dispute (2022)",
      "Lead counsel in the successful defence of a blockchain startup against securities violations - full acquittal (2021)"
    ],
    awards: [
      "Chambers FinTech Band 1 - Cryptocurrency & Blockchain (2021-2024)",
      "JUVE Leading Practitioner in Financial Services Litigation (2018-2024)",
      "Legal 500 Hall of Fame - FinTech & Digital Assets",
      "Who's Who Legal - Blockchain & Cryptocurrency Thought Leader (2022-2024)"
    ]
  },
  {
    id: "katrin-schmidt",
    name: "Dr. Katrin Schmidt",
    title: "Partner",
    practiceAreas: ["Real Estate", "Finance"],
    email: "k.schmidt@accelawchambers.com",
    bio: "Dr. Katrin Schmidt is a Partner specializing in real estate transactions and structured finance at Acce Law Chambers. Over the past 18 years, she has established herself as one of the leading real estate lawyers in Australia, having advised on property transactions with an aggregate value exceeding $15 billion. Her practice encompasses the full spectrum of real estate matters, including acquisitions and dispositions of commercial properties, development projects, sale-and-leaseback transactions, and complex financing structures. Dr. Schmidt represents a prestigious client base that includes institutional investors, sovereign wealth funds, REITs, leading property developers, and major Australian and international banks. She is particularly renowned for her expertise in structuring tax-efficient real estate investments and navigating the regulatory complexities of Australian property law. Dr. Schmidt also advises on real estate aspects of corporate M&A transactions and restructurings. She serves on the advisory board of the Property Council of Australia and regularly publishes on developments in Australian real estate law.",
    education: ["Dr. jur., Humboldt-Universität zu Berlin", "MBA, INSEAD"],
    admissions: ["Australia (2006)"],
    image: katrinSchmidt,
    location: "Level 5/101 Sussex Street\nSydney NSW 2000, Australia",
    featured: true,
    notableCases: [
      "Lead counsel on the $2.8 billion acquisition of a prime office portfolio in Sydney and Melbourne (2023)",
      "Advised a Middle Eastern sovereign wealth fund on $1.9 billion Australian logistics portfolio acquisition (2022)",
      "Structured a $1.4 billion sale-and-leaseback transaction for a major Australian retailer (2021)",
      "Lead advisor on the $950 million refinancing of a mixed-use development in Melbourne (2020)",
      "Counsel in the $780 million acquisition and development of a landmark Sydney high-rise (2019)"
    ],
    awards: [
      "Chambers Europe Band 1 Real Estate (2019-2024)",
      "JUVE Leading Practitioner in Real Estate (2017-2024)",
      "Legal 500 Leading Individual - Real Estate Finance",
      "Who's Who Legal - Real Estate (2018-2024)"
    ]
  },
  {
    id: "geoff-stephens",
    name: "Jeff Brian",
    title: "Partner",
    practiceAreas: ["Intellectual Property", "Technology"],
    email: "j.brian@accelawchambers.com",
    bio: "Jeff Brian is a Partner and head of the Intellectual Property and Technology practice at Acce Law Chambers. With over 15 years of specialized experience, he has built one of the premier IP practices in the United States, advising technology companies, startups, and established enterprises on the full range of intellectual property matters. His expertise spans patent prosecution and litigation, trademark protection, trade secret disputes, licensing negotiations, and technology transactions. Jeff Brian has a particular focus on the intersection of IP law and emerging technologies, including artificial intelligence, blockchain, and digital platforms. He regularly represents clients before U.S. IP offices and in IP litigation before federal courts. Before joining Acce Law Chambers, Jeff Brian spent three years at a leading international law firm, which gives him unique insight into the technology industry and cross-border IP matters. He is a sought-after advisor for tech startups seeking to protect their innovations and scale globally.",
    education: ["J.D., Stanford Law School", "B.S., Massachusetts Institute of Technology"],
    admissions: ["United States (2009)", "Massachusetts (2009)"],
    image: markusHoffmann,
    location: "United States",
    featured: false,
    notableCases: [
      "Successfully defended a U.S. automotive technology company in a $180 million patent infringement dispute (2023)",
      "Advised on the IP aspects of a $450 million technology company acquisition (2022)",
      "Won a landmark trade secret case protecting proprietary AI algorithms valued at $95 million (2021)",
      "Negotiated a $120 million cross-licensing agreement between major technology companies (2020)",
      "Lead counsel in patent litigation resulting in a permanent injunction against a major competitor (2019)"
    ],
    awards: [
      "Chambers USA Band 2 Intellectual Property (2020-2024)",
      "IAM Patent 1000 - Recommended Individual",
      "Legal 500 Rising Star - Technology (2019)",
      "Managing IP Rising Star (2018)"
    ]
  },
  {
    id: "christina-bauer",
    name: "Christina Bauer",
    title: "Partner",
    practiceAreas: ["Employment Law", "Labor Relations"],
    email: "c.bauer@accelawchambers.com",
    bio: "Christina Bauer is a Partner specializing in employment law and labor relations at Acce Law Chambers. With 16 years of dedicated practice in this field, she has become one of the most trusted employment law advisors to major Australian corporations. Her practice covers the full spectrum of employment matters, including individual employment contracts, executive compensation, workforce restructurings, enterprise bargaining, collective agreements, and employment litigation. Christina regularly advises ASX 200 companies and international corporations on their most sensitive employment issues, including large-scale redundancy programs, discrimination claims, and whistleblower matters. She has particular expertise in the employment aspects of M&A transactions, having advised on the labor law implications of dozens of major deals. Christina is known for her pragmatic approach, deep understanding of Australian employment law intricacies, and ability to find creative solutions to complex workforce challenges. She frequently conducts management training sessions on employment law compliance and speaks at industry conferences on emerging trends in Australian employment law.",
    education: ["Staatsexamen, Freie Universität Berlin", "LL.M., University of London (King's College)"],
    admissions: ["Australia (2008)"],
    image: christinaBauer,
    location: "Level 5/101 Sussex Street\nSydney NSW 2000, Australia",
    featured: false,
    notableCases: [
      "Lead employment counsel on the integration of 12,000 employees following a $3.2 billion merger (2023)",
      "Successfully defended an ASX 200 company against a high-profile discrimination lawsuit (2022)",
      "Advised on a complex workforce restructuring affecting 4,500 employees across three states (2021)",
      "Negotiated a landmark enterprise agreement for a major mining company (2020)",
      "Lead counsel in litigation resulting in the dismissal of a $45 million wrongful termination claim (2019)"
    ],
    awards: [
      "Chambers Europe Band 2 Employment (2021-2024)",
      "JUVE Leading Practitioner in Employment Law (2019-2024)",
      "Legal 500 Recommended - Employment",
      "Who's Who Legal - Labour & Employment (2022-2024)"
    ]
  },
  {
    id: "stefan-klein",
    name: "Dr. Stefan Klein",
    title: "Counsel",
    practiceAreas: ["Tax", "Estate Planning"],
    email: "s.klein@accelawchambers.com",
    bio: "Dr. Stefan Klein is Counsel in the Tax and Private Client practice at Acce Law Chambers. With over 12 years of specialized experience, he has established himself as a leading advisor to high-net-worth individuals, family offices, and entrepreneurs on sophisticated tax planning and wealth transfer strategies. His practice encompasses Australian and international tax planning, estate and succession planning, family governance structures, charitable trusts, and tax-efficient investment structuring. Dr. Klein holds dual qualifications as a lawyer and certified tax advisor, giving him a comprehensive perspective on complex wealth planning matters. He regularly advises families with generational wealth on structuring their holdings for tax efficiency and seamless succession, while preserving family harmony. Dr. Klein has particular expertise in establishing and managing Australian trusts and foundations for both charitable and private purposes. He also advises on the tax implications of real estate investments and corporate restructurings. He is a frequent speaker at wealth management conferences and has authored numerous articles on Australian tax reform and international tax developments.",
    education: ["Dr. jur., Universität zu Köln", "Certified Tax Advisor (Steuerberater)"],
    admissions: ["Australia (2012)", "Certified Tax Advisor (2014)"],
    image: stefanKlein,
    location: "Level 5/101 Sussex Street\nSydney NSW 2000, Australia",
    featured: false,
    notableCases: [
      "Structured the $680 million estate plan for a prominent Australian industrial family (2023)",
      "Advised on the tax-efficient restructuring of a $450 million family office portfolio (2022)",
      "Established a charitable trust with $120 million in assets for a philanthropic family (2021)",
      "Designed a cross-border succession structure for a family with assets across five countries (2020)",
      "Successfully defended a $35 million tax assessment before the Federal Court of Australia (2019)"
    ],
    awards: [
      "Chambers HNW Band 2 Private Wealth Law (2021-2024)",
      "Legal 500 Recommended - Tax",
      "Best Lawyers Australia - Tax Law (2020-2024)",
      "Handelsblatt Top Tax Lawyer (2022, 2023)"
    ]
  },
  {
    id: "lisa-fischer",
    name: "Lisa Fischer",
    title: "Associate",
    practiceAreas: ["Corporate Law", "Private Equity"],
    email: "l.fischer@accelawchambers.com",
    bio: "Lisa Fischer is an Associate in the Corporate and Private Equity practice at Acce Law Chambers. Since joining the firm in 2019, she has quickly distinguished herself as a rising star in Sydney's corporate law community. Her practice focuses on private equity transactions, including leveraged buyouts, growth equity investments, add-on acquisitions, and exit transactions. Lisa also advises on fund formation matters, portfolio company governance, and regulatory compliance for financial sponsors. She has been involved in numerous significant transactions, working closely with private equity sponsors and their portfolio companies throughout the deal cycle. Lisa brings a strong academic foundation combined with practical commercial awareness to her work. Before joining Acce Law Chambers, she gained valuable experience at a leading New York law firm, giving her exposure to US market practices and cross-border deal dynamics. She is known for her dedication, analytical rigor, and ability to manage complex workstreams efficiently. Lisa is an active member of the Australian Private Equity and Venture Capital Association.",
    education: ["Staatsexamen, Bucerius Law School (with honors)", "LL.M., NYU School of Law"],
    admissions: ["Australia (2019)"],
    image: lisaFischer,
    location: "Level 5/101 Sussex Street\nSydney NSW 2000, Australia",
    featured: false,
    notableCases: [
      "Key team member on a $1.8 billion private equity buyout of an Australian healthcare company (2023)",
      "Advised on three add-on acquisitions totaling $380 million for a portfolio company (2022)",
      "Assisted in the $650 million secondary buyout of an Australian software company (2021)",
      "Supported the structuring of a $400 million growth equity investment (2020)",
      "Part of the team advising on a $250 million carve-out transaction (2019)"
    ],
    awards: [
      "JUVE Rising Star - Corporate (2023)",
      "Legal 500 Rising Star - Private Equity (2022)"
    ]
  },
  {
    id: "jeff-brian",
    name: "Jeff Brian",
    title: "Associate",
    practiceAreas: ["Litigation", "Securities"],
    email: "j.brian@accelawchambers.com",
    bio: "Jeff Brian is an Associate in the Litigation and Securities practice at Acce Law Chambers. Since joining the firm in 2020, he has developed a focused practice in securities litigation, regulatory enforcement, and complex commercial disputes. Jeff regularly represents public companies, boards of directors, and individual executives in SEC investigations, securities class actions, and shareholder disputes. He has particular expertise in defending against insider trading allegations, market manipulation claims, and disclosure violations. Jeff also advises on corporate governance matters and conducts internal investigations for clients facing regulatory scrutiny. His analytical approach and attention to detail have made him a valuable member of the litigation team on several high-profile matters. Before joining Acce Law Chambers, Jeff completed a judicial clerkship at the U.S. District Court for the District of Massachusetts, where he gained firsthand insight into judicial decision-making in commercial cases. He combines this practical courtroom perspective with deep knowledge of US securities regulations. Jeff is an active participant in securities law forums and has published articles on recent developments in US capital markets regulation.",
    education: ["J.D., Harvard Law School", "B.A., Georgetown University"],
    admissions: ["United States (2020)", "Massachusetts (2020)"],
    image: janSchneider,
    location: "United States",
    featured: false,
    notableCases: [
      "Key team member defending a public company in $120 million securities litigation (2023)",
      "Assisted in an SEC investigation resulting in no enforcement action (2022)",
      "Part of the team representing directors in a major shareholder derivative lawsuit (2021)",
      "Contributed to the successful defence of market manipulation allegations (2020)",
      "Assisted in internal investigation following whistleblower allegations at a listed company (2020)"
    ],
    awards: [
      "Legal 500 Rising Star - Dispute Resolution (2023)"
    ]
  },
];

export const practiceAreas = [
  {
    id: "corporate-law",
    name: "Corporate Law",
    description: "Strategic counsel for businesses of all sizes on governance, compliance, and corporate transactions.",
    icon: "Building2",
  },
  {
    id: "litigation",
    name: "Litigation",
    description: "Aggressive advocacy in complex commercial disputes, from trial through appeal.",
    icon: "Scale",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Comprehensive representation in acquisitions, development, leasing, and financing.",
    icon: "Home",
  },
  {
    id: "intellectual-property",
    name: "Intellectual Property",
    description: "Protection and monetization of patents, trademarks, copyrights, and trade secrets.",
    icon: "Lightbulb",
  },
  {
    id: "employment-law",
    name: "Employment Law",
    description: "Guidance on workplace policies, disputes, and regulatory compliance.",
    icon: "Users",
  },
  {
    id: "tax-estate",
    name: "Tax & Estate Planning",
    description: "Strategic wealth preservation and tax-efficient succession planning.",
    icon: "FileText",
  },
];
