(function () {
  var repo = (document.currentScript && document.currentScript.getAttribute('data-repo')) || 'https://github.com/SMSNYDER81/freefileconverter/issues';
  var TOAST_KEY = 'fb_toast_seen';
  var EXIT_KEY = 'fb_exit_seen';

  function style(el, props) { Object.assign(el.style, props); }

  function makeToast() {
    if (localStorage.getItem(TOAST_KEY)) return;
    var t = document.createElement('div');
    t.innerHTML = '💬 <strong>Got feedback?</strong> Help us improve — <a href="' + repo + '" target="_blank" rel="noopener" style="color:#3ecfcf;text-decoration:none">open a GitHub issue</a>';
    style(t, {
      position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%) translateY(80px)',
      background: '#1c1f22', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px',
      padding: '12px 18px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
      color: '#9a9590', zIndex: '9999', boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      transition: 'transform 0.4s ease', whiteSpace: 'nowrap', cursor: 'pointer'
    });
    document.body.appendChild(t);
    setTimeout(function () { t.style.transform = 'translateX(-50%) translateY(0)'; }, 100);
    setTimeout(function () {
      t.style.transform = 'translateX(-50%) translateY(80px)';
      setTimeout(function () { t.remove(); }, 400);
    }, 5000);
    t.addEventListener('click', function () { window.open(repo, '_blank'); });
    localStorage.setItem(TOAST_KEY, '1');
  }

  function makeExitModal() {
    if (localStorage.getItem(EXIT_KEY)) return;
    var overlay = document.createElement('div');
    style(overlay, {
      position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.7)', zIndex: '10000',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
    });
    var modal = document.createElement('div');
    style(modal, {
      background: '#141618', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px',
      padding: '28px', maxWidth: '380px', width: '100%', fontFamily: "'IBM Plex Mono', monospace"
    });
    modal.innerHTML = '<div style="font-family:\'Syne\',sans-serif;font-size:17px;font-weight:700;color:#e8e4dc;margin-bottom:8px">Before you go —</div>' +
      '<div style="font-size:12px;color:#9a9590;line-height:1.7;margin-bottom:18px">Did the converter work for you? If something could be better, we genuinely want to know.</div>' +
      '<div style="display:flex;gap:8px">' +
      '<a href="' + repo + '" target="_blank" rel="noopener" style="flex:1;padding:9px;background:#3ecfcf;color:#0d0e0f;font-family:\'Syne\',sans-serif;font-weight:700;font-size:12px;text-align:center;border-radius:6px;text-decoration:none">Leave feedback</a>' +
      '<button style="padding:9px 16px;background:transparent;border:1px solid rgba(255,255,255,0.12);border-radius:6px;color:#9a9590;font-family:\'IBM Plex Mono\',monospace;font-size:12px;cursor:pointer" id="fb-dismiss">No thanks</button>' +
      '</div>';
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    document.getElementById('fb-dismiss').addEventListener('click', function () { overlay.remove(); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) overlay.remove(); });
    localStorage.setItem(EXIT_KEY, '1');
  }

  setTimeout(makeToast, 4000);

  document.addEventListener('mouseleave', function (e) {
    if (e.clientY <= 0) makeExitModal();
  });
})();
