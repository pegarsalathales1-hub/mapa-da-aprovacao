(async () => {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) { location.replace('/login.html'); return; }

  const { data: aluno } = await sb.from('alunos')
    .select('id, nome').eq('id', session.user.id).maybeSingle();
  if (!aluno) { await sb.auth.signOut(); location.replace('/login.html'); return; }

  window.MAPA_ACCOUNT = { id: session.user.id, role: 'user', name: aluno.nome || 'Aluno' };
  window.MAPA_LOGOUT = async () => { await sb.auth.signOut(); location.replace('/login.html'); };

  const scripts = ['data.js', 'exercises.js', 'flashcards-extra.js', 'piraquara.js', 'app.js'];
  for (const s of scripts) {
    await new Promise((ok, fail) => {
      const t = document.createElement('script');
      t.src = s; t.onload = ok; t.onerror = fail;
      document.body.appendChild(t);
    });
  }
})();