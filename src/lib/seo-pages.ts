export const routePaths = {
  home: "/",
  about: "/about-dr-sandeep-kanugula",
  services: "/orthopaedic-services-visakhapatnam",
  book: "/book-appointment",
  sportsInjury: "/sports-injury-specialist-visakhapatnam",
  arthroscopy: "/arthroscopy-surgeon-visakhapatnam",
  roboticJoint: "/robotic-joint-replacement-visakhapatnam",
  paediatric: "/paediatric-orthopaedic-doctor-visakhapatnam",
  clubfoot: "/clubfoot-treatment-visakhapatnam",
  acl: "/acl-injury-treatment-visakhapatnam",
  kneePain: "/knee-pain-specialist-visakhapatnam",
  hipReplacement: "/hip-replacement-surgeon-visakhapatnam",
  gallery: "/gallery"
} as const;

export type LinkItem = {
  label: string;
  href: string;
};

export type InfoCard = {
  title: string;
  description: string;
  href?: string;
};

export type SnapshotItem = {
  label: string;
  value: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SeoLandingPage = {
  path: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  heroHighlights: string[];
  overviewTitle: string;
  overviewDescription: string;
  overviewBody: string;
  overviewPoints: string[];
  snapshotItems: SnapshotItem[];
  featuredCards: InfoCard[];
  secondaryCards: InfoCard[];
  faqDescription: string;
  faqs: FaqItem[];
  relatedLinks: LinkItem[];
};

export const aboutPageHighlights = [
  "AIIMS New Delhi training exposure",
  "Nizam's Institute of Medical Sciences, Hyderabad",
  "Ganga Medical Centre & Hospital, Coimbatore",
  "Q1 Hospitals, Visakhapatnam"
];

export const aboutSnapshot = [
  { label: "AIIMS", value: "Senior Residency - New Delhi" },
  { label: "NIMS", value: "MS Orthopaedics - Hyderabad" },
  { label: "Ganga Hospital", value: "Arthroscopy, trauma, and joint care exposure" },
  { label: "BIRRD Tirupati", value: "Paediatric orthopaedic and deformity care exposure" }
];

export const orthopaedicServiceGroups = {
  featured: [
    {
      title: "Arthroscopy (Key Hole) & Sports Injuries",
      description:
        "Focused treatment for ACL injuries, meniscus tears, ligament damage, instability, and structured return-to-sport recovery.",
      href: routePaths.sportsInjury
    },
    {
      title: "Robotic Joint Replacement",
      description:
        "Precision-focused knee, hip, and selected complex replacement planning with recovery support built around comfort and confidence.",
      href: routePaths.roboticJoint
    },
    {
      title: "Paediatric Orthopaedics",
      description:
        "Parent-friendly orthopaedic care for clubfoot, deformity correction, paediatric trauma, gait concerns, and growth-related conditions.",
      href: routePaths.paediatric
    }
  ],
  secondary: [
    {
      title: "Fractures & Trauma Care",
      description:
        "Prompt fracture and trauma treatment with careful planning for healing, alignment, and safe functional recovery."
    },
    {
      title: "Spine & Back Treatment",
      description:
        "Assessment and treatment guidance for back pain, neck pain, posture-related concerns, and spine-related orthopaedic symptoms."
    },
    {
      title: "Foot & Ankle Surgery",
      description:
        "Treatment for foot and ankle injuries, pain, instability, deformity, and movement-related limitations."
    },
    {
      title: "Hand Surgery",
      description:
        "Care for hand injuries, pain, stiffness, tendon problems, and functional movement issues."
    },
    {
      title: "Pelvi-Acetabular Surgery",
      description:
        "Specialized planning for complex pelvic and acetabular trauma with hospital-based orthopaedic care."
    },
    {
      title: "Complex Trauma",
      description:
        "Advanced support for high-energy injuries, complex fractures, accident-related trauma, and staged recovery planning."
    }
  ]
};

export const seoLandingPages: Record<string, SeoLandingPage> = {
  sportsInjury: {
    path: routePaths.sportsInjury,
    badge: "AIIMS-Trained Sports Injury Care",
    heroTitle: "Sports Injury & Arthroscopy Care in Visakhapatnam",
    heroDescription:
      "Evaluation and treatment for ligament injuries, ACL tears, meniscus injuries, shoulder instability, and sports-related orthopaedic conditions.",
    title: "Sports Injury Specialist in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "AIIMS-trained sports injury specialist in Visakhapatnam offering arthroscopy, ACL injury care, ligament treatment, meniscus repair guidance, and return-to-sport recovery.",
    keywords: [
      "sports injury specialist in Vizag",
      "sports injury doctor in Visakhapatnam",
      "ACL injury treatment Vizag",
      "ligament injury specialist Visakhapatnam",
      "meniscus injury doctor Vizag"
    ],
    image: "/images/doctor/dr-sandeep-fracture-treatment.webp",
    imageAlt: "Sports injury specialist in Visakhapatnam consulting a patient",
    heroHighlights: [
      "Arthroscopy-driven sports injury care",
      "ACL, ligament, and meniscus evaluation",
      "Return-to-sport recovery planning",
      "Q1 Hospitals, Visakhapatnam"
    ],
    overviewTitle: "Focused sports injury care with strong arthroscopy-led planning",
    overviewDescription:
      "For active patients, working professionals, and athletes who need clear diagnosis, structured treatment, and recovery confidence.",
    overviewBody:
      "Dr. Sandeep Kanugula offers sports injury care in Visakhapatnam with emphasis on arthroscopy, joint stability, ligament injuries, meniscus problems, tendon issues, and practical rehabilitation planning. His training pathway includes AIIMS New Delhi, NIMS Hyderabad, Ganga Medical Centre & Hospital Coimbatore, and sports-injury-relevant exposure alongside advanced orthopaedic mentors including Dr Ramesh Sen at Max Super Speciality Hospital, Mohali.",
    overviewPoints: [
      "ACL, PCL, meniscus, tendon, and cartilage injury guidance",
      "Knee and shoulder sports injury assessment with key-hole surgery pathways when needed",
      "Recovery plans tailored to safe return to daily activity and sport"
    ],
    snapshotItems: [
      { label: "Primary Focus", value: "ACL, ligament, and meniscus care" },
      { label: "Technique", value: "Arthroscopy and minimally invasive planning" },
      { label: "Rehab Goal", value: "Stable return to work, play, and training" },
      { label: "Hospital", value: "Q1 Hospitals, Visakhapatnam" }
    ],
    featuredCards: [
      {
        title: "ACL & ligament injuries",
        description:
          "Evaluation for ACL tears, instability, twisting injuries, and treatment planning built around knee stability and return-to-sport confidence.",
        href: routePaths.acl
      },
      {
        title: "Meniscus & cartilage problems",
        description:
          "Care for locking, catching, swelling, and knee pain related to meniscus injury or cartilage wear."
      },
      {
        title: "Shoulder and sports-related instability",
        description:
          "Treatment planning for dislocation, labral injury, overuse pain, and shoulder instability in active patients."
      }
    ],
    secondaryCards: [
      {
        title: "Arthroscopy surgery planning",
        description:
          "Key-hole surgery planning for knee and shoulder injuries, instability, and sports-related joint problems.",
        href: routePaths.arthroscopy
      },
      {
        title: "Rehabilitation guidance",
        description:
          "Structured support for recovery phases, activity progression, and safer movement after injury or surgery."
      },
      {
        title: "Fractures and trauma",
        description:
          "Broader orthopaedic care remains available for sports fractures, impact injuries, and accident-related trauma."
      }
    ],
    faqDescription:
      "Answers to common questions about ligament injuries, arthroscopy, rehabilitation, and return to activity.",
    faqs: [
      {
        question: "When should I see a sports injury specialist?",
        answer:
          "If pain, swelling, instability, locking, or reduced performance continues after a sports injury, an orthopaedic evaluation is recommended."
      },
      {
        question: "Do all ACL injuries need surgery?",
        answer:
          "Not always. Treatment depends on instability, activity level, associated damage, and recovery goals."
      },
      {
        question: "Can sports injuries be treated with arthroscopy?",
        answer:
          "Yes. Many ligament, meniscus, and shoulder problems are evaluated and managed with arthroscopy-based treatment planning."
      },
      {
        question: "How do I book a sports injury consultation?",
        answer:
          "You can book through the appointment page, call the clinic, or message on WhatsApp for faster coordination."
      }
    ],
    relatedLinks: [
      { label: "Arthroscopy surgeon in Visakhapatnam", href: routePaths.arthroscopy },
      { label: "ACL injury treatment in Visakhapatnam", href: routePaths.acl },
      { label: "Book orthopaedic appointment", href: routePaths.book }
    ]
  },
  arthroscopy: {
    path: routePaths.arthroscopy,
    badge: "Key-Hole Surgery Expertise",
    heroTitle: "Arthroscopy Surgeon in Visakhapatnam",
    heroDescription:
      "AIIMS-trained arthroscopy surgeon in Visakhapatnam offering key-hole surgery guidance for knee injuries, shoulder instability, meniscus problems, and sports-related joint pain.",
    title: "Arthroscopy Surgeon in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "Consult an arthroscopy surgeon in Visakhapatnam for key-hole surgery, knee arthroscopy, shoulder arthroscopy, sports injuries, and minimally invasive orthopaedic care.",
    keywords: [
      "arthroscopy surgeon in Vizag",
      "knee arthroscopy doctor Visakhapatnam",
      "shoulder arthroscopy surgeon Vizag",
      "key hole orthopaedic surgery Visakhapatnam",
      "sports injury surgery Vizag"
    ],
    image: "/images/doctor/dr-sandeep-spine-care.webp",
    imageAlt: "Arthroscopy surgeon in Visakhapatnam during patient review",
    heroHighlights: [
      "Knee and shoulder arthroscopy",
      "Sports injury surgery planning",
      "Minimally invasive orthopaedic care",
      "Ganga Hospital exposure"
    ],
    overviewTitle: "Key-hole orthopaedic surgery with recovery-focused guidance",
    overviewDescription:
      "Arthroscopy can support more precise evaluation and treatment while keeping the patient journey focused, structured, and easier to understand.",
    overviewBody:
      "Dr. Sandeep Kanugula offers arthroscopy-focused orthopaedic care in Visakhapatnam for sports injuries, joint pain, instability, meniscus tears, and shoulder or knee problems that may benefit from minimally invasive techniques. His training background spans AIIMS New Delhi, NIMS Hyderabad, and fellowship exposure at Ganga Medical Centre & Hospital, Coimbatore, with continued clinical alignment toward sports injury surgery and modern orthopaedic methods.",
    overviewPoints: [
      "Knee arthroscopy for ligament, meniscus, and cartilage-related problems",
      "Shoulder arthroscopy for instability, rotator cuff, and labral injury pathways",
      "Patient-friendly recovery planning with clear next-step communication"
    ],
    snapshotItems: [
      { label: "Procedure Style", value: "Minimally invasive key-hole surgery" },
      { label: "Primary Joints", value: "Knee and shoulder" },
      { label: "Linked Expertise", value: "Sports injury treatment" },
      { label: "Current Practice", value: "Q1 Hospitals, Visakhapatnam" }
    ],
    featuredCards: [
      {
        title: "Knee arthroscopy",
        description:
          "Evaluation and treatment planning for meniscus tears, ligament injuries, loose bodies, and persistent swelling or locking."
      },
      {
        title: "Shoulder arthroscopy",
        description:
          "Care for instability, recurrent dislocation, labral injury, and movement-related shoulder pain."
      },
      {
        title: "Sports injury surgery",
        description:
          "Integrated planning for athletes and active individuals needing structured treatment and safe return-to-sport recovery.",
        href: routePaths.sportsInjury
      }
    ],
    secondaryCards: [
      {
        title: "ACL and ligament care",
        description:
          "Explore ACL and ligament-specific treatment pathways including instability assessment and return-to-activity planning.",
        href: routePaths.acl
      },
      {
        title: "Complex trauma support",
        description:
          "Broader orthopaedic care is available for fractures, trauma, and accident-related joint injuries."
      },
      {
        title: "Book consultation",
        description:
          "Visit the appointment page for call, WhatsApp, and lead form booking options.",
        href: routePaths.book
      }
    ],
    faqDescription:
      "Answers to common questions about key-hole surgery, joint injuries, recovery, and treatment planning.",
    faqs: [
      {
        question: "What is arthroscopy?",
        answer:
          "Arthroscopy is a key-hole surgical technique used to evaluate and treat certain joint problems through small incisions."
      },
      {
        question: "Which joints are commonly treated with arthroscopy?",
        answer:
          "The knee and shoulder are common arthroscopy joints, especially in sports injuries and instability-related problems."
      },
      {
        question: "Is arthroscopy always needed for joint pain?",
        answer:
          "No. Many patients improve with non-surgical care, and arthroscopy is considered only when it is clinically appropriate."
      },
      {
        question: "How do I know if key-hole surgery is right for me?",
        answer:
          "A consultation helps determine whether symptoms, imaging, and recovery goals match an arthroscopy-based treatment plan."
      }
    ],
    relatedLinks: [
      { label: "Sports injury specialist in Visakhapatnam", href: routePaths.sportsInjury },
      { label: "Book arthroscopy consultation", href: routePaths.book },
      { label: "Orthopaedic services in Visakhapatnam", href: routePaths.services }
    ]
  },
  roboticJoint: {
    path: routePaths.roboticJoint,
    badge: "Advanced Joint Replacement Care",
    heroTitle: "Robotic Knee & Hip Joint Replacement in Visakhapatnam",
    heroDescription:
      "Advanced joint replacement planning for knee and hip arthritis with precision-focused surgical care and mobility restoration.",
    title: "Robotic Joint Replacement in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "Consult for robotic joint replacement in Visakhapatnam including robotic knee replacement, robotic hip replacement, advanced joint care, and recovery-focused planning.",
    keywords: [
      "robotic joint replacement in Visakhapatnam",
      "robotic knee replacement doctor Vizag",
      "robotic hip replacement surgeon Visakhapatnam",
      "joint replacement specialist Vizag",
      "knee replacement doctor Visakhapatnam"
    ],
    image: "/images/doctor/dr-sandeep-joint-replacement.webp",
    imageAlt: "Robotic joint replacement planning by orthopaedic surgeon in Visakhapatnam",
    heroHighlights: [
      "Robotic knee replacement planning",
      "Robotic hip replacement guidance",
      "Precision and alignment-focused treatment",
      "Hospital-based recovery support"
    ],
    overviewTitle: "Advanced joint replacement planning for movement, comfort, and long-term confidence",
    overviewDescription:
      "For patients with severe joint damage, advanced replacement care is centered on pain relief, mobility, rehabilitation, and better day-to-day function.",
    overviewBody:
      "Dr. Sandeep Kanugula provides robotic joint replacement guidance in Visakhapatnam for patients with advanced knee arthritis, hip degeneration, persistent pain, stiffness, and limited movement. His training includes AIIMS New Delhi, NIMS Hyderabad, fellowship exposure at Ganga Medical Centre & Hospital Coimbatore, and continued alignment with advanced replacement concepts including knee, hip, and complex joint reconstruction pathways.",
    overviewPoints: [
      "Robotic knee replacement for advanced pain and mobility limitation",
      "Robotic hip replacement planning for severe hip damage and function loss",
      "Recovery-focused counselling, rehabilitation coordination, and patient-first decision making"
    ],
    snapshotItems: [
      { label: "Primary Procedures", value: "Robotic knee and hip replacement" },
      { label: "Joint Focus", value: "Knee, hip, and advanced reconstruction care" },
      { label: "Planning Goal", value: "Precision, balance, and recovery clarity" },
      { label: "Hospital", value: "Q1 Hospitals, Visakhapatnam" }
    ],
    featuredCards: [
      {
        title: "Robotic knee replacement",
        description:
          "Structured treatment planning for severe arthritis, deformity, stiffness, and long-standing knee pain affecting daily life."
      },
      {
        title: "Robotic hip replacement",
        description:
          "Evaluation for advanced hip damage, painful movement, limping, and function-limiting degeneration.",
        href: routePaths.hipReplacement
      },
      {
        title: "Complex joint reconstruction",
        description:
          "Selected cases may also require more advanced planning involving alignment, implant strategy, and staged recovery support."
      }
    ],
    secondaryCards: [
      {
        title: "Knee pain specialist care",
        description:
          "Not all knee pain needs surgery. Explore diagnostic and non-surgical guidance on the dedicated knee pain page.",
        href: routePaths.kneePain
      },
      {
        title: "Shoulder and elbow replacement exposure",
        description:
          "Advanced joint replacement perspective also supports broader orthopaedic decision-making in complex cases."
      },
      {
        title: "Book appointment",
        description:
          "Use the appointment page for direct call, WhatsApp, or form-based consultation booking.",
        href: routePaths.book
      }
    ],
    faqDescription:
      "Answers to common questions about joint replacement, recovery, rehabilitation, and surgical planning.",
    faqs: [
      {
        question: "When is robotic joint replacement considered?",
        answer:
          "It is usually considered when pain, stiffness, and reduced function remain severe despite non-surgical treatment."
      },
      {
        question: "Does robotic replacement mean faster recovery?",
        answer:
          "Recovery varies by patient, but precise planning can support alignment, confidence, rehabilitation, and smoother postoperative progression."
      },
      {
        question: "Do all knee pain patients need replacement?",
        answer:
          "No. Many patients improve with evaluation, medication, physiotherapy, injections, or other non-surgical care."
      },
      {
        question: "Can I book for knee or hip replacement advice first?",
        answer:
          "Yes. A consultation helps clarify whether advanced replacement is needed and what the safest next step should be."
      }
    ],
    relatedLinks: [
      { label: "Knee pain specialist in Visakhapatnam", href: routePaths.kneePain },
      { label: "Hip replacement surgeon in Visakhapatnam", href: routePaths.hipReplacement },
      { label: "Book joint replacement consultation", href: routePaths.book }
    ]
  },
  paediatric: {
    path: routePaths.paediatric,
    badge: "Paediatric Orthopaedic Care",
    heroTitle: "Paediatric Orthopaedic Care & Clubfoot Treatment",
    heroDescription:
      "Evaluation and management of paediatric orthopaedic conditions including clubfoot, deformity correction, fractures, and growth-related bone and joint concerns.",
    title: "Paediatric Orthopaedic Doctor in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "Consult a paediatric orthopaedic doctor in Visakhapatnam for clubfoot treatment, CTEV care, paediatric deformity correction, cerebral palsy orthopaedic support, limb length concerns, and child-friendly fracture care.",
    keywords: [
      "paediatric orthopaedic doctor in Vizag",
      "clubfoot treatment in Visakhapatnam",
      "CTEV specialist in Visakhapatnam",
      "pediatric deformity correction Vizag",
      "cerebral palsy orthopaedic care Vizag"
    ],
    image: "/images/doctor/dr-sandeep-kanugula-orthopaedic-doctor.webp",
    imageAlt: "Paediatric orthopaedic doctor in Visakhapatnam portrait",
    heroHighlights: [
      "Clubfoot and CTEV care pathways",
      "BIRRD Hospital Tirupati exposure",
      "Paediatric trauma and deformity correction",
      "Family-friendly orthopaedic guidance"
    ],
    overviewTitle: "Trusted paediatric orthopaedic care for children and families in Visakhapatnam",
    overviewDescription:
      "The care approach stays parent-friendly, structured, and clear while focusing on growth, alignment, comfort, function, and long-term movement.",
    overviewBody:
      "Dr. Sandeep Kanugula offers paediatric orthopaedic care in Visakhapatnam for clubfoot, CTEV, deformity correction, gait concerns, cerebral palsy-related orthopaedic support, paediatric trauma, and limb alignment issues. His clinical exposure includes paediatric orthopaedic experience from BIRRD Hospital Tirupati along with training from AIIMS New Delhi, NIMS Hyderabad, and Ganga Medical Centre & Hospital Coimbatore.",
    overviewPoints: [
      "Clubfoot and CTEV evaluation with child-focused treatment planning",
      "Paediatric deformity correction, trauma care, and cerebral palsy orthopaedic support",
      "Parent counselling that keeps treatment steps understandable and reassuring"
    ],
    snapshotItems: [
      { label: "Paediatric Focus", value: "Clubfoot, deformity, trauma, and gait concerns" },
      { label: "Exposure", value: "BIRRD Hospital Tirupati" },
      { label: "Procedure Scope", value: "Correction, support, and limb alignment planning" },
      { label: "Current Practice", value: "Q1 Hospitals, Visakhapatnam" }
    ],
    featuredCards: [
      {
        title: "Clubfoot and CTEV care",
        description:
          "Treatment guidance for clubfoot, CTEV, and early correction planning with attention to alignment, function, and follow-up needs.",
        href: routePaths.clubfoot
      },
      {
        title: "Paediatric deformity correction",
        description:
          "Support for angular deformities, gait concerns, developmental alignment issues, and progressive correction planning."
      },
      {
        title: "Cerebral palsy and limb support",
        description:
          "Orthopaedic planning for contractures, balance, mobility challenges, limb differences, and selected limb lengthening pathways."
      }
    ],
    secondaryCards: [
      {
        title: "Paediatric trauma care",
        description:
          "Child-focused fracture and injury care with emphasis on growth, healing, comfort, and safe follow-up."
      },
      {
        title: "Family guidance and second opinions",
        description:
          "Consultations are structured to help parents understand diagnosis, treatment options, timing, and recovery expectations."
      },
      {
        title: "Book paediatric orthopaedic appointment",
        description:
          "Use the appointment page for call, WhatsApp, or lead form booking.",
        href: routePaths.book
      }
    ],
    faqDescription:
      "Answers to common questions about children’s bone, joint, deformity, clubfoot, and follow-up care.",
    faqs: [
      {
        question: "Do you treat clubfoot and CTEV?",
        answer:
          "Yes. Clubfoot and CTEV care form an important part of paediatric orthopaedic evaluation and treatment planning."
      },
      {
        question: "Can children be seen for deformity correction concerns?",
        answer:
          "Yes. Gait issues, deformity concerns, limb alignment problems, and growth-related orthopaedic issues can be evaluated."
      },
      {
        question: "Do you provide cerebral palsy orthopaedic support?",
        answer:
          "Yes. Orthopaedic review is available for movement-related deformity, contracture, and mobility concerns associated with cerebral palsy."
      },
      {
        question: "How do I book a paediatric orthopaedic consultation?",
        answer:
          "You can call, WhatsApp, or use the appointment page to request a consultation."
      }
    ],
    relatedLinks: [
      { label: "Clubfoot treatment in Visakhapatnam", href: routePaths.clubfoot },
      { label: "About Dr. Sandeep Kanugula", href: routePaths.about },
      { label: "Book paediatric orthopaedic appointment", href: routePaths.book }
    ]
  },
  clubfoot: {
    path: routePaths.clubfoot,
    badge: "Clubfoot & CTEV Care",
    heroTitle: "Clubfoot Treatment in Visakhapatnam",
    heroDescription:
      "Dedicated clubfoot and CTEV treatment guidance in Visakhapatnam with parent-friendly orthopaedic planning, early correction support, and follow-up care.",
    title: "Clubfoot Treatment in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "Consult for clubfoot treatment in Visakhapatnam, CTEV care, paediatric orthopaedic evaluation, deformity correction planning, and child-friendly follow-up support.",
    keywords: [
      "clubfoot treatment in Visakhapatnam",
      "CTEV specialist in Visakhapatnam",
      "clubfoot doctor Vizag",
      "paediatric clubfoot correction Visakhapatnam"
    ],
    image: "/images/doctor/dr-sandeep-kanugula-orthopaedic-doctor.webp",
    imageAlt: "Clubfoot treatment and paediatric orthopaedic care in Visakhapatnam",
    heroHighlights: [
      "Clubfoot and CTEV care",
      "BIRRD Tirupati exposure",
      "Parent-friendly treatment guidance",
      "Paediatric orthopaedic follow-up"
    ],
    overviewTitle: "Structured clubfoot care with calm parent communication",
    overviewDescription:
      "Early orthopaedic review helps families understand correction options, timing, follow-up, and long-term foot function goals.",
    overviewBody:
      "Dr. Sandeep Kanugula evaluates clubfoot and CTEV in children with emphasis on early diagnosis, correction planning, follow-up, and long-term foot function. This work is supported by paediatric orthopaedic exposure from BIRRD Hospital Tirupati.",
    overviewPoints: [
      "Clubfoot and CTEV assessment",
      "Follow-up planning for correction and alignment",
      "Paediatric orthopaedic monitoring for growth and mobility"
    ],
    snapshotItems: [
      { label: "Condition Focus", value: "Clubfoot and CTEV" },
      { label: "Paediatric Context", value: "Growth, gait, and long-term function" },
      { label: "Exposure", value: "BIRRD Hospital Tirupati" },
      { label: "Consultation", value: "Q1 Hospitals, Visakhapatnam" }
    ],
    featuredCards: [
      {
        title: "Early evaluation",
        description:
          "Timely assessment helps parents understand the severity, flexibility, and correction pathway."
      },
      {
        title: "Family guidance",
        description:
          "Consultations are structured to reduce anxiety and explain follow-up expectations clearly."
      },
      {
        title: "Related paediatric orthopaedic care",
        description:
          "See the main paediatric orthopaedic page for deformity correction, cerebral palsy support, and trauma care.",
        href: routePaths.paediatric
      }
    ],
    secondaryCards: [
      {
        title: "Deformity correction pathways",
        description:
          "Broader paediatric orthopaedic evaluation may include gait, alignment, and correction planning."
      },
      {
        title: "Limb support and monitoring",
        description:
          "Long-term follow-up helps monitor growth, correction, footwear needs, and function."
      },
      {
        title: "Book consultation",
        description:
          "Families can book through the dedicated appointment page for faster coordination.",
        href: routePaths.book
      }
    ],
    faqDescription:
      "Answers to common questions about clubfoot, CTEV, correction planning, and follow-up care.",
    faqs: [
      {
        question: "What is clubfoot?",
        answer:
          "Clubfoot is a foot deformity present from birth where the foot turns inward and needs early orthopaedic evaluation."
      },
      {
        question: "Is clubfoot the same as CTEV?",
        answer:
          "CTEV is a common medical term used to describe clubfoot."
      },
      {
        question: "Can clubfoot be treated early?",
        answer:
          "Yes. Early orthopaedic assessment is important for timely correction and follow-up planning."
      },
      {
        question: "Where can I book a clubfoot consultation?",
        answer:
          "You can book through the appointment page or contact the clinic directly by phone or WhatsApp."
      }
    ],
    relatedLinks: [
      { label: "Paediatric orthopaedic doctor in Visakhapatnam", href: routePaths.paediatric },
      { label: "Book orthopaedic appointment", href: routePaths.book },
      { label: "About Dr. Sandeep Kanugula", href: routePaths.about }
    ]
  },
  acl: {
    path: routePaths.acl,
    badge: "ACL Injury Treatment",
    heroTitle: "ACL Injury Treatment in Visakhapatnam",
    heroDescription:
      "ACL injury treatment in Visakhapatnam with sports injury evaluation, arthroscopy-based planning, ligament care, and recovery pathways built around stability and return to activity.",
    title: "ACL Injury Treatment in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "Consult for ACL injury treatment in Visakhapatnam including ligament evaluation, knee instability care, sports injury review, and arthroscopy-based management.",
    keywords: [
      "ACL injury treatment Visakhapatnam",
      "ACL surgeon Vizag",
      "ligament injury doctor Visakhapatnam",
      "knee instability specialist Vizag"
    ],
    image: "/images/doctor/dr-sandeep-fracture-treatment.webp",
    imageAlt: "ACL injury treatment consultation in Visakhapatnam",
    heroHighlights: [
      "ACL and ligament evaluation",
      "Knee instability treatment planning",
      "Sports injury expertise",
      "Arthroscopy-linked care"
    ],
    overviewTitle: "Clear knee ligament guidance for unstable, painful, and sports-related injuries",
    overviewDescription:
      "ACL injuries need accurate evaluation to decide whether rehabilitation, bracing, or surgical planning is the right path.",
    overviewBody:
      "ACL injuries are assessed with attention to instability, swelling, twisting injury symptoms, associated meniscus damage, and the level of sport or activity the patient wants to return to.",
    overviewPoints: [
      "ACL tear and instability evaluation",
      "Meniscus and associated ligament injury review",
      "Arthroscopy-linked treatment pathways"
    ],
    snapshotItems: [
      { label: "Condition", value: "ACL and knee ligament injury" },
      { label: "Linked Page", value: "Sports injury specialist in Visakhapatnam" },
      { label: "Technique", value: "Arthroscopy-based planning when needed" },
      { label: "Booking", value: "Call, WhatsApp, or appointment form" }
    ],
    featuredCards: [
      {
        title: "Twisting knee injuries",
        description:
          "Evaluation for sudden instability, swelling, or giving-way after sports or activity."
      },
      {
        title: "Meniscus involvement",
        description:
          "Associated cartilage and meniscus injuries are assessed during treatment planning."
      },
      {
        title: "Return-to-sport planning",
        description:
          "Recovery advice is structured around mobility, stability, and confidence for activity progression."
      }
    ],
    secondaryCards: [
      {
        title: "Sports injury page",
        description:
          "Broader sports injury care is available for ligament, tendon, meniscus, and shoulder-related problems.",
        href: routePaths.sportsInjury
      },
      {
        title: "Arthroscopy page",
        description:
          "See the arthroscopy page for minimally invasive treatment pathways and key-hole surgery guidance.",
        href: routePaths.arthroscopy
      },
      {
        title: "Book consultation",
        description:
          "Book a consultation for knee instability, ACL injury, or sports-related knee pain.",
        href: routePaths.book
      }
    ],
    faqDescription:
      "Answers to common questions about ACL injuries, instability, arthroscopy, and return to activity.",
    faqs: [
      {
        question: "What are common ACL injury symptoms?",
        answer:
          "Swelling, instability, knee giving-way, pain, and loss of confidence during twisting movements are common symptoms."
      },
      {
        question: "Can ACL injuries heal without surgery?",
        answer:
          "Some patients can improve with rehabilitation, depending on instability, activity level, and associated injury."
      },
      {
        question: "Is arthroscopy used for ACL problems?",
        answer:
          "Yes. Arthroscopy is commonly linked with ACL evaluation and surgical treatment planning."
      },
      {
        question: "How do I book an ACL consultation?",
        answer:
          "Use the appointment page or contact the clinic directly by phone or WhatsApp."
      }
    ],
    relatedLinks: [
      { label: "Sports injury specialist in Visakhapatnam", href: routePaths.sportsInjury },
      { label: "Arthroscopy surgeon in Visakhapatnam", href: routePaths.arthroscopy },
      { label: "Book orthopaedic appointment", href: routePaths.book }
    ]
  },
  kneePain: {
    path: routePaths.kneePain,
    badge: "Knee Pain Specialist Care",
    heroTitle: "Knee Pain Specialist in Visakhapatnam",
    heroDescription:
      "Structured knee pain evaluation in Visakhapatnam for arthritis, injury, swelling, instability, sports-related pain, and joint replacement guidance when required.",
    title: "Knee Pain Specialist in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "Consult a knee pain specialist in Visakhapatnam for arthritis, injury-related pain, sports injuries, instability, arthroscopy guidance, and robotic joint replacement assessment.",
    keywords: [
      "knee pain specialist Visakhapatnam",
      "knee doctor Vizag",
      "arthritis knee treatment Vizag",
      "robotic knee replacement Visakhapatnam"
    ],
    image: "/images/doctor/dr-sandeep-joint-replacement.webp",
    imageAlt: "Knee pain specialist care in Visakhapatnam",
    heroHighlights: [
      "Sports injury and arthroscopy pathways",
      "Arthritis and alignment review",
      "Robotic joint replacement guidance",
      "Hospital-based orthopaedic care"
    ],
    overviewTitle: "Knee pain care that moves from diagnosis to the right level of treatment",
    overviewDescription:
      "Knee pain may arise from sports injuries, arthritis, instability, cartilage wear, or long-standing joint degeneration.",
    overviewBody:
      "Dr. Sandeep Kanugula evaluates knee pain in Visakhapatnam with attention to sports injury patterns, arthritis, ligament problems, swelling, deformity, and advanced degeneration that may require robotic joint replacement.",
    overviewPoints: [
      "Sports injury, ligament, and meniscus evaluation",
      "Arthritis and age-related degeneration guidance",
      "Surgical and non-surgical treatment planning"
    ],
    snapshotItems: [
      { label: "Symptoms", value: "Pain, swelling, stiffness, instability" },
      { label: "Primary Routes", value: "Arthroscopy and robotic replacement" },
      { label: "Linked Expertise", value: "Sports injury and joint care" },
      { label: "Booking", value: "Q1 Hospitals, Visakhapatnam" }
    ],
    featuredCards: [
      {
        title: "Sports-related knee pain",
        description:
          "Evaluation for ligament injury, meniscus tears, overuse, and instability."
      },
      {
        title: "Arthritis and wear-related pain",
        description:
          "Guidance for stiffness, swelling, and progressive joint damage affecting mobility."
      },
      {
        title: "Replacement decision support",
        description:
          "Assessment to determine when robotic knee replacement should be considered.",
        href: routePaths.roboticJoint
      }
    ],
    secondaryCards: [
      {
        title: "ACL treatment",
        description:
          "Twisting and instability-based knee injuries may relate to ACL or meniscus damage.",
        href: routePaths.acl
      },
      {
        title: "Arthroscopy care",
        description:
          "Persistent knee locking or sports injuries may benefit from arthroscopy-focused review.",
        href: routePaths.arthroscopy
      },
      {
        title: "Book consultation",
        description:
          "Visit the appointment page for call, WhatsApp, or form booking.",
        href: routePaths.book
      }
    ],
    faqDescription:
      "Answers to common questions about knee pain, arthritis, sports injuries, and treatment options.",
    faqs: [
      {
        question: "What causes long-standing knee pain?",
        answer:
          "Common causes include arthritis, ligament injury, meniscus problems, overload, malalignment, and prior trauma."
      },
      {
        question: "Does knee pain always need surgery?",
        answer:
          "No. Many patients improve with non-surgical treatment and surgery is considered only when appropriate."
      },
      {
        question: "When is replacement considered for knee pain?",
        answer:
          "Replacement may be considered when pain, stiffness, and limited walking remain severe despite conservative care."
      },
      {
        question: "Can I book specifically for knee pain review?",
        answer:
          "Yes. The appointment page can be used for knee pain, sports injury, arthritis, or replacement-related concerns."
      }
    ],
    relatedLinks: [
      { label: "Robotic joint replacement in Visakhapatnam", href: routePaths.roboticJoint },
      { label: "ACL injury treatment in Visakhapatnam", href: routePaths.acl },
      { label: "Book orthopaedic appointment", href: routePaths.book }
    ]
  },
  hipReplacement: {
    path: routePaths.hipReplacement,
    badge: "Hip Replacement Expertise",
    heroTitle: "Hip Replacement Surgeon in Visakhapatnam",
    heroDescription:
      "Advanced hip replacement planning in Visakhapatnam for severe hip pain, arthritis, limp, stiffness, and mobility-limiting joint damage with recovery-focused support.",
    title: "Hip Replacement Surgeon in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "Consult a hip replacement surgeon in Visakhapatnam for advanced hip arthritis, robotic joint replacement guidance, pain relief planning, and mobility-focused orthopaedic care.",
    keywords: [
      "hip replacement surgeon Visakhapatnam",
      "hip replacement doctor Vizag",
      "robotic hip replacement Visakhapatnam",
      "hip pain specialist Vizag"
    ],
    image: "/images/doctor/dr-sandeep-joint-replacement.webp",
    imageAlt: "Hip replacement orthopaedic care in Visakhapatnam",
    heroHighlights: [
      "Advanced hip arthritis care",
      "Robotic joint replacement pathway",
      "Mobility and pain relief focus",
      "Visakhapatnam orthopaedic consultation"
    ],
    overviewTitle: "Advanced hip care for pain relief, mobility, and confidence",
    overviewDescription:
      "For severe hip pain and degeneration, treatment planning should be clear, precise, and focused on recovery and function.",
    overviewBody:
      "Hip replacement assessment focuses on severe pain, arthritis, limp, stiffness, reduced walking capacity, and when surgical treatment may offer better comfort and mobility.",
    overviewPoints: [
      "Hip arthritis and degeneration review",
      "Robotic hip replacement planning",
      "Recovery, rehabilitation, and movement support"
    ],
    snapshotItems: [
      { label: "Primary Focus", value: "Advanced hip pain and degeneration" },
      { label: "Procedure Path", value: "Robotic hip replacement planning" },
      { label: "Goal", value: "Pain relief and mobility restoration" },
      { label: "Hospital", value: "Q1 Hospitals, Visakhapatnam" }
    ],
    featuredCards: [
      {
        title: "Severe hip arthritis",
        description:
          "Assessment for pain, stiffness, limp, and reduced function caused by progressive joint damage."
      },
      {
        title: "Replacement planning",
        description:
          "Careful discussion around when robotic hip replacement may be useful and what recovery typically involves."
      },
      {
        title: "Broader robotic joint care",
        description:
          "Related robotic joint replacement care is available for advanced knee and hip arthritis.",
        href: routePaths.roboticJoint
      }
    ],
    secondaryCards: [
      {
        title: "Knee pain and joint replacement",
        description:
          "Patients with knee and hip symptoms may also need evaluation for arthritis, alignment, and replacement planning.",
        href: routePaths.kneePain
      },
      {
        title: "Second opinions",
        description:
          "Consultations can help clarify whether surgery is needed now, later, or not at all."
      },
      {
        title: "Book consultation",
        description:
          "Use the appointment page for a direct booking pathway.",
        href: routePaths.book
      }
    ],
    faqDescription:
      "Answers to common questions about hip pain, joint replacement, recovery, and treatment planning.",
    faqs: [
      {
        question: "When is hip replacement considered?",
        answer:
          "It is considered when pain, stiffness, and walking difficulty remain severe despite non-surgical treatment."
      },
      {
        question: "Can I get advice before deciding on surgery?",
        answer:
          "Yes. A consultation helps clarify diagnosis, severity, options, and timing before any surgical decision is made."
      },
      {
        question: "Is robotic hip replacement available?",
        answer:
          "Robotic joint replacement planning is available as part of advanced orthopaedic care for selected patients."
      },
      {
        question: "How do I book a hip consultation?",
        answer:
          "The appointment page, phone, and WhatsApp remain the fastest booking options."
      }
    ],
    relatedLinks: [
      { label: "Robotic joint replacement in Visakhapatnam", href: routePaths.roboticJoint },
      { label: "Knee pain specialist in Visakhapatnam", href: routePaths.kneePain },
      { label: "Book orthopaedic appointment", href: routePaths.book }
    ]
  }
};

export const specialtyRouteKeys = [
  "sportsInjury",
  "arthroscopy",
  "roboticJoint",
  "paediatric",
  "clubfoot",
  "acl",
  "kneePain",
  "hipReplacement"
] as const;
