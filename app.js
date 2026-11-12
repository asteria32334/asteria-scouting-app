const SUPABASE_URL = 'https://plsfmbknqsjgvpjoubht.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsc2ZtYmtucXNqZ3Zwam91Ymh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1ODc3NzcsImV4cCI6MjA5NjE2Mzc3N30.TLee9QqcSjvT00ouwF53ntu-K7kcY9R_BDK9Tv82aF4';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Notlar içindeki [BIOBUZZ] etiketini ayrıştırır ve saf notu döner
function parseBioBuzzNotes(rawNotes) {
  const result = {
    autoHive: 0,
    autoFlower: 0,
    teleHive: 0,
    teleFlower: 0,
    cleanNotes: rawNotes || ''
  };

  if (!rawNotes) return result;

  const regex = /\[BIOBUZZ\]\s*Otonom:\s*(\d+)\s*Hive,\s*(\d+)\s*Flower\s*\|\s*TeleOp:\s*(\d+)\s*Hive,\s*(\d+)\s*Flower\n?/i;
  const match = rawNotes.match(regex);

  if (match) {
    result.autoHive = parseInt(match[1], 10) || 0;
    result.autoFlower = parseInt(match[2], 10) || 0;
    result.teleHive = parseInt(match[3], 10) || 0;
    result.teleFlower = parseInt(match[4], 10) || 0;
    result.cleanNotes = rawNotes.replace(regex, '').trim();
  }

  return result;
}

// BioBuzz verilerini notes alanına gömülecek formata çevirir
function formatBioBuzzNotes(counts, userNotes) {
  const header = `[BIOBUZZ] Otonom: ${counts.autoHive} Hive, ${counts.autoFlower} Flower | TeleOp: ${counts.teleHive} Hive, ${counts.teleFlower} Flower`;
  return userNotes.trim() ? `${header}\n${userNotes.trim()}` : header;
}