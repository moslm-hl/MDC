/* src/app.ts ---------------------------------------------------------------
/**
 * Simple SPA router for the MDC educational platform.
 * It builds a floating navigation bar, loads page fragments from ./pages/*.html
 * and injects them into the #content container with a fade animation.
 */

export function initApp() {
  // Build navigation bar
  const nav = document.createElement('nav');
  const links = [
    { hash: '#/home', label: 'Home' },
    { hash: '#/chapter1', label: 'Chapter 1 – Propriétés' },
    { hash: '#/chapter2', label: 'Chapter 2 – Granulats' },
    { hash: '#/chapter3', label: 'Chapter 3 – Liants' },
    { hash: '#/chapter4', label: 'Chapter 4 – Béton' },
    { hash: '#/simulations', label: 'Simulations' },
    { hash: '#/explorer', label: 'Explorer' },
    { hash: '#/quiz', label: 'Quiz' }
  ];
  links.forEach(l => {
    const a = document.createElement('a');
    a.href = l.hash;
    a.textContent = l.label;
    nav.appendChild(a);
  });
  document.body.appendChild(nav);

  // Main content container
  const container = document.createElement('div');
  container.id = 'content';
  container.className = 'container';
  document.body.appendChild(container);

  // Router – load page on hash change
  const loadPage = async () => {
    const hash = location.hash.replace('#', '') || '/';
    let page = hash.substring(1); // remove leading slash
    if (page === '') page = 'home';
    // Map to html file name
    const path = `./pages/${page}.html`;
    try {
      const resp = await fetch(path);
      const html = await resp.text();
      // Add fade‑in animation
      container.classList.remove('page-enter-active');
      container.innerHTML = html;
      container.classList.add('page-enter');
      requestAnimationFrame(() => {
        container.classList.add('page-enter-active');
        container.classList.remove('page-enter');
        
        // Render math equations after content is loaded
        if ((window as any).renderMathInElement) {
            (window as any).renderMathInElement(container, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ]
            });
        }
        
        // Initialize page specific simulators
        initSimulations(page);
      });
    } catch (e) {
      container.innerHTML = `<div class="card"><h2>Page not found</h2><p>${e}</p></div>`;
    }
  };

  window.addEventListener('hashchange', loadPage);
  loadPage(); // initial load
}

