export default function Home({ lang }) {
  const t = {
    en: {
      title: "AI Shapes the Future of Sustainable Architecture",
      subtitle: "Design smarter. Build greener. With AI.",
      tryButton: "Try LCA Sheet (Free Preview)"
    },
    ko: {
      title: "AI가 지속가능 건축의 미래를 만듭니다",
      subtitle: "더 스마트하게 설계하고, 더 친환경적으로 건축하세요.",
      tryButton: "LCA 시트 미리보기 체험"
    }
  }[lang]

  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-lg mb-6">{t.subtitle}</p>
      <a href={lang === 'ko' ? '/ko/tool' : '/tool'}>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
          {t.tryButton}
        </button>
      </a>
    </section>
  )
}