export class StepperService {
  constructor(public steps: string[]) {
    this.activeStep = this.steps[0];
  }
  activeStep: string;
  getActiveStep(event: any) {
    this.activeStep = event;
  }
  next() {
    this.switchStep(+1);
  }
  back() {
    this.switchStep(-1);
  }
  switchStep(direction: number): void {
    let stepIndex = this.steps.indexOf(this.activeStep);
    if (stepIndex >= 0 && stepIndex < this.steps.length) {
      stepIndex += direction;
      this.activeStep = this.steps[stepIndex];
    }
  }
  showNextButton():boolean {
    return this.steps.indexOf(this.activeStep) < this.steps.length - 1;
  }
  showBackButton():boolean {
    return this.steps.indexOf(this.activeStep) > 0
  }
  showOptionButton():boolean {
    return this.steps.indexOf(this.activeStep) === this.steps.length - 1;
  }
  isActive(step: any) {
    return step === this.activeStep;
  }
  isCompleted(index: number) {
    return index < this.steps.indexOf(this.activeStep);
  }
  isLastStep(index: number) {
    return (this.steps.length - 1) !== index;
  }
}
