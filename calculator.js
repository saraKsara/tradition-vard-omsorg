
const fmt = n => Math.round(n).toLocaleString('sv-SE') + ' kr';
const weeksPerMonth = 52 / 12;
function value(id){ return Math.max(0, Number(document.getElementById(id).value || 0)); }
function update(){
  const home = value('homeHours');
  const service = value('serviceHours');
  const used = Math.min(75000, value('usedRut'));
  const verifiedRaw = document.getElementById('verifiedSpace').value;
  const available = verifiedRaw === '' ? Math.max(0, 75000-used) : Math.min(75000, value('verifiedSpace'));
  const monthlyAfterRut = home * 300 * weeksPerMonth;
  const monthlyService = service * 599 * weeksPerMonth;
  const rutMonthly = home * 299 * weeksPerMonth;
  const rutAnnual = rutMonthly * 12;
  const rutApplied = Math.min(rutAnnual, available);
  const monthlyAdjustment = Math.max(0, rutAnnual - available) / 12;
  const total = monthlyAfterRut + monthlyService + monthlyAdjustment;
  document.getElementById('monthlyTotal').textContent = fmt(total);
  document.getElementById('weeklyHours').textContent = (home+service).toLocaleString('sv-SE',{minimumFractionDigits:1,maximumFractionDigits:1});
  document.getElementById('rutYear').textContent = fmt(rutApplied);
  document.getElementById('rutLeft').textContent = fmt(Math.max(0, available-rutApplied));
  const status = document.getElementById('calcStatus');
  if(home+service === 0){ status.textContent='Skriv in timmar per vecka.'; status.className='calc-status ok'; }
  else if(rutAnnual > available){ status.textContent='RUT-utrymmet räcker inte för hela året. Kalkylen lägger därför tillbaka den del som inte ryms.'; status.className='calc-status warn'; }
  else { status.textContent='Kalkylen ryms inom angivet RUT-utrymme.'; status.className='calc-status ok'; }
}
document.querySelectorAll('input').forEach(el => el.addEventListener('input', update));
document.querySelectorAll('[data-target]').forEach(btn => btn.addEventListener('click', () => {
  const input = document.getElementById(btn.dataset.target);
  input.value = Math.max(0, Number(input.value || 0) + Number(btn.dataset.delta));
  update();
}));
update();
