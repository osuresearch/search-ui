import { Agent, Atom, DateTime, Email, Text as TextAtomic } from '@osuresearch/types';
import { ResourceHit } from './types';

export function aggregateAttributeNames(hits: ResourceHit[]): string[] {
  const names = new Set<string>();

  // TODO: Priority sorting and all that jazz.
  hits.forEach((hit) => Object.keys(hit.attributes).forEach((name) => names.add(name)));

  return Array.from(names);
}

export function isText(atom: Atom): atom is TextAtomic {
  return atom.type === 'Text';
}

export function isEmail(atom: Atom): atom is Email {
  return atom.type === 'Email';
}

export function isDateTime(atom: Atom): atom is DateTime {
  return atom.type === 'DateTime';
}

export function isAgent(atom: Atom): atom is Agent {
  return atom.type === 'Person' || atom.type === 'Organization' || atom.type === 'Software';
}
