import { Document } from 'mongoose';

export interface Idea {
  __id: string;
  title: string;
  description: string;
  categories: string[];
  tags: string[];
  references: string[];
  updatedAt: Date;
  createdAt: Date;
  avatar: string;
  username: string;
}

export interface IdeaDoc extends Document, Idea {}
