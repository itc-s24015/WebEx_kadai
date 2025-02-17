// 「ブロスタの戦場へようこそ」をクリックすると次のページへ
document.getElementById('main-title').addEventListener('click', function() {
  window.location.href = '#next-page'; // 次のページに移動
});

// スクロールでフェードイン
window.addEventListener('scroll', function() {
  var content = document.querySelector('.content');
  var position = content.getBoundingClientRect().top;
  
  if (position < window.innerHeight) {
    content.classList.add('visible');
  }
});
