import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ReactInputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './Slider.css';

const classes = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
    displayNone: {
        display: 'none',
    },
};

const classNames = {
    // disabledInputRange: cx(styles.disabledInputRange, 'input-range input-range--disabled'),
    // track: cx(styles.track, 'input-range__track input-range__track--background'),
    // activeTrack: cx(styles.activeTrack, 'input-range__track input-range__track--active'),
    // slider: cx(styles.slider, 'input-range__slider'),
    // valueLabel: cx(
    //     classes.displayNone,
    //     'input-range__label input-range__label--value'
    // ),
    // labelContainer: cx(styles.labelContainer, 'input-range__label-container'),
    // maxLabel: cx(styles.maxLabel, 'input-range__label input-range__label--max', { dn: !props.showMinMaxLabels }),
    // minLabel: cx('input-range__label input-range__label--min', {
    //     dn: !props.showMinMaxLabels,
    // }),
    // inputRange: 'input-range',
    // sliderContainer: 'input-range__slider-container',
};

const minValue = 0;
const maxValue = 100;

function RangeSlider(props) {
    const [range, setRange] = useState({ min: minValue, max: maxValue });

    return (
        <div>
            <Typography id="label">Trim Video</Typography>
            <ReactInputRange
                maxValue={maxValue}
                minValue={minValue}
                value={{ min: range.min, max: range.max }}
                // classNames={classNames}
                // formatLabel={() => ''}
                onChange={value => {
                    const min = Math.max(value.min, minValue);
                    const max = Math.min(value.max, maxValue);
                    setRange({ min, max });
                }}
            />
        </div>
    );
}

export default RangeSlider;
