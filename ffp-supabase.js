// ══════════════════════════════════════════════════════
// ONE SPORT — MODULE SUPABASE
// Auth sécurisée + Sync données PostgreSQL
// ══════════════════════════════════════════════════════

var FFP_SUPABASE_URL = 'https://qpabgwskavglvojhuzeq.supabase.co';
var FFP_SUPABASE_KEY = 'sb_publishable_n814zGkCNq7wnSoro8w1Zg_ln31penJ';
var FFP_DB = null;

// ── Initialisation ──────────────────────────────────
function initSupabase() {
  try {
    if (typeof supabase !== 'undefined' && supabase.createClient) {
      FFP_DB = supabase.createClient(FFP_SUPABASE_URL, FFP_SUPABASE_KEY);
      console.log('✅ Supabase connecté');
      return true;
    }
  } catch(e) { console.warn('Supabase non disponible, mode localStorage'); }
  return false;
}

// ── Auth ─────────────────────────────────────────────
// Email mapping : username → email Supabase
function toEmail(username) {
  if (!username) return '';
  username = username.trim().toLowerCase();
  // Codes parents (1001-1030) → parent format
  if (/^\d{4}$/.test(username)) return 'parent' + username + '@footfactorypro.app';
  // Slugify (coach → coach@..., julien.r → julien.r@...)
  return username.replace(/[^a-z0-9._-]/g, '') + '@footfactorypro.app';
}

async function sbLogin(username, password) {
  if (!FFP_DB) return { error: { message: 'Supabase non disponible' } };
  var email = toEmail(username);
  try {
    var res = await FFP_DB.auth.signInWithPassword({ email: email, password: password });
    if (res.error) return { error: res.error };
    // Fetch profile
    var profile = await sbGetProfile(res.data.user.id);
    return { data: { user: res.data.user, session: res.data.session, profile: profile } };
  } catch(e) { return { error: { message: e.message } }; }
}

async function sbLogout() {
  if (FFP_DB) { try { await FFP_DB.auth.signOut(); } catch(e) {} }
  try { localStorage.removeItem('ffp_session'); } catch(e) {}
  window.location.href = 'ffp-login.html';
}

async function sbGetSession() {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.auth.getSession();
    if (res.data && res.data.session) return res.data.session;
  } catch(e) {}
  return null;
}

async function sbGetProfile(userId) {
  if (!FFP_DB || !userId) return null;
  try {
    var res = await FFP_DB.from('profiles').select('*').eq('id', userId).single();
    return res.data || null;
  } catch(e) { return null; }
}

// ── Joueurs ──────────────────────────────────────────
async function sbGetJoueurs(clubId, categoryId) {
  if (!FFP_DB) return null;
  try {
    var q = FFP_DB.from('joueurs').select('*');
    if (clubId) q = q.eq('club_id', clubId);
    if (categoryId) q = q.eq('category_id', categoryId);
    q = q.eq('actif', true).order('nom');
    var res = await q;
    return res.data || [];
  } catch(e) { return null; }
}

async function sbSaveJoueur(data) {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.from('joueurs').upsert(data).select().single();
    return res.data;
  } catch(e) { return null; }
}

// ── Évaluations ──────────────────────────────────────
async function sbSaveEvaluation(eval_data) {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.from('evaluations').upsert(eval_data).select().single();
    return res.data;
  } catch(e) { return null; }
}

async function sbGetEvaluations(joueurId) {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.from('evaluations').select('*')
      .eq('joueur_id', joueurId).order('created_at', { ascending: false });
    return res.data || [];
  } catch(e) { return null; }
}

// ── Messages ─────────────────────────────────────────
async function sbSendMessage(msg) {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.from('messages').insert(msg).select().single();
    return res.data;
  } catch(e) { return null; }
}

async function sbGetMessages(userId, role, playerCode) {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.from('messages').select('*')
      .eq('club_id', await sbGetMyClubId())
      .order('created_at', { ascending: false });
    return res.data || [];
  } catch(e) { return null; }
}

async function sbMarkRead(messageId, userId) {
  if (!FFP_DB) return;
  try {
    // Append user to lu_par array
    await FFP_DB.rpc('mark_message_read', { p_message_id: messageId, p_user_id: userId });
  } catch(e) {}
}

// ── Événements ───────────────────────────────────────
async function sbGetEvents(clubId, categoryId) {
  if (!FFP_DB) return null;
  try {
    var q = FFP_DB.from('evenements').select('*');
    if (clubId) q = q.eq('club_id', clubId);
    if (categoryId) q = q.or('category_id.eq.' + categoryId + ',category_id.is.null');
    q = q.gte('date_debut', new Date().toISOString().slice(0, 10)).order('date_debut');
    var res = await q;
    return res.data || [];
  } catch(e) { return null; }
}

