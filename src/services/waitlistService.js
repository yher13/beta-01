// Waitlist service. Currently persists to localStorage; swap the
// implementation of joinWaitlist with a real API call (Resend /
// Mailchimp / Supabase / your own backend) when ready — callers
// won't need to change.

const STORAGE_KEY = 'beta01:waitlist';
const RATE_KEY = 'beta01:waitlist:lastSubmit';
const RATE_LIMIT_MS = 30 * 1000;

// Conservative RFC-5322-lite check. Good enough for UI validation;
// the real backend should do its own server-side check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readList() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function writeList(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

/**
 * Join the waitlist. Resolves with a discriminated result:
 *   { ok: true, duplicate: bool, count: number }
 *   { ok: false, reason: 'invalid-email' | 'rate-limit', retryInMs?: number }
 */
export async function joinWaitlist(rawEmail) {
  // Tiny simulated latency so the UI gets a real "loading" beat. Drop when wiring to a real API.
  await new Promise((r) => setTimeout(r, 350));

  const last = Number(localStorage.getItem(RATE_KEY) || 0);
  if (Date.now() - last < RATE_LIMIT_MS) {
    return {
      ok: false,
      reason: 'rate-limit',
      retryInMs: RATE_LIMIT_MS - (Date.now() - last),
    };
  }

  const email = String(rawEmail || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return { ok: false, reason: 'invalid-email' };
  }

  const list = readList();
  if (list.some((entry) => entry.email === email)) {
    return { ok: true, duplicate: true, count: list.length };
  }

  list.push({ email, joinedAt: new Date().toISOString() });
  writeList(list);
  localStorage.setItem(RATE_KEY, String(Date.now()));
  return { ok: true, duplicate: false, count: list.length };
}

export function getWaitlistCount() {
  return readList().length;
}
