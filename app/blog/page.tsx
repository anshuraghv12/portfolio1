"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "Getting Started with DevOps: A Beginner's Guide",
    excerpt: "Learn the fundamentals of DevOps practices and how they can transform your development workflow.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "DevOps",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices for structuring and optimizing React applications for better performance and maintainability.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "React",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cloud Computing Fundamentals",
    excerpt: "Understanding the basics of cloud computing and how to leverage cloud services for modern applications.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "Cloud",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Database Design Best Practices",
    excerpt: "Essential principles for designing efficient and scalable database schemas.",
    date: "Coming Soon",
    readTime: "7 min read",
    category: "Database",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = ["All", "DevOps", "React", "Cloud", "Database", "Programming"]

function BlogCard({ post, index }: { post: (typeof blogPosts)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-effect rounded-xl overflow-hidden hover-lift cursor-pointer hover-card group relative"
      whileHover={{ scale: 1.02, rotateY: 2 }}
    >
      {/* Neon corner lines */}
      <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-transparent"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent"
          animate={{ height: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <motion.div
          className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-amber-400 to-transparent"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-amber-400 to-transparent"
          animate={{ height: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.8 }}
        />
      </div>

      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={300}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <motion.span
            className="px-3 py-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-full text-sm font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {post.category}
          </motion.span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2 group-hover:scale-105 transition-transform duration-300">
          {post.title}
        </h3>

        <p className="text-gray-600 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
          <motion.button
            className="flex items-center gap-1 text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
            whileHover={{ x: 5 }}
          >
            Read More
            <ArrowRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  return (
    <div className="min-h-screen relative pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Blog</h1>
            <motion.div
              className="glass-effect-strong px-6 py-3 rounded-full inline-block hover-card group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl text-gray-600 max-w-2xl mx-auto group-hover:text-amber-600 transition-colors duration-300">
                Thoughts, tutorials, and insights on software development, DevOps, and technology
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="glass-effect p-2 rounded-full hover-card group cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer hover:scale-105 ${
                      category === "All"
                        ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-white"
                        : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    }`}
                    whileHover={{ y: -2 }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 },
                    }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect p-8 rounded-xl text-center hover-card group cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-yellow-100/30 to-amber-100/30 opacity-0 group-hover:opacity-100 rounded-xl"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:scale-105 transition-transform duration-300">
                More Content Coming Soon!
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto group-hover:text-gray-700 transition-colors duration-300">
                I'm currently working on creating valuable content about software development, DevOps practices, and
                cloud technologies. Stay tuned for regular updates and in-depth tutorials that will help you in your
                development journey.
              </p>
              <div className="mt-6">
                <motion.button
                  className="cursor-pointer glass-effect px-6 py-3 rounded-full hover-lift text-amber-600 font-semibold border border-amber-200 hover:border-amber-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe for Updates
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-effect p-8 rounded-xl hover-card group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
          >
            {/* Corner neon effects */}
            <div className="absolute top-2 left-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-amber-400 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-amber-400 animate-pulse"></div>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-amber-400 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-full bg-amber-400 animate-pulse"></div>
            </div>

            <div className="text-center space-y-4 relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 group-hover:scale-105 transition-transform duration-300">
                Stay Updated
              </h2>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Get notified when I publish new articles and tutorials
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent hover:border-amber-300 transition-colors duration-300"
                />
                <motion.button
                  className="cursor-pointer bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-6 py-3 rounded-full hover-lift font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
