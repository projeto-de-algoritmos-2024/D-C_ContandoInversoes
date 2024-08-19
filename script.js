function generateRandomPreferences() {
  const options = ["Rap", "Funk", "Sertanejo", "HipHop", "Forro"];
  let shuffled = options.sort(() => Math.random() - 0.5);
  return shuffled;
}

function countInversions(arr1, arr2) {
  let inversionCount = 0;

  // Verifica se os elementos na mesma posição das duas listas são diferentes
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          inversionCount++;
      }
  }

  return inversionCount;
}

function compareMusicPreferences() {
  const form = document.getElementById('preferencesForm');
  const userPreferences = Array.from(form.elements)
      .filter(el => el.tagName === 'SELECT')
      .map(select => select.value);

  if (new Set(userPreferences).size !== 5) {
      alert('Por favor, selecione exatamente 5 gostos musicais distintos.');
      return;
  }

  const machinePreferences = generateRandomPreferences();
  const inversions = countInversions(userPreferences, machinePreferences);

  // Oculta a seção do formulário e mostra a seção de resultados
  document.getElementById('formSection').classList.add('hidden');
  document.getElementById('resultsSection').classList.remove('hidden');

  document.getElementById('userPreferencesList').innerHTML = userPreferences.map(item => `<li>${item}</li>`).join('');
  document.getElementById('machinePreferencesList').innerHTML = machinePreferences.map(item => `<li>${item}</li>`).join('');
  document.getElementById('inversionsCount').innerText = inversions;
}
