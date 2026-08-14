import { pgTable, uuid, text, varchar, timestamp, integer, real, boolean, jsonb } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  summary: text('summary'),
  problem: text('problem'),
  buildApproach: text('build_approach'),
  keyDecisions: text('key_decisions'),
  impact: text('impact'),
  bullet1: text('bullet1'),
  bullet2: text('bullet2'),
  bullet3: text('bullet3'),
  role: varchar('role', { length: 255 }),
  tools: text('tools').array(),
  projectUrl: varchar('project_url', { length: 500 }),
  date: varchar('date', { length: 100 }),
  coverImageId: uuid('cover_image_id'),
  status: varchar('status', { length: 50 }).notNull().default('draft'), // draft, published, archived
  displayOrder: integer('display_order').notNull().default(0),
  cardDescription: text('card_description'),
  caseStudyIntro: text('case_study_intro'),
  originalInput: jsonb('original_input'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const screens = pgTable('screens', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  originalUrl: varchar('original_url', { length: 1000 }).notNull(),
  optimizedUrl: varchar('optimized_url', { length: 1000 }),
  altText: text('alt_text'),
  caption: text('caption'),
  displayOrder: integer('display_order').notNull().default(0),
  width: integer('width'),
  height: integer('height'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const annotations = pgTable('annotations', {
  id: uuid('id').primaryKey().defaultRandom(),
  screenId: uuid('screen_id').notNull().references(() => screens.id, { onDelete: 'cascade' }),
  markerNumber: integer('marker_number').notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  explanation: text('explanation').notNull(),
  category: varchar('category', { length: 100 }),
  x: real('x').notNull(), // normalized 0-1
  y: real('y').notNull(), // normalized 0-1
  boxX: real('box_x'),
  boxY: real('box_y'),
  boxW: real('box_w'),
  boxH: real('box_h'),
  confidence: real('confidence'),
  visible: boolean('visible').notNull().default(true),
  displayOrder: integer('display_order').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Relations
export const projectsRelations = relations(projects, ({ many, one }) => ({
  screens: many(screens),
  coverImage: one(screens, {
    fields: [projects.coverImageId],
    references: [screens.id],
  }),
}));

export const screensRelations = relations(screens, ({ one, many }) => ({
  project: one(projects, {
    fields: [screens.projectId],
    references: [projects.id],
  }),
  annotations: many(annotations),
}));

export const annotationsRelations = relations(annotations, ({ one }) => ({
  screen: one(screens, {
    fields: [annotations.screenId],
    references: [screens.id],
  }),
}));
