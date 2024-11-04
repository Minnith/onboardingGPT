export interface Message {
  id: string;
  content: string;
  type: 'user' | 'system' | 'form';
  timestamp: Date;
  formData?: OnboardingFormData;
}

export interface OnboardingFormData {
  type: 'personal' | 'documents' | 'banking' | 'review';
  fields: Record<string, any>;
}

export interface OnboardingState {
  currentStep: number;
  completed: boolean;
  personalInfo?: PersonalInfo;
  documents?: Documents;
  bankingInfo?: BankingInfo;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
}

export interface Documents {
  idProof: string;
  addressProof: string;
  taxForms: string;
  educationCertificates: string;
}

export interface BankingInfo {
  accountHolder: string;
  accountNumber: string;
  routingNumber: string;
  bankName: string;
}