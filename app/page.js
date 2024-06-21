import Navegation from './components/navegation.js'
import Sidebar from './components/sidebar.js'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <Navegation></Navegation>
      <Sidebar></Sidebar>
      
    </main>
  );
}
