export default function Tool() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">EcoFlow Pro — LCA Tool</h2>
      <iframe 
        src="https://ecoflow-react-complete.vercel.app"
        width="100%" 
        height="1000px" 
        frameBorder="0" 
        style={{ border: 'none' }}
        title="EcoFlow Tool"
      />
    </section>
  )
}