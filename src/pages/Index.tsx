import WelcomeSection from "@/components/WelcomeSection";
import SocialCard from "@/components/SocialCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <WelcomeSection />
        
        <div className="space-y-6">
          <SocialCard
            type="youtube"
            title="Canal no YouTube"
            description="Descubra diversos conteúdos gratutitos para expandir sua mente"
            link="https://youtube.com/@udevzera?si=jz25LTbAsdNdVKLR"
            delay={0.3}
          />
          
          <SocialCard
            type="instagram"
            title="Livefolio"
            description="Visite a minha empresa, a Livefolio. Se interessou por nossos serviços? Contrate a gente pelo nosso site"
            link="https://www.instagram.com/livefolio/"
            delay={0.4}
          />
          
          <SocialCard
            type="email"
            title="Parcerias"
            description="Vamos fazer uma parceria? seja nosso parceiro!"
            link="contaparanegocios30@gmail.com"
            delay={0.5}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;