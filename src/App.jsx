function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      fontFamily: '-apple-system, sans-serif'
    }}>
      <div>
        <h1 style={{fontSize: '48px', marginBottom: '20px'}}>
          퀸즈미라클 크리에이티브
        </h1>
        <p style={{fontSize: '24px', opacity: 0.9}}>
          곧 오픈합니다!
        </p>
        <p style={{fontSize: '18px', marginTop: '20px', opacity: 0.8}}>
          책 만들기 · 음악 만들기 · 숏츠 만들기
        </p>
      </div>
    </div>
  )
}

export default App
