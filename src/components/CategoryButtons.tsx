import * as React from 'react';
import { categories } from '../utils/categoryUtility';
import Button from './Button';

const CategoryButtons = (props: any) => {
  return (
    <div {...props}>
      {categories.map(category => {
        return <Button.Outline>{category}</Button.Outline>;
      })}
    </div>
  );
};

export default CategoryButtons;
