import styles from '../Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

const OptionColor = props => {

      return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(color => (
                <li key={color}>
                    <button
                    type="button"
                    className={clsx(props.prepareColorClassName(color), color === props.currentColor && styles.active)}
                    onClick={() => props.setCurrentColor(color)}
                    />
                </li>
                ))}
            </ul>
        </div>
      );
};

OptionColor.protoType = {
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default OptionColor;