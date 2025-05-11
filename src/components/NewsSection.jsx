import React, { useEffect, useState } from "react";
import { sanityClient } from "../../sanityClient";
import { urlFor } from "../../imageUrlBuilder";
import NewsCard from "./NewsCard";
import { motion } from "framer-motion";

const NewsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
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
      }`)
      .then((data) => {
        const formattedPosts = data.map(post => {
          // Extract first sentence from body
          let firstSentence = '';
          if (post.body && post.body[0] && post.body[0].children) {
            const firstBlock = post.body[0].children[0];
            if (firstBlock && firstBlock.text) {
              firstSentence = firstBlock.text.split('.')[0] + '...';
            }
          }

          return {
            id: post._id,
            title: post.title,
            excerpt: firstSentence,
            image: post.mainImage?.asset?.url || "https://picsum.photos/400/250",
            date: post.publishedAt,
            slug: post.slug
          };
        });
        setPosts(formattedPosts);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-10">Učitavanje...</div>;

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
      </div>
    </section>
  );
};

export default NewsSection;