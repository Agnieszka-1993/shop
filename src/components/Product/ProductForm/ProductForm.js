import styles from '../Product.module.scss';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

 const ProductForm = props => {

   const handleAddToCart = event => {
     event.preventDefault();
     console.log(
       "Produkt: " + props.title,
       "Price: " + props.price,
       "Selected size: " + props.currentSize,
       "Selected color: " + props.currentColor
     );
   };

   return (
         <form onSubmit={handleAddToCart}>
           <OptionSize
             sizes={props.sizes}
             currentSize={props.currentSize}
             setCurrentSize={props.setCurrentSize}
           />
           <OptionColor
             colors={props.colors}
             currentColor={props.currentColor}
             setCurrentColor={props.setCurrentColor}
             prepareColorClassName={props.prepareColorClassName}
           />
           <Button className={styles.button}>
             <span className="fa fa-shopping-cart" />
           </Button>
         </form>
   )
 };

 ProductForm.propTypes = {
   sizes: PropTypes.array.isRequired,
   currentSize: PropTypes.string.isRequired,
   setCurrentSize: PropTypes.func.isRequired,
   colors: PropTypes.array.isRequired,
   currentColor: PropTypes.string.isRequired,
   setCurrentColor: PropTypes.func.isRequired,
   price: PropTypes.number.isRequired,
   prepareColorClassName: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
 };

 export default ProductForm;