async function sbSaveEvent(event) {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.from('evenements').upsert(event).select().single();
    return res.data;
  } catch(e) { return null; }
}

async function sbDeleteEvent(id) {
  if (!FFP_DB) return;
  try { await FFP_DB.from('evenements').delete().eq('id', id); } catch(e) {}
}

// ── Matchs ───────────────────────────────────────────
async function sbSaveMatch(match) {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.from('matchs').upsert(match).select().single();
    return res.data;
  } catch(e) { return null; }
}

async function sbGetMatchs(clubId, categoryId) {
  if (!FFP_DB) return null;
  try {
    var res = await FFP_DB.from('matchs').select('*')
      .eq('club_id', clubId).eq('category_id', categoryId)
      .order('created_at', { ascending: false });
    return res.data || [];
  } catch(e) { return null; }
}

// ── Helpers ──────────────────────────────────────────
async function sbGetMyClubId() {
  try {
    var sess = await sbGetSession();
    if (!sess) return null;
    var profile = await sbGetProfile(sess.user.id);
    return profile ? profile.club_id : null;
  } catch(e) { return null; }
}

// ── Realtime ─────────────────────────────────────────
function sbSubscribeMessages(clubId, callback) {
  if (!FFP_DB) return null;
  try {
    return FFP_DB.channel('messages_' + clubId)
      .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'messages',
        filter: 'club_id=eq.' + clubId
      }, function(payload) { callback(payload.new); })
      .subscribe();
  } catch(e) { return null; }
}

// ── Sync localStorage → Supabase ─────────────────────
// Migre les données existantes localStorage vers Supabase
async function syncLocalToSupabase(clubId, categoryId, coachId) {
  if (!FFP_DB) return false;
  var synced = 0;

  // Sync evaluations
  try {
    var evRaw = localStorage.getItem('ffp_eval');
    if (evRaw) {
      var evData = JSON.parse(evRaw);
      for (var playerId in evData) {
        var sc = evData[playerId];
        await sbSaveEvaluation({
          joueur_id: parseInt(playerId),
          club_id: clubId,
          category_id: categoryId,
          coach_id: coachId,
          technique: sc.technique || {},
          physique: sc.physique || {},
          tactique: sc.tactique || {},
          mental: sc.mental || {},
          culture: sc.culture || {},
          score_global: sc.global || null,
          is_public: true
        });
        synced++;
      }
    }
  } catch(e) { console.warn('Sync eval error:', e); }

  // Sync events
  try {
    var evtsRaw = localStorage.getItem('ffp_events');
    if (evtsRaw) {
      var evts = JSON.parse(evtsRaw);
      for (var i = 0; i < evts.length; i++) {
        var e = evts[i];
        await sbSaveEvent({
          id: e.id,
          club_id: clubId,
          category_id: categoryId,
          type: e.type,
          titre: e.titre,
          date_debut: e.date + (e.heure ? 'T' + e.heure.replace('h', ':') + ':00' : 'T00:00:00'),
          lieu: e.lieu || null,
          description: e.description || null,
          obligatoire: e.obligatoire || false,
          is_public: true
        });
        synced++;
      }
    }
  } catch(e) { console.warn('Sync events error:', e); }

  // Sync messages
  try {
    var msgsRaw = localStorage.getItem('ffp_messages');
    if (msgsRaw) {
      var msgs = JSON.parse(msgsRaw);
      for (var j = 0; j < msgs.length; j++) {
        var m = msgs[j];
        await sbSendMessage({
          id: m.id,
          club_id: clubId,
          from_user_id: coachId,
          to_category: categoryId,
          sujet: m.subject,
          corps: m.body,
          priorite: m.priority || 'normale',
          tag: m.tag || 'général',
          lu_par: [],
          created_at: new Date(m.ts).toISOString()
        });
        synced++;
      }
    }
  } catch(e) { console.warn('Sync messages error:', e); }

  console.log('✅ Sync Supabase: ' + synced + ' entrées migrées');
  return synced;
}

// ── Audit ────────────────────────────────────────────
async function sbLog(action, detail, level) {
  if (!FFP_DB) return;
  try {
    var sess = await sbGetSession();
    if (!sess) return;
    var profile = await sbGetProfile(sess.user.id);
    await FFP_DB.from('audit_logs').insert({
      user_id: sess.user.id,
      club_id: profile ? profile.club_id : null,
      role: profile ? profile.role : null,
      action: action,
      detail: detail || '',
      level: level || 'info'
    });
  } catch(e) {}
}

// ── Auto-init ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initSupabase();
});
if (document.readyState !== 'loading') {
  initSupabase();
}
