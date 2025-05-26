import React, { useEffect, useState } from "react";
import { sanityClient } from "../../sanityClient";
import { urlFor } from "../../imageUrlBuilder";
import NewsCard from "./NewsCard";
import { motion } from "framer-motion";

const NewsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        body,
        publishedAt,
        "slug": slug.current,
        mainImage {
          asset-> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {
        const formattedPosts = data.map((post) => {
          // Extract first sentence from body
          let firstSentence = "";
          if (post.body && post.body[0] && post.body[0].children) {
            const firstBlock = post.body[0].children[0];
            if (firstBlock && firstBlock.text) {
              firstSentence = firstBlock.text.split(".")[0] + "...";
            }
          }

          return {
            id: post._id,
            title: post.title,
            excerpt: firstSentence,
            image:
              post.mainImage?.asset?.url || "https://picsum.photos/400/250",
            date: post.publishedAt,
            slug: post.slug,
          };
        });
        setPosts(formattedPosts);
        
        // Add structured data for blog posts
        addBlogStructuredData(formattedPosts);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  
  // Function to add structured data for blog posts
  const addBlogStructuredData = (posts) => {
    // Create JSON-LD structured data for BlogPosting
    const blogListingData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog OPG Dombaj",
      "description": "Novosti i događanja s OPG Dombaj iz Drnja. Pratite Sunčicu Dombaj i obitelj kroz sezonu uzgoja.",
      "url": "https://www.opgdombaj.hr/#news",
      "blogPost": posts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "url": `https://www.opgdombaj.hr/blog/${post.slug}`,
        "author": {
          "@type": "Person",
          "name": "OPG Dombaj"
        },
        "publisher": {
          "@type": "Organization",
          "name": "OPG Dombaj",
          "logo": {
            "@type": "ImageObject",
            "url": "/leaf.svg"
          }
        }
      }))
    };

    // Add the structured data to the page
    const existingScript = document.getElementById('blog-structured-data');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    const script = document.createElement('script');
    script.id = 'blog-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(blogListingData);
    document.head.appendChild(script);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 bg-cream">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-forest"></div>
      </div>
    );

  return (
    <section id="news" className="py-20 bg-cream" aria-label="Blog OPG Dombaj - Novosti iz Drnja">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="absolute left-0 right-0 h-0.5 bg-forest/20 top-1/2 -translate-y-1/2"></div>
          <motion.h2
            className="text-4xl font-playfair text-forest relative z-10 bg-cream inline-block px-6 mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              display: "table",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Novosti s našeg gospodarstva
          </motion.h2>
        </div>

        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                >
                  <NewsCard {...post} />
                </motion.div>
              ))}
            </div>

            {posts.length > 3 && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={() => {
                    const newsSection = document.getElementById("news");
                    if (newsSection) {
                      window.scrollTo({
                        top: newsSection.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="inline-block px-8 py-3 bg-forest text-cream rounded-lg hover:bg-leaf transition-colors duration-300 font-bold"
                >
                  Pogledaj sve novosti
                </button>
              </motion.div>
            )}
          </>
        ) : (
          <div className="text-center py-10 bg-wheat/30 rounded-lg">
            <p className="text-forest text-lg">
              Trenutno nema dostupnih novosti.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
