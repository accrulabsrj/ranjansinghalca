// Structure for act dashboard data - similar to ELP dashboard
export interface ActSection {
  id: string;
  title: string;
  content: string;
  subsections?: ActSubsection[];
  citations?: string[];
  bareActText?: string; // Actual legal text from the bare act
  laymanExplanation?: string; // Simple explanation for non-legal professionals
  crossMapping?: string; // How this relates to other acts
}

export interface ActSubsection {
  id: string;
  title: string;
  content: string;
  citations?: string[];
  bareActText?: string; // Actual legal text from the bare act
  laymanExplanation?: string; // Simple explanation for non-legal professionals
  crossMapping?: string; // How this relates to other acts
}

export interface ActDashboardData {
  actId: string;
  overview?: ActSection; // Overview section with comprehensive content
  definitions?: ActSection; // Definitions section
  sections: {
    applicability?: ActSection;
    stakeholders?: ActSection;
    exemptions?: ActSection;
    dataBreach?: ActSection;
    regulatory?: ActSection;
    obligations?: ActSection;
    rights?: ActSection;
    penalties?: ActSection;
    [key: string]: ActSection | undefined;
  };
  officialText?: {
    sections: ActSection[];
  };
  laymanExplanation?: {
    sections: ActSection[];
  };
}

export type ActDashboardSectionKey = 
  | 'overview'
  | 'definitions'
  | 'applicability'
  | 'stakeholders'
  | 'exemptions'
  | 'dataBreach'
  | 'regulatory'
  | 'obligations'
  | 'rights'
  | 'penalties'
  | 'appeals'
  | 'digitalSignatures'
  | 'electronicGovernance'
  | 'additionalOffences'
  | 'miscellaneous';

