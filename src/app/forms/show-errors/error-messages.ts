export const ERROR_MESSAGES: any = {
    required: () => `This field is required.`,
    minlength: (par:any) => `Min ${par.requiredLength} chars is required.`,
    zipcode: (par: any) => `Allowed zipcode is ${par.allowedCode}.`,
    compare: () => `Password & confirm password do not match.`
}