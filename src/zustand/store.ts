import { create } from 'zustand';
import {
  FormToSystem, Organisation, Ownership, TaxSystem,
} from '../helpers/types';
import { API } from '../helpers/api';

interface BaseState {
  isLoading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

interface OrgsState extends BaseState {
  orgs: Organisation[];
  removeOrg: (id: number) => void
}

interface OwnershipsState extends BaseState {
  ownerships: Ownership[];
}

interface TaxSystemsState extends BaseState {
  taxSystems: TaxSystem[];
}

interface FormToSystemsState extends BaseState {
  formsToSystems: FormToSystem[];
}

export const useOrgsStore = create<OrgsState>((set) => ({
  orgs: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(API.orgs);
      const orgs = await response.json();
      set({ orgs, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  removeOrg: (id: number) => set((state) => ({
    orgs: state.orgs.filter((org) => org.company_id !== id),
  })),
}));

export const useOwnershipsStore = create<OwnershipsState>((set) => ({
  ownerships: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(API.ownerships);
      const ownerships = await response.json();
      set({ ownerships, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export const useTaxSystemsStore = create<TaxSystemsState>((set) => ({
  taxSystems: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(API.taxSystems);
      const taxSystems = await response.json();
      set({ taxSystems, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export const useFormToSystemsStore = create<FormToSystemsState>((set) => ({
  formsToSystems: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(API.FormsToSystems);
      const formsToSystems = await response.json();
      set({ formsToSystems, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
