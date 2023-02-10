import { OrganisationTabs, Subtypes } from './types';

export const mainIdsMap = new Map<string, number>([
  ['too', 1],
  ['else_jur', 1],
  ['ip', 14],
  ['chp', 15],
  ['fiz', 20],
]);

export const orgToText = new Map<OrganisationTabs, string>([
  [OrganisationTabs.too, 'ТОО'],
  [OrganisationTabs.ip, 'ИП'],
  [OrganisationTabs.others, 'Прочие'],
]);

export const SubtypesToText = new Map<Subtypes, string>([
  [Subtypes.legalEntities, 'Юридические лица'],
  [Subtypes.individuals, 'Частная практика'],
  [Subtypes.privatePractice, 'Физические лица'],
]);
