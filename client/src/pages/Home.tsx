import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Instagram, Linkedin, Mail, Music, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Vibrant Afro-Futurism
 * - Bold colors: Terracota, Gold, Teal, Charcoal
 * - Asymmetric layouts with diagonal cuts
 * - Dynamic animations celebrating movement
 * - African geometric patterns as accents
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Temotio</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition">
              Sobre
            </a>
            <a href="#content" className="text-gray-700 hover:text-orange-600 transition">
              Conteúdo
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">
              Contacto
            </a>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Colaborar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357909245/TxrBZRuK2k3L64oYDUsoQ2/temotio_hero_bg-Tszw8hG8U7NAzexYAqsSkp.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-orange-100 rounded-full">
                  <span className="text-orange-600 font-semibold text-sm">Influenciador em Ascensão 🚀</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-orange-600">Temotio</span>
                  <br />
                  <span className="text-teal-600">Trendsetter</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Conteúdo autêntico de lifestyle, dança e humor. Mostrando o corre e a diversão da vida real com energia e paixão.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white gap-2">
                  Ver Conteúdo
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  Contactar
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-orange-600">1.1K+</div>
                  <p className="text-sm text-gray-600">Seguidores</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">473</div>
                  <p className="text-sm text-gray-600">Posts</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500">100%</div>
                  <p className="text-sm text-gray-600">Autêntico</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357909245/TxrBZRuK2k3L64oYDUsoQ2/temotio_lifestyle_hero-cv88CNyTVFaPjHyYytB2a5.webp"
                  alt="Temotio"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Diagonal Divider */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" style={{
          clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)"
        }}></div>

        <div className="container relative z-10 pt-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-orange-600">Quem é</span> Temotio?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Começou em Moçambique com pouco, mas com sonhos do tamanho do mundo. Cresceu entre poeira, simplicidade e muito amor. Cada passo, cada momento é uma oportunidade de criar conteúdo que inspira e diverte.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-teal-600">"Só vivendo… sem roteiro, sem pressão. Se for pra ser, vai ser com paz."</span>
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              {[
                { icon: Music, title: "Dança", desc: "Conteúdo dinâmico e energético" },
                { icon: Zap, title: "Lifestyle", desc: "Momentos autênticos da vida real" },
                { icon: ArrowRight, title: "Humor", desc: "Risadas e bom astral garantido" }
              ].map((feature, idx) => (
                <Card
                  key={idx}
                  className="p-6 border-2 border-gray-200 hover:border-orange-600 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${
                    hoveredCard === idx
                      ? "bg-orange-600 text-white"
                      : "bg-orange-100 text-orange-600"
                  }`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section id="content" className="py-20 bg-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-orange-600">Conteúdo</span> em Destaque
            </h2>
            <p className="text-lg text-gray-600">Veja a diversidade e energia do meu trabalho</p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357909245/TxrBZRuK2k3L64oYDUsoQ2/temotio_social_showcase-MgcygV2dJfMrMmbyxNELyu.webp"
                alt="Content Showcase"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Momentos Autênticos</h3>
                  <p>Conteúdo que celebra a vida real</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                <h3 className="text-2xl font-bold mb-3 text-orange-600">Lifestyle</h3>
                <p className="text-gray-700">Mostrando o dia a dia, os desafios e as alegrias de viver com autenticidade e paixão.</p>
              </Card>
              <Card className="p-6 border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-white">
                <h3 className="text-2xl font-bold mb-3 text-teal-600">Dança & Movimento</h3>
                <p className="text-gray-700">Conteúdo dinâmico que celebra a energia, o movimento e a expressão corporal.</p>
              </Card>
              <Card className="p-6 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Humor & Diversão</h3>
                <p className="text-gray-700">Risadas, momentos engraçados e bom astral para começar o dia com energia.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-teal-600 text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Siga-me nas Redes</h2>
          <p className="text-lg opacity-90">Acompanhe o conteúdo em tempo real</p>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://instagram.com/timo_oficial_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://threads.net/@timo_oficial_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container max-w-2xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Vamos <span className="text-orange-600">Colaborar</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Interessado em parcerias, colaborações ou simplesmente quer conversar? Entre em contacto!
          </p>

          <div className="space-y-4 pt-8">
            <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white gap-2">
              <Mail className="w-5 h-5" />
              Enviar Email
            </Button>
            <p className="text-sm text-gray-600">
              Ou envie uma mensagem direto no Instagram: <span className="font-semibold">@timo_oficial_</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Temotio</h3>
              <p className="text-gray-400">Influenciador em ascensão | Lifestyle, Dança & Humor</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#content" className="hover:text-white transition">Conteúdo</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Redes Sociais</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://instagram.com/timo_oficial_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
                <li><a href="https://threads.net/@timo_oficial_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Threads</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Temotio. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">Criado com ❤️ e muita energia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
