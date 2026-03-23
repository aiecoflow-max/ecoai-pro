export default function Layout({ isKorean, onToggleLang, children }) {
  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">EcoFlow</h1>
        <div>
          <button onClick={onToggleLang} className="text-sm px-4 py-1 rounded hover:underline">
            {isKorean ? 'English' : '한국어'}
          </button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="text-center p-4 text-sm opacity-60">© 2025 EcoFlow AI</footer>
    </div>
  )
}