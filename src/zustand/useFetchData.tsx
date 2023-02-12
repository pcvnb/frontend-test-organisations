import { useEffect } from 'react';
import {
  useFormToSystemsStore, useOrgsStore, useOwnershipsStore, useTaxSystemsStore,
} from '@zustand/store';

const useFetchData = () => {
  const { fetchData: fetchOrgs, isLoading: areOrgsLoading } = useOrgsStore();
  const { fetchData: fetchOwnerships, isLoading: areOwnershipsLoading } = useOwnershipsStore();
  const { fetchData: fetchTaxSystems, isLoading: areTaxSystemsLoading } = useTaxSystemsStore();
  const {
    fetchData: fetchFormToSystems,
    isLoading: areFormToSystemsLoading,
  } = useFormToSystemsStore();

  useEffect(() => {
    fetchOrgs();
    fetchOwnerships();
    fetchTaxSystems();
    fetchFormToSystems();
  }, [fetchFormToSystems, fetchOrgs, fetchOwnerships, fetchTaxSystems]);

  return {
    isDataLoading:
            areOrgsLoading
            || areOwnershipsLoading
            || areTaxSystemsLoading
            || areFormToSystemsLoading,
  };
};

export default useFetchData;
