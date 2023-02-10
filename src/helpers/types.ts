export interface Organisation {
  'company_id': number,
  'company_name': string,
  'company_tin': string,
  'form_id': number,
  'tax_id': number,
  'logo': string | null
}

export enum OrganisationTabs {
  too = 'ТОО',
  ip = 'ИП',
  others = 'Прочие',
}

export enum Subtypes {
  legalEntities = 'Юридические лица',
  privatePractice = 'Частная практика',
  individuals = 'Физические лица',
}
