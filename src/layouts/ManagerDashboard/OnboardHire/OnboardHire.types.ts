export interface OnboardHireProps {
  handleSetOnboardHire: (state: boolean) => void
}

export interface OnboardHireFormProps {
  email: string,
  password: string,
  name: string,
  role: string,
  managerId: string,
}

export interface OnboardHireResponse{
  error?: {
    code?: string,
    message?: string,
    details?: null
  }
}