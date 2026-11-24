(async () => {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) { location.replace('/login.html'); return; }

  const { data: aluno } = await sb.from('alunos')
    .select('id, nome').eq('id', session.user.id).maybeSingle();
  if (!aluno) { await sb.auth.signOut(); location.replace('/login.html'); return; }

  window.MAPA_ACCOUNT = { id: session.user.id, role: 'user', name: aluno.nome || 'Aluno' };

  window.MAPA_LOGOUT = async () => {
    await sb.auth.signOut();
    location.replace('/login.html');
  };

  // botão Sair dentro da barra superior (fica parado ao rolar)
  const sair = document.createElement('button');
  sair.textContent = 'Sair';
  sair.onclick = window.MAPA_LOGOUT;
  sair.style.cssText = 'margin-right:12px;padding:8px 14px;border:1px solid #e8c76a;border-radius:8px;background:transparent;color:#e8c76a;font-weight:700;cursor:pointer;white-space:nowrap';

  const montarSair = () => {
    const tools = document.querySelector('.top-tools');
    if (!tools) return;
    if (!sair.isConnected) tools.insertBefore(sair, tools.firstChild);
    const h = location.hash;
    sair.style.display = (h === '' || h === '#' || h === '#inicio') ? 'inline-block' : 'none';
  };

  window.addEventListener('hashchange', montarSair);

  const scripts = ['data.js', 'exercises.js', 'flashcards-extra.js', 'piraquara.js', 'app.js'];
  for (const s of scripts) {
    await new Promise((ok, fail) => {
      const t = document.createElement('script');
      t.src = s; t.onload = ok; t.onerror = fail;
      document.body.appendChild(t);
    });
  }

  montarSair();
  setTimeout(montarSair, 800);
})();