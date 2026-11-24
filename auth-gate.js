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

  // botão Sair fixo no canto inferior direito
  const sair = document.createElement('button');
  sair.textContent = 'Sair';
  sair.onclick = window.MAPA_LOGOUT;
  sair.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:9999;padding:8px 14px;border:0;border-radius:8px;background:#e8c76a;color:#0e263f;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.3)';
  document.body.appendChild(sair);

  const scripts = ['data.js', 'exercises.js', 'flashcards-extra.js', 'piraquara.js', 'app.js'];
  for (const s of scripts) {
    await new Promise((ok, fail) => {
      const t = document.createElement('script');
      t.src = s; t.onload = ok; t.onerror = fail;
      document.body.appendChild(t);
    });
  }
})();