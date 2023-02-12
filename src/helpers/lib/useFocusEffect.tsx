import React, { useEffect } from 'react';

interface IProps {
  ref: React.RefObject<HTMLElement>,
  condition?: boolean,
}

const useFocusEffect = ({ ref, condition = true }: IProps) => {
  useEffect(() => {
    if (condition && ref.current) {
      ref.current.focus();
    }
  }, [condition, ref]);
};
export default useFocusEffect;