function initSimulations(page: string) {
  if (page === 'chapter1') {
    const msInput = document.getElementById('sim-ms') as HTMLInputElement;
    const vtInput = document.getElementById('sim-vt') as HTMLInputElement;
    const vvInput = document.getElementById('sim-vv') as HTMLInputElement;
    
    const updateC1 = () => {
      if (!msInput || !vtInput || !vvInput) return;
      const ms = parseFloat(msInput.value);
      const vt = parseFloat(vtInput.value);
      const vv = parseFloat(vvInput.value);
      if(isNaN(ms) || isNaN(vt) || isNaN(vv) || vt===0) return;
      
      const vs = vt - vv;
      const rho_app = ms / vt;
      const rho_s = vs > 0 ? ms / vs : 0;
      const p = (vv / vt) * 100;
      const c = (vs / vt) * 100;
      
      const elRhoApp = document.getElementById('res-rho-app');
      const elRhoS = document.getElementById('res-rho-s');
      const elP = document.getElementById('res-p');
      const elC = document.getElementById('res-c');
      
      if(elRhoApp) elRhoApp.textContent = rho_app.toFixed(0);
      if(elRhoS) elRhoS.textContent = rho_s.toFixed(0);
      if(elP) elP.textContent = p.toFixed(1);
      if(elC) elC.textContent = c.toFixed(1);
    };
    
    [msInput, vtInput, vvInput].forEach(el => el?.addEventListener('input', updateC1));
    updateC1();
  } else if (page === 'chapter2') {
    const updateC2 = () => {
       const getVal = (id: string) => parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
       const t4 = getVal('sim-tamis-4');
       const t2 = getVal('sim-tamis-2');
       const t1 = getVal('sim-tamis-1');
       const t05 = getVal('sim-tamis-05');
       const t025 = getVal('sim-tamis-025');
       const t0125 = getVal('sim-tamis-0125');
       const fond = getVal('sim-tamis-fond');
       
       const total = t4 + t2 + t1 + t05 + t025 + t0125 + fond;
       if(total === 0) return;
       
       const r4 = (t4/total)*100;
       const r2 = r4 + (t2/total)*100;
       const r1 = r2 + (t1/total)*100;
       const r05 = r1 + (t05/total)*100;
       const r025 = r05 + (t025/total)*100;
       const r0125 = r025 + (t0125/total)*100;
       
       const mf = (r4 + r2 + r1 + r05 + r025 + r0125) / 100;
       const resMf = document.getElementById('res-mf');
       if(resMf) resMf.textContent = mf.toFixed(2);
       
       let status = "Sable fin";
       if (mf > 2.8) status = "Sable grossier";
       else if (mf >= 2.2) status = "Sable optimal";
       const resStatus = document.getElementById('res-mf-status');
       if(resStatus) resStatus.textContent = status;
       
       const chart = document.getElementById('granulo-chart');
       if(chart) {
         const passings = [100 - r4, 100 - r2, 100 - r1, 100 - r05, 100 - r025, 100 - r0125, 0];
         chart.innerHTML = passings.map((p, i) => `
           <div style="flex:1; background: var(--c-accent); height: ${Math.max(1, p)}%; opacity: 0.8; transition: height 0.3s; position: relative;" title="Tamisat ${p.toFixed(1)}%">
             <span style="position:absolute; bottom: -20px; font-size: 10px; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,0.7);">${['4','2','1','0.5','0.25','0.125','0'][i]}</span>
           </div>
         `).join('');
       }
    };
    ['sim-tamis-4', 'sim-tamis-2', 'sim-tamis-1', 'sim-tamis-05', 'sim-tamis-025', 'sim-tamis-0125', 'sim-tamis-fond']
      .forEach(id => document.getElementById(id)?.addEventListener('input', updateC2));
    updateC2();
  } else if (page === 'chapter3') {
     const updateC3 = () => {
       const dosageEl = document.getElementById('sim-cim-dosage') as HTMLInputElement;
       const typeEl = document.getElementById('sim-cim-type') as HTMLSelectElement;
       if(!dosageEl || !typeEl) return;
       const dosage = parseFloat(dosageEl.value) || 0;
       const heatCoeff = parseFloat(typeEl.value) || 0;
       const deltaT = (dosage * heatCoeff) / 2400;
       const res = document.getElementById('res-delta-t');
       if(res) res.textContent = deltaT.toFixed(1);
     };
     document.getElementById('sim-cim-dosage')?.addEventListener('input', updateC3);
     document.getElementById('sim-cim-type')?.addEventListener('change', updateC3);
     updateC3();
  } else if (page === 'chapter4') {
     const updateC4 = () => {
       const cEl = document.getElementById('sim-beton-c') as HTMLInputElement;
       const eEl = document.getElementById('sim-beton-e') as HTMLInputElement;
       const fccEl = document.getElementById('sim-beton-fcc') as HTMLInputElement;
       if(!cEl || !eEl || !fccEl) return;
       const c = parseFloat(cEl.value) || 0;
       const e = parseFloat(eEl.value) || 0;
       const fcc = parseFloat(fccEl.value) || 0;
       if(e === 0 || c === 0) return;
       
       const ec = e/c;
       const resEc = document.getElementById('res-ec-ratio');
       if(resEc) resEc.textContent = ec.toFixed(2);
       
       const vc = c / 3.1;
       const ve = e;
       const k = 4.9;
       const feret = k * fcc * Math.pow(vc / (vc + ve), 2);
       const resFc28 = document.getElementById('res-fc28');
       if(resFc28) resFc28.textContent = feret.toFixed(1);
     };
     document.getElementById('sim-beton-c')?.addEventListener('input', updateC4);
     document.getElementById('sim-beton-e')?.addEventListener('input', updateC4);
     document.getElementById('sim-beton-fcc')?.addEventListener('input', updateC4);
     updateC4();
  }
}

/* End of src/app.ts */
