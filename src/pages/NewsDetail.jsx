import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import sanityClient from "../../sanityClient"
import BlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from '@sanity/image-url'
import { scrollToSection } from "../utils/scrollUtils"
import Navbar from "../components/Navbar"

const builder = imageUrlBuilder({
  projectId: 'd1ae6ngj',
  dataset: 'production'
})

function urlFor(source) {
  return builder.image(source)
}

const serializers = {
  types: {
    image: ({node}) => (
      <img 
        src={urlFor(node.asset).url()} 
        alt={node.alt || ' '}
        className="w-full my-4"
      />
    )
  }
}

export default function NewsDetail() {
  const [singlePost, setSinglePost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()
  const navigate = useNavigate()

  console.log("Current slug:", slug)

  useEffect(() => {
    console.log("Fetching data for slug:", slug)
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        author,
        publishedAt
      }`
      )
      .then((data) => {
        console.log("Raw data from Sanity:", data)
        if (data && data.length > 0) {
          console.log("Post body structure:", data[0].body)
          setSinglePost(data[0])
        } else {
          console.log("No post found for slug:", slug)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setIsLoading(false)
      })
  }, [slug])

  console.log("Current post state:", singlePost)
  if (singlePost && singlePost.body) {
    console.log("Body structure before render:", singlePost.body)
  }

  if (isLoading) {
    return (
      <>
        <Navbar />
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      </>
    )
  }

  if (!singlePost) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20 mt-20">
          <h2 className="text-2xl mb-4">Post nije pronađen</h2>
          <button
            onClick={() => {
              // First navigate to homepage, then scroll to news section
              sessionStorage.setItem('scrollToSection', 'news');
              navigate('/');
            }}
            className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
          >
            Povratak na blog
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <section className="px-5 xl:max-w-4xl xl:mx-auto pb-20 pt-24">
        <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-center">
          {singlePost.title}
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
          <span>OPG Dombaj</span>
          <span>•</span>
          <span>{singlePost.publishedAt ? new Date(singlePost.publishedAt).toLocaleDateString('hr-HR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }) : new Date().toLocaleDateString('hr-HR')}</span>
        </div>

        {singlePost.mainImage && singlePost.mainImage.asset && (
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            title={singlePost.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-10"
          />
        )}

        <div className="block__content mt-8 prose prose-lg max-w-none">
          <BlockContent
            blocks={singlePost.body}
            projectId="d1ae6ngj"
            dataset="production"
            serializers={serializers}
          />
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              // First navigate to homepage, then scroll to news section
              sessionStorage.setItem('scrollToSection', 'news');
              navigate('/');
            }}
            className="inline-block py-3 px-8 rounded-lg shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
          >
            Povratak na blog
          </button>
        </div>
      </div>
    </section>
    </>
  )
}