import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Seo from '../components/Seo';
import Text from "@/components/custom-ui/text";
import { 
    Calendar, 
    User, 
    Tag,
    ArrowRight,
    Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
    "All",
    "Product Updates",
    "Tutorials",
    "Case Studies",
    "Industry News",
    "Best Practices"
];

const articles = [
    {
        title: "10 Ways to Optimize Your SaaS Business",
        excerpt: "Learn the best practices for growing and optimizing your SaaS business in today's competitive market.",
        author: "Sarah Johnson",
        date: "Mar 15, 2024",
        category: "Best Practices",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "The Future of Cloud Computing",
        excerpt: "Explore the latest trends and innovations shaping the future of cloud computing and SaaS solutions.",
        author: "Michael Chen",
        date: "Mar 12, 2024",
        category: "Industry News",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Getting Started with SaaSify",
        excerpt: "A comprehensive guide to help you get started with SaaSify and make the most of its features.",
        author: "Emily Rodriguez",
        date: "Mar 10, 2024",
        category: "Tutorials",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "How Company X Increased Revenue by 200%",
        excerpt: "A detailed case study of how Company X leveraged SaaSify to achieve remarkable growth.",
        author: "David Wilson",
        date: "Mar 8, 2024",
        category: "Case Studies",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

export default function Blog() {
    return (
        <>
            <Seo 
                title="Blog | SaaSify" 
                description="Latest insights, tutorials, and updates from the SaaSify team." 
            />
            
            <div className="min-h-screen bg-background">
                {/* Header */}
                <section className="pt-20 pb-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Text 
                                    label="Blog" 
                                    className="text-4xl md:text-5xl font-bold text-primary mb-6" 
                                />
                                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Latest Insights & Updates
                                </h1>
                                <p className="text-xl text-muted-foreground">
                                    Stay up to date with the latest news, tutorials, and best practices in the SaaS industry.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Search and Categories */}
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
                                <div className="flex gap-2 flex-wrap">
                                    {categories.map((category, index) => (
                                        <Button
                                            key={index}
                                            variant={index === 0 ? "default" : "outline"}
                                            className="rounded-full"
                                        >
                                            {category}
                                        </Button>
                                    ))}
                                </div>
                                <div className="relative w-full md:w-64">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search articles..."
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                {articles.map((article, index) => (
                                    <motion.article
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-card rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                                    >
                                        <div className="aspect-video relative">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                                <div className="flex items-center gap-1">
                                                    <User className="h-4 w-4" />
                                                    {article.author}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {article.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Tag className="h-4 w-4" />
                                                    {article.readTime}
                                                </div>
                                            </div>
                                            <h2 className="text-xl font-semibold text-foreground mb-2">
                                                {article.title}
                                            </h2>
                                            <p className="text-muted-foreground mb-4">
                                                {article.excerpt}
                                            </p>
                                            <Button variant="link" className="p-0 h-auto">
                                                Read More
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-12 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Get the latest articles and updates delivered straight to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="max-w-md"
                                />
                                <Button className="bg-primary hover:bg-primary/90">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} 