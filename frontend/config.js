// 백엔드 주소
//  - 내 컴퓨터(localhost)에서 열면 → 내 컴퓨터의 FastAPI (127.0.0.1:8000)
//  - 인터넷(Vercel 등)에서 열면   → Railway 서버
var LOCAL_HOSTS = ["localhost", "127.0.0.1", ""];
window.API_URL = LOCAL_HOSTS.indexOf(location.hostname) >= 0
  ? "http://127.0.0.1:8000"
  : "https://web-production-7130f.up.railway.app";
