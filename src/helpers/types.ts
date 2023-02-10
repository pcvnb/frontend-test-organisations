export interface Organisation {
  'company_id': number,
  'company_name': string,
  'company_tin': string,
  'form_id': number,
  'tax_id': number,
  'logo': string | null
}

export interface Ownership {
  id: number,
  code: string,
  full: string,
  short: string,
  is_jur: boolean,
  parent_id: null | number,
  account_type: null | string,
}

export interface TaxSystem {
  id: number,
  code: string,
  full: string,
  short: string,
  parent_id: null | number
}

export interface FormToSystem {
  tax_system_id: number,
  form_ownership_id: number,
}

export enum OrganisationTabs {
  too = 'too',
  ip = 'ip',
  others = 'others',
}

export enum Subtypes {
  legalEntities = 'else_jur',
  privatePractice = 'chp',
  individuals = 'fiz',
  none = 'none',
}

export enum ModalType {
  delete = 'delete',
  edit = 'edit',
  none = 'none',
}
