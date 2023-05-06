export interface TimelineRecord {
  date: string;
  icon: any;
  title: string;
  description: string;
}

type ResumeRecordType = "EDUCATION" | "EXPERIENCE";

export interface ResumeRecord {
  header: string;
  location: string;
  /** ISO Format is expected. */
  startDate: string;
  subheader: string;
  type: ResumeRecordType;
  /** ISO Format is expected. null indicates 'Present' */
  endDate?: string | null;
  points?: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  logoUrl?: string;
}
