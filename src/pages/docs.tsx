import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Seo from '../components/Seo';
import Text from "@/components/custom-ui/text";
import { 
    Book, 
    Search,
    ChevronRight,
    Code,
    Settings,
    Users,
    Database,
    Shield,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const sidebarItems = [
    {
        title: "Getting Started",
        items: [
            { label: "Introduction", href: "#" },
            { label: "Quick Start Guide", href: "#" },
            { label: "Installation", href: "#" },
            { label: "Configuration", href: "#" }
        ]
    },
    {
        title: "Core Concepts",
        items: [
            { label: "Authentication", href: "#" },
            { label: "Authorization", href: "#" },
            { label: "Data Models", href: "#" },
            { label: "API Reference", href: "#" }
        ]
    },
    {
        title: "Features",
        items: [
            { label: "User Management", href: "#" },
            { label: "Team Collaboration", href: "#" },
            { label: "Analytics", href: "#" },
            { label: "Integrations", href: "#" }
        ]
    },
    {
        title: "Advanced",
        items: [
            { label: "Customization", href: "#" },
            { label: "Performance", href: "#" },
            { label: "Security", href: "#" },
            { label: "Deployment", href: "#" }
        ]
    }
];

const quickLinks = [
    {
        title: "API Reference",
        description: "Complete API documentation and examples",
        icon: <Code className="h-6 w-6" />
    },
    {
        title: "User Guide",
        description: "Detailed guides for all features",
        icon: <Book className="h-6 w-6" />
    },
    {
        title: "Configuration",
        description: "System settings and customization",
        icon: <Settings className="h-6 w-6" />
    },
    {
        title: "Team Management",
        description: "User roles and permissions",
        icon: <Users className="h-6 w-6" />
    },
    {
        title: "Database",
        description: "Data models and relationships",
        icon: <Database className="h-6 w-6" />
    },
    {
        title: "Security",
        description: "Security best practices",
        icon: <Shield className="h-6 w-6" />
    }
];

export default function Docs() {
    return (
        <>
            <Seo 
                title="Documentation | SaaSify" 
                description="Comprehensive documentation and guides for SaaSify." 
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
                                    label="Documentation" 
                                    className="text-4xl md:text-5xl font-bold text-primary mb-6" 
                                />
                                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Everything You Need to Know
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8">
                                    Comprehensive guides and documentation to help you get the most out of SaaSify.
                                </p>
                                <div className="relative max-w-2xl mx-auto">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        placeholder="Search documentation..."
                                        className="pl-12 py-6 text-lg"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-6">
                                {quickLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="text-primary p-2 bg-primary/10 rounded-lg">
                                                {link.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                                    {link.title}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {link.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Documentation Layout */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-4 gap-8">
                                {/* Sidebar */}
                                <div className="md:col-span-1">
                                    <div className="sticky top-8">
                                        <nav className="space-y-8">
                                            {sidebarItems.map((section, index) => (
                                                <div key={index}>
                                                    <h3 className="font-semibold text-foreground mb-3">
                                                        {section.title}
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {section.items.map((item, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                <a
                                                                    href={item.href}
                                                                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                                                >
                                                                    <ChevronRight className="h-4 w-4" />
                                                                    {item.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </nav>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="md:col-span-3">
                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                        <h2>Getting Started with SaaSify</h2>
                                        <p>
                                            Welcome to SaaSify! This guide will help you get up and running with our platform.
                                            We'll cover everything from installation to advanced features.
                                        </p>

                                        <h3>Installation</h3>
                                        <p>
                                            To get started with SaaSify, you'll need to:
                                        </p>
                                        <ol>
                                            <li>Create an account</li>
                                            <li>Set up your workspace</li>
                                            <li>Configure your settings</li>
                                            <li>Invite your team members</li>
                                        </ol>

                                        <h3>Quick Start</h3>
                                        <p>
                                            Here's a quick overview of the main features:
                                        </p>
                                        <ul>
                                            <li>User Management</li>
                                            <li>Team Collaboration</li>
                                            <li>Analytics Dashboard</li>
                                            <li>API Integration</li>
                                        </ul>

                                        <div className="bg-muted p-4 rounded-lg my-6">
                                            <h4 className="text-lg font-semibold mb-2">Pro Tip</h4>
                                            <p className="mb-0">
                                                Use our API to automate common tasks and integrate with your existing tools.
                                            </p>
                                        </div>

                                        <h3>Next Steps</h3>
                                        <p>
                                            Once you're familiar with the basics, check out our advanced guides for:
                                        </p>
                                        <ul>
                                            <li>Custom workflows</li>
                                            <li>Advanced analytics</li>
                                            <li>Security best practices</li>
                                            <li>Performance optimization</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Need More Help?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Our support team is here to help you with any questions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-primary hover:bg-primary/90">
                                    Contact Support
                                </Button>
                                <Button variant="outline">
                                    Join Community
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} 