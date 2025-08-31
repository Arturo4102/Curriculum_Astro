// Este archivo configura las colecciones de contenido para Astro Content Collections.
// Define los esquemas de datos para los proyectos y el CV, especificando la estructura y tipos de datos permitidos.

import { defineCollection, z } from "astro:content";

// 'collections' es un objeto que agrupa las colecciones de contenido utilizadas en el sitio.
// Cada colección se define con un tipo y un esquema de validación usando Zod.

export const collections = {
  // Colección 'projects': almacena información sobre proyectos.
  projects: defineCollection({
    type: "content", // Indica que la colección es de tipo contenido (archivos Markdown, etc.)
    schema: z.object({
      title: z.string(), // Título del proyecto
      description: z.string(), // Descripción del proyecto
      tech: z.array(z.string()).default([]), // Tecnologías usadas en el proyecto
      cover: z.string().optional(), // Imagen de portada (opcional)
      repo: z.string().optional(), // URL del repositorio (opcional)
      demo: z.string().optional(), // URL de la demo (opcional)
      featured: z.boolean().default(false), // Si el proyecto es destacado
      order: z.number().default(0), // Orden de aparición
    }),
  }),
  // Colección 'cv': almacena los datos del currículum.
  cv: defineCollection({
    type: "data", // Indica que la colección es de tipo datos (archivos JSON, YAML, etc.)
    schema: z.object({
      name: z.string(), // Nombre de la persona
      role: z.string(), // Rol profesional
      location: z.string(), // Ubicación
      email: z.string(), // Correo electrónico
      links: z.array(z.object({ label: z.string(), url: z.string() })), // Enlaces relevantes (LinkedIn, GitHub, etc.)
      skills: z.array(z.string()), // Lista de habilidades
      // Fortalezas adicionales para priorizar sin mucha experiencia
      summary: z.string().optional(), // Resumen profesional breve
      highlights: z.array(z.string()).optional(), // Logros o puntos fuertes destacados
      softSkills: z.array(z.string()).optional(), // Habilidades blandas
      featuredProjects: z.array(z.string()).optional(), // Slugs de proyectos destacados
      experience: z.array(z.object({
        company: z.string(), // Empresa
        role: z.string(), // Rol desempeñado
        start: z.string(), // Fecha de inicio
        end: z.string().optional(), // Fecha de fin (opcional)
        bullets: z.array(z.string()) // Logros o responsabilidades
      })),
      education: z.array(z.object({ 
        school: z.string(), // Institución educativa
        degree: z.string(), // Título obtenido
        year: z.string() // Año de finalización
      }))
    }),
  }),
};
