import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='category-preview-container'>
    {Object.keys(categoriesMap).map(title => {
      const products = categoriesMap[title];
      return (
        <CategoryPreview key={title} title={title} products={products} />
      )
    })}
    </div>
  );
};

export default CategoriesPreview;
