import React from "react";
import NewsCard from "./NewsCard";
import { motion } from "framer-motion";

const newsItems = [
    {
      id: 1,
      image: "https://picsum.photos/seed/novost1/400/250",
      title: "Sezonska berba započela",
      excerpt: "Ove godine nas očekuje bogata berba organskog povrća i voća. Saznajte što je prvo spremno za vaš stol i kako naručiti svježe proizvode.",
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/novost2/400/250",
      title: "Novi staklenik za bolju proizvodnju",
      excerpt: "Ulaganje u budućnost: naš novi staklenik omogućuje nam da uzgajamo više vrsta povrća tijekom cijele godine.",
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/novost3/400/250",
      title: "Nove sorte rajčica u ponudi",
      excerpt: "Predstavljamo pet novih sorti rajčica koje smo uključili u našu ponudu. Svaka sorta ima jedinstveni okus.",
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/novost4/400/250",
      title: "Dobili smo eko certifikat",
      excerpt: "Nakon dugotrajnog procesa, ponosno objavljujemo da smo dobili službeni eko certifikat za naše proizvode.",
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/novost5/400/250",
      title: "Pronađite nas na sajmu lokalnih proizvođača",
      excerpt: "Ovog vikenda sudjelujemo na velikom sajmu lokalnih proizvođača. Dođite nas posjetiti i kušati naše proizvode.",
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/novost6/400/250",
      title: "Pokrenuli smo blog s receptima",
      excerpt: "Na našem novom blogu dijelimo recepte i savjete za pripremu ukusnih i zdravih jela.",
    }
  ];
  

// Helper za filtriranje broja novosti po ekranu
const useResponsiveNews = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
    React.useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);
    return isMobile ? newsItems.slice(0, 3) : newsItems;
  };
  
  const NewsSection = () => {
    const filteredNews = useResponsiveNews();
  
    return (
      <section id="news" className="py-16 bg-cream mt-5">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-playfair text-forest mb-10 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Novosti
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, i) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <NewsCard {...news} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default NewsSection;
