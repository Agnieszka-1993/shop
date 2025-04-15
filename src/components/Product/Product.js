import styles from './Product.module.scss';
import clsx from 'clsx';
import ProductImage from './ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductForm from './ProductForm/ProductForm';


const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.slice(1).toLowerCase()];
  };

  const getPrice = () => {
    const selectedSize = props.sizes.find(size => size.name === currentSize);
    return props.basePrice + (selectedSize?.additionalPrice || 0);
  };



  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.name}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          getPrice={getPrice}
          prepareColorClassName={prepareColorClassName}
          title={props.title}
        />
      </div>
    </article>
  )
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;