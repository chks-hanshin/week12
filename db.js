// Supabase 연결 설정 (공개 키만 사용)
const SUPABASE_URL = 'https://tfybwmiomhfdazupwpbd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_r3T8EQWIB1bokEOchrtcQA_3l7_DUKh';

// 연결 변수 이름을 db 로 생성
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 페이지가 열리면 shop_products 의 상품 수를 세어 콘솔에 출력
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const { count, error } = await db
      .from('shop_products')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error(error.message);
      return;
    }

    console.log(`연결 성공: 상품 ${count}개`);
  } catch (err) {
    console.error(err.message || err);
  }
});
