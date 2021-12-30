import React, { useEffect, forwardRef } from 'react';
import { CheckboxProps } from './Checkbox.type';

const useCombinedRefs = (
  ...refs: Array<
    React.Ref<HTMLInputElement> | React.RefObject<HTMLInputElement>
  >
) => {
  // React.Ref<HTMLInputElement> React.RefObject<HTMLInputElement>
  const targetRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        // readonly인데 이게 동작할 수가 없는 코드인데?
        // ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ indeterminate, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    const defaultRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = useCombinedRefs(ref, defaultRef);

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate ?? false;
      }
    }, [combinedRef, indeterminate]);

    return (
      <React.Fragment>
        <input type="checkbox" ref={combinedRef} {...rest} />
      </React.Fragment>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
