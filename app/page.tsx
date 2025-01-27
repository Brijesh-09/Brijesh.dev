"use client";

import { Mail, Github, Linkedin, Download, ArrowRight, Code, Cloud, Server, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
//import profilepic from "@/assets/profile.jpeg";
import profile from '@/assets/profile.jpeg'
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="rounded-full bg-primary/10 p-4 backdrop-blur-sm">
            <img
              //@ts-ignore
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
              Open to freelance projects and Work.
            </p>
          </div>
          <div className="flex gap-4">
            <Button>
              Hire Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Brijesh-09/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
       <a href="https://www.linkedin.com/in/brijesh-kori-049a2b203" target="_blank" rel="noopener noreferrer">
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
              title="Cloud-Native E-Commerce"
              description="Microservices-based platform using Docker & Kubernetes"
              tags={["MongoDB", "Express", "React", "Node.js", "K8s"]}
            />
            <ProjectCard
              title="CI/CD Pipeline Builder"
              description="Automated deployment tool with Jenkins integration"
              tags={["DevOps", "Jenkins", "AWS", "Docker"]}
            />
            <ProjectCard
              title="Real-time Analytics Dashboard"
              description="Performance monitoring system with WebSocket integration"
              tags={["MERN", "Socket.io", "Redis", "GraphQL"]}
            />
            <ProjectCard
              title="Infrastructure as Code"
              description="Cloud infrastructure automation using Terraform"
              tags={["Terraform", "AWS", "IaC", "CloudFormation"]}
            />
          </TabsContent>
          <TabsContent value="experience" className="mt-8 space-y-6">
            <ExperienceCard
              title="Senior DevOps Engineer"
              company="Tech Solutions Inc."
              period="2021 - Present"
              description="Leading cloud infrastructure and deployment automation initiatives"
            />
            <ExperienceCard
              title="Full Stack Developer"
              company="Digital Innovations Ltd"
              period="2019 - 2021"
              description="Developed and maintained MERN stack applications"
            />
          </TabsContent>
          <TabsContent value="blog" className="mt-8 grid gap-6 sm:grid-cols-2">
            <BlogCard
              title="Kubernetes Best Practices"
              date="March 15, 2024"
              description="Essential tips for managing production-grade K8s clusters"
            />
            <BlogCard
              title="Modern MERN Stack Architecture"
              date="March 1, 2024"
              description="Building scalable applications with MongoDB, Express, React, and Node.js"
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
            and long-term collaboration.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <ServiceCard
            icon={<Code className="h-8 w-8" />}
            title="Full Stack Development"
            description="Custom web applications using the MERN stack with modern architecture and best practices."
            price="From $20/hour"
          />
          <ServiceCard
            icon={<Cloud className="h-8 w-8" />}
            title="Cloud Architecture"
            description="AWS cloud infrastructure design and implementation with cost optimization."
            price="From $30/hour"
          />
          <ServiceCard
            icon={<Server className="h-8 w-8" />}
            title="DevOps Consulting"
            description="CI/CD pipeline setup, infrastructure automation, and deployment optimization."
            price="From $20/hour"
          />
          <ServiceCard
            icon={<Rocket className="h-8 w-8" />}
            title="Technical Leadership"
            description="Team mentoring, architecture planning, and technical strategy consulting."
            price="Custom Quote"
          />
        </div>
      </section>

      

      {/* Hire Me CTA */}
      <section className="container px-4 py-16 mx-auto">
        <Card className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life. Whether you need a full-stack application,
            cloud infrastructure, or DevOps expertise, I'm here to help.
          </p>
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, description, price }) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <p className="font-medium text-primary">{price}</p>
    </Card>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}

function ExperienceCard({ title, company, period, description }) {
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
}

function BlogCard({ title, date, description }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">{date}</p>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-primary">
        Read More
        <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </Card>
  );
}