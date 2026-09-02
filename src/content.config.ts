import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Título exacto del calendario editorial (documento 03). No se cambia.
    title: z.string(),
    keyword: z.string(),
    pilar: z.enum(['Método a la vista', 'Territorio y datos', 'Decisión pública', 'Ventana 2027']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // 150-160 caracteres, con la promesa concreta (documento 03, sección 06).
    description: z.string(),
    proximamente: z.boolean().default(false),
    servicioRelacionado: z.array(z.string()).default([]),
    autor: z.string().default('Yaocalli Consultoría y Estrategia'),
    tiempoLectura: z.string().optional(),
  }),
});

export const collections = { blog };
