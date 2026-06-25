export interface OnboardHireProps {
  handleSetOnboardHire: (state: boolean) => void
}

type Roles = 'NEW_HIRE' | 'MANAGER' | 'HR'; 

export interface OnboardHireFormProps {
  email: string,
  name: string,
  managerId: string,
  password: string,
  role: Roles,
}

export interface OnboardHireResponse{
  error?: {
    code?: string,
    message?: string,
    details?: null
  }
}