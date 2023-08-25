const form = document.getElementById('multi-step-form');
const steps = document.querySelectorAll('.step-content');
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');

let currentStep = 0;

function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.style.display = index === stepIndex ? 'block' : 'none';
  });
}

function updateStepIndicator(stepIndex) {
  document.querySelectorAll('.step').forEach((step, index) => {
    step.classList.toggle('active', index === stepIndex);
  });
}

function goToStep(stepIndex) {
  currentStep = stepIndex;
  showStep(currentStep);
  updateStepIndicator(currentStep);
}

nextBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      updateStepIndicator(currentStep);
    }
  });
});

prevBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
      updateStepIndicator(currentStep);
    }
  });
});

// Initialize
showStep(currentStep);
updateStepIndicator(currentStep);
