export type ActId =
  | "dpdpa"
  | "dpdp_rules"
  | "gdpr"
  | "eu_ai_act"
  | "pdpl"
  | "it_act_2000"
  | "saaa100";

export interface ActMeta {
  id: ActId;
  shortName: string;
  fullName: string;
  jurisdiction: string;
  year: number;
  officialSourcePath: string;
  isDraft?: boolean;
  disclaimer?: string;
}

export const ACTS: ActMeta[] = [
  {
    id: "dpdpa",
    shortName: "DPDPA 2023",
    fullName: "Digital Personal Data Protection Act, 2023",
    jurisdiction: "India",
    year: 2023,
    officialSourcePath: "laws/DPDP act, 2023.pdf",
  },
  {
    id: "dpdp_rules",
    shortName: "DPDPA Rules",
    fullName: "Digital Personal Data Protection Rules",
    jurisdiction: "India",
    year: 2025,
    officialSourcePath: "laws/dpdp rules, 2025.pdf",
  },
  {
    id: "gdpr",
    shortName: "GDPR",
    fullName: "General Data Protection Regulation",
    jurisdiction: "European Union",
    year: 2018,
    officialSourcePath: "laws/GDPR_official.pdf", // Note: GDPR file needs to be added
  },
  {
    id: "eu_ai_act",
    shortName: "EU AI Act",
    fullName: "European Union Artificial Intelligence Act",
    jurisdiction: "European Union",
    year: 2024,
    officialSourcePath: "laws/EU AI ACT BARE 2024.pdf",
  },
  {
    id: "pdpl",
    shortName: "PDPL",
    fullName: "Personal Data Protection Law",
    jurisdiction: "UAE / KSA",
    year: 2021,
    officialSourcePath: "laws/pdpl_text.txt",
  },
  {
    id: "it_act_2000",
    shortName: "IT Act 2000",
    fullName: "Information Technology Act, 2000",
    jurisdiction: "India",
    year: 2000,
    officialSourcePath: "laws/it_act_2000_updated.pdf",
  },
  {
    id: "saaa100",
    shortName: "SAAA-100",
    fullName: "Standard on Audit of Artificial Intelligence Agents",
    jurisdiction: "India",
    year: 2024,
    officialSourcePath: "laws/Proposed Draft- SAAA 100 – Standard on Audit of Artificial Intelligence Agents.pdf",
    isDraft: true,
    disclaimer: "This is a draft proposal by CA Ranjan Singhal and is not a final standard. This document is provided for reference purposes only and should not be considered as an official or finalized standard.",
  },
];

export function getActById(id: ActId): ActMeta | undefined {
  return ACTS.find((act) => act.id === id);
}

export function getAllActs(): ActMeta[] {
  return ACTS;
}

