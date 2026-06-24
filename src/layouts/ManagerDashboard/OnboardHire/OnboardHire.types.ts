export interface OnboardHireProps {
  handleSetOnboardHire: (state: boolean) => void
}

export interface OnboardHireFormProps {
  email: string,
  name: string,
  managerId: string
}