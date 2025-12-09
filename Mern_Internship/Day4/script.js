
/*
  script.js
  - DEFAULT: tries to fetch from MOCKAPI_URL.
  - FALLBACK: loads assets/plans.json (so demo works offline).
*/
const MOCKAPI_URL = 'https://mockapi.io/api/v1/plans'; // <-- replace with your MockAPI endpoint
async function fetchPlans(typeFilter='prepaid') {
  const loading = document.getElementById('loading');
  const plansGrid = document.getElementById('plansGrid');
  if (!loading || !plansGrid) return;
  loading.textContent = 'Loading plans...';
  plansGrid.innerHTML = '';
  try {
    const res = await fetch(MOCKAPI_URL);
    if (!res.ok) throw new Error('Network response not ok');
    const data = await res.json();
    renderPlans(data.filter(p=>p.type===typeFilter));
  } catch (err) {
    // fallback to local file
    try {
      const res2 = await fetch('assets/plans.json');
      const data2 = await res2.json();
      renderPlans(data2.filter(p=>p.type===typeFilter));
      loading.textContent = 'Showing local demo plans (fallback)';
    } catch(e) {
      loading.textContent = 'Failed to load plans.';
    }
  }
}

function renderPlans(plans) {
  const plansGrid = document.getElementById('plansGrid');
  const loading = document.getElementById('loading');
  plansGrid.innerHTML = '';
  if (!plans || plans.length===0) {
    loading.textContent = 'No plans found for selected type.';
    return;
  }
  loading.textContent = '';
  plans.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded shadow';
    card.innerHTML = `
      <h3 class="font-semibold text-lg">₹${p.price} <span class="text-sm font-normal"> / ${p.validity}</span></h3>
      <p class="text-sm text-gray-600">${p.data} • ${p.description}</p>
      <div class="mt-3 flex justify-between items-center">
        <span class="text-sm text-gray-500">Type: ${p.type}</span>
        <button class="px-3 py-1 bg-blue-600 text-white rounded select-plan" data-id="${p.id}" data-price="${p.price}" data-desc="${p.description}" data-validity="${p.validity}" data-data="${p.data}">Select</button>
      </div>
    `;
    plansGrid.appendChild(card);
  });
  // attach listeners
  document.querySelectorAll('.select-plan').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const el = e.currentTarget;
      const plan = {
        id: el.dataset.id,
        price: el.dataset.price,
        description: el.dataset.desc,
        validity: el.dataset.validity,
        data: el.dataset.data
      };
      showSelectedPlan(plan);
    });
  });
}

function showSelectedPlan(plan) {
  const sel = document.getElementById('selectedPlan');
  const details = document.getElementById('selectedDetails');
  const proceedBtn = document.getElementById('proceedBtn');
  details.innerHTML = `
    <p class="text-sm">Plan: ${plan.description}</p>
    <p class="text-sm">Data: ${plan.data}</p>
    <p class="text-sm">Validity: ${plan.validity}</p>
    <p class="text-sm font-semibold mt-2">Total: ₹${plan.price}</p>
  `;
  proceedBtn.href = 'payment.html?planId=' + encodeURIComponent(plan.id) + '&amount=' + encodeURIComponent(plan.price) + '&desc=' + encodeURIComponent(plan.description);
  sel.classList.remove('hidden');
}

// Login / Signup handlers (very simple demo using localStorage)
function handleSignup(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const users = JSON.parse(localStorage.getItem('users')||'{}');
  if (users[email]) { alert('Email already registered'); return false; }
  users[email] = {name, email, password};
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('loggedIn', email);
  window.location = 'dashboard.html';
  return false;
}
function handleLogin(e){
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const users = JSON.parse(localStorage.getItem('users')||'{}');
  if (!users[email] || users[email].password !== password) { alert('Invalid credentials'); return false; }
  localStorage.setItem('loggedIn', email);
  window.location = 'dashboard.html';
  return false;
}

// On recharge page, capture mobile info and go to plans with query params
function gotoPlans(e){
  e.preventDefault();
  const mobile = document.getElementById('mobileNumber').value.trim();
  const operator = document.getElementById('operator').value;
  const type = document.getElementById('rechargeType').value;
  if (!/^[0-9]{10}$/.test(mobile)) { alert('Enter a valid 10-digit mobile number'); return false; }
  const params = new URLSearchParams({mobile, operator, type});
  window.location = 'plans.html?' + params.toString();
  return false;
}

// When on plans page, auto fetch plans based on query param
function initPlansPage(){
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type') || 'prepaid';
  fetchPlans(type);
}

// Payment page: read selection from query and show summary
function initPaymentPage(){
  const params = new URLSearchParams(window.location.search);
  const amount = params.get('amount') || '0';
  const desc = params.get('desc') || '';
  const summary = document.getElementById('paymentSummary');
  summary.innerHTML = `<p class="font-semibold">${desc}</p><p class="mt-1">Amount: ₹${amount}</p>`;
}

// Handle simulated payment
function handlePayment(e){
  e.preventDefault();
  // very simple validation
  const card = document.getElementById('cardNumber').value.replace(/\s+/g,'');
  if (!/^\d{16}$/.test(card)) { alert('Enter valid 16-digit card'); return false; }
  // simulate success: store transaction in localStorage
  const params = new URLSearchParams(window.location.search);
  const planId = params.get('planId') || 'local';
  const amount = params.get('amount') || '0';
  const desc = params.get('desc') || 'Plan';
  const tx = {id: 'TX'+Date.now(), planId, amount, desc, date: new Date().toISOString()};
  const history = JSON.parse(localStorage.getItem('history')||'[]');
  history.unshift(tx);
  localStorage.setItem('history', JSON.stringify(history));
  // redirect to confirmation with tx id
  window.location = 'confirmation.html?tx=' + encodeURIComponent(tx.id);
  return false;
}

// Confirmation page init
function initConfirmationPage(){
  const params = new URLSearchParams(window.location.search);
  const tx = params.get('tx');
  document.getElementById('txid').textContent = tx || 'N/A';
  const msg = document.getElementById('confirmMessage');
  msg.textContent = 'Your recharge was successful!';
}

// Dashboard init: show user and history
function initDashboard(){
  const email = localStorage.getItem('loggedIn');
  if (email) {
    const users = JSON.parse(localStorage.getItem('users')||'{}');
    const user = users[email];
    document.getElementById('accEmail').textContent = 'Email: ' + (user?user.email:email);
  }
  const history = JSON.parse(localStorage.getItem('history')||'[]');
  const list = document.getElementById('historyList');
  if (!list) return;
  if (history.length===0) {
    list.innerHTML = '<p class="text-sm text-gray-500">No recharges yet.</p>';
    return;
  }
  list.innerHTML = '';
  history.forEach(h=>{
    const el = document.createElement('div');
    el.className = 'p-3 bg-white border rounded';
    el.innerHTML = `<div class="flex justify-between"><div><div class="font-semibold">₹${h.amount}</div><div class="text-sm text-gray-600">${h.desc}</div></div><div class="text-xs text-gray-500">${new Date(h.date).toLocaleString()}</div></div>`;
    list.appendChild(el);
  });
}

// Simple router: call init functions if page contains certain elements
document.addEventListener('DOMContentLoaded', ()=>{
  if (document.getElementById('plansGrid')) initPlansPage();
  if (document.getElementById('paymentSummary')) initPaymentPage();
  if (document.getElementById('confirmBox')) initConfirmationPage();
  if (document.getElementById('historyList')) initDashboard();
});
