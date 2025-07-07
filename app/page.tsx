"use client";

import {
  Mail,
  Github,
  Linkedin,
  Download,
  ArrowRight,
  Code,
  Cloud,
  Server,
  Rocket,
  Globe,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  url: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    idea: ''
  });

  const handleCardToggle = () => {
    setCardVisible(!isCardVisible);
  };
  const resumePath = "/assets/Resume.pdf";

  const handleViewResume = (): void => {
    window.open(resumePath, "_blank");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.idea);
  
      const response = await fetch("https://formspree.io/f/mnnvyrrp", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (!response.ok) throw new Error('Failed to send');
  
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });
  
      setFormData({ email: '', idea: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gradient-to-b from-background to-muted">
        {/* Hero Section */}
        <section className="container px-4 py-24 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="rounded-full bg-primary/10 p-4 backdrop-blur-sm">
              <img
                src="/assets/profile.jpeg"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                MERN Stack & DevOps Engineer
              </h1>
              <p className="text-muted-foreground text-lg">
                Building scalable applications and streamlining deployment processes.
                Open to freelance projects and work.
              </p>
            </div>
            <div className="flex gap-4">
              <Button onClick={() => (window.location.href = "mailto:brijeshkori22@gmail.com")}>
                Contact
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <a href={resumePath} download="Resume.pdf">
                <Button variant="outline" onClick={handleViewResume}>
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Brijesh-09/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/brijesh-kori-049a2b203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container px-4 pb-24 mx-auto">
          <Tabs defaultValue="projects" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="mt-8 grid gap-6 sm:grid-cols-2">
              <ProjectCard
                title="EmSocial"
                description="EmSocial is an AI-powered web app that lets you search posts across Instagram, YouTube, and Twitter by keyword. You can specify how many posts to fetch, and the app performs sentiment and engagement analysis using Google's Gemini API"
                tags={["MERN", "Social Media", "Gemini", "Sentimentanalysis", "MONGO"]}
                githubUrl="https://github.com/Brijesh-09/emsocial"
              />
              <ProjectCard
                title="ProManim"
                description="Promanim — AI-powered Code-to-Video Generation using Manim"
                tags={["AI", "AWS", "REDIS", "Postgress", "System Design"]}
                githubUrl="https://github.com/Brijesh-09/Manim"
              />
              <ProjectCard
                title="Khelo-Full Stack Application"
                description="Khelo to discover local sports events, connect with fellow athletes, and make every game more exciting."
                tags={["MongoDB", "Express", "React", "Node.js", "K8s"]}
                liveUrl="https://khel-fron-eta.vercel.app/"
                githubUrl="https://github.com/Brijesh-09/khelo"
              />
              <ProjectCard
                title="Streaky"
                description="A To-do Application that helps users stay consistent"
                tags={["Express", "React", "Prisma", "Docker"]}
                liveUrl="https://streakyyy.vercel.app/"
                githubUrl="https://github.com/Brijesh-09/streaky"
              />
              <ProjectCard
                title="Infrastructure Provisioning and Deployment Solution"
                description="Utilized Terraform to provision servers and deploy features, optimizing infrastructure efficiency."
                tags={["Terraform", "AWS", "IaC"]}
                githubUrl="https://github.com/Brijesh-09?tab=repositories"
              />
              <ProjectCard
                title="Jenkins Autoscaling Setup"
                description="Configured Jenkins on an AWS Autoscaling group with an Application Load Balancer and EFS filesystem, enhancing scalability and data management."
                tags={["Jenkins", "AWS", "EFS", "Autoscaling"]}
                githubUrl="https://github.com/Brijesh-09?tab=repositories"
              />
            </TabsContent>
            <TabsContent value="experience" className="mt-8 space-y-6">
              <ExperienceCard
                title="DevOps Engineer"
                company="EveryMedia"
                period="2024 - Present"
                description="Leading cloud infrastructure and deployment automation initiatives"
              />
              <ExperienceCard
                title="Cloud Infra Associate"
                company="Dronapay"
                period="2024 - 2024"
                description="Managed multi-cloud infrastructure using AWS, Terraform, GitOps (Jenkins, ArgoCD), Grafana monitoring, automated backups with Bash, and optimized scalability, reliability, and performance."
              />
              <ExperienceCard
                title="DevOps Intern"
                company="TravStack"
                period="2022"
                description="Reduced deployment downtime through Blue-Green deployment and optimized Kubernetes strategies, improved scalability with microservices migration, and cut deployment cycle time via a CI/CD pipeline using GitHub Actions, Jenkins, and AWS ECS."
              />
            </TabsContent>
            <TabsContent value="blog" className="mt-8 grid gap-6 sm:grid-cols-2">
            <BlogCard
                title="Deploying a Monorepo Application via Docker Containers on an EC2 Server with CI/CD using GitHub Actions"
                date="Feb 26, 2025"
                description="n this blog, we'll walk through the entire process, from setting up an EC2 instance, containerizing the application, and deploying it using Docker, to automating the CI/CD pipeline with GitHub Actions."
                url="https://brijeshkori.hashnode.dev/deploying-a-monorepo-application-via-docker-containers-on-an-ec2-server-with-cicd-using-github-actions"
              />
              
              <BlogCard
                title="Auto Scaling in Kubernetes"
                date="Dec 19, 2022"
                description="Autoscaling pods in Kubernetes and their types"
                url="https://brijeshkori.hashnode.dev/auto-scaling-in-kubernetus"
              />
              <BlogCard
                title="A Beginner's Guide to Optimizing Container Reliability in Kubernetes"
                date="March 9, 2024"
                description="When things go wrong with your containerized applications, it's important to know how to troubleshoot effectively."
                url="https://brijeshkori.hashnode.dev/a-beginners-guide-to-optimizing-container-reliability-in-kubernetes"
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Services Section */}
        <section className="container px-4 py-16 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert solutions for your technical needs. Available for freelance projects,
              consulting, and long-term collaboration.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <ServiceCard
              icon={<Code className="h-8 w-8" />}
              title="Full Stack Development"
              description="Custom web applications using the MERN stack with modern architecture and best practices." price={""} />
            <ServiceCard
              icon={<Cloud className="h-8 w-8" />}
              title="Cloud Architecture"
              description="AWS cloud infrastructure design and implementation with cost optimization." price={""}
            />
            <ServiceCard
              icon={<Server className="h-8 w-8" />}
              title="DevOps Consulting"
              description="CI/CD pipeline setup, infrastructure automation, and deployment optimization." price={""}
            />
            <ServiceCard
              icon={<Rocket className="h-8 w-8" />}
              title="Technical Leadership"
              description="Architecture planning, and technical strategy consulting." price={""} />
          </div>
        </section>
      </main>
      {/* Contact Form Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
            <p
              className="text-muted-foreground cursor-pointer text-yellow-500 hover:text-yellow-600 transition-colors"
              onClick={handleCardToggle}
            >
              If you have any inquiries, please feel free to reach out. <u>Here</u>
            </p>
          </div>
          {isCardVisible && (
            <Card
              className="p-6 transition-all duration-500 transform opacity-100 translate-y-0"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="idea" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="idea"
                    placeholder="Let's Connect"
                    value={formData.idea}
                    onChange={(e) => setFormData(prev => ({ ...prev, idea: e.target.value }))}
                    required
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                © 2025 Brijesh Kori. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:brijeshkori22@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Brijesh-09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/brijesh-kori-049a2b203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/brijeshkori22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, liveUrl, githubUrl }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Globe className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              Source Code
            </Button>
          </a>
        )}
      </div>
    </Card>
  );
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, period, description }) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{company}</p>
        </div>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p>{description}</p>
    </Card>
  );
};

const BlogCard: React.FC<BlogCardProps> = ({ title, date, description, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
        <div className="mb-4">
          <p className="text-muted-foreground text-sm">{date}</p>
          <h3 className="text-xl font-semibold group-hover:underline">{title}</h3>
        </div>
        <p>{description}</p>
      </Card>
    </a>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
    </Card>
  );
};